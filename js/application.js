/*
 * Configuration
 * TODO: move to seperate file
 */
var NAV_SECTIONS = [
      { name: "what",  url: "#/what",  headline: "WHAT - kaschkasch products", section_class: "products bigDetailsPage"},
      { name: "who",   url: "#/who",   headline: "WHO - kaschkasch about kaschkasch", section_class: "about bigDetailsPage"},
      { name: "when",  url: "#/when",  headline: "WHEN - kaschkasch news and infos", section_class: "news bigDetailsPage"},
      { name: "where", url: "#/where", headline: "WHERE - kaschkasch activities", section_class: "about bigDetailsPage"}
    ];

// allow usage of registered partials within templates
Handlebars.registerPartial("hb_nav_sections",  $("#hb_nav_sections").html());
Handlebars.registerPartial("hb_fullscale_img", $("#hb_fullscale_img").html());
Handlebars.registerPartial("hb_visual",        $("#hb_visual").html());

Handlebars.registerPartial("hb_startbild",     $("#hb_startbild").html());
Handlebars.registerPartial("hb_link",          $("#hb_link").html());
/* configuration end */


// application helper
Handlebars.registerHelper('include', function(options) {
  var context = {},
      mergeContext = function(obj) {
          for(var k in obj)context[k]=obj[k];
      };
  mergeContext(this);
  mergeContext(options.hash);
  return options.fn(context);
});


/*
 *  Application routing via sammyjs (http://sammyjs.org/)
 *  url scheme:
 *  main section #/:section
 *  product page #/:section/:product
 *  main_content_area id = 'main' --> now sammy knows whats the main content section (equal to this.element_selector = '#main'; within sammy.app())
 */
var app = $.sammy('#main', function( ) {
  // prepare the APP
  this.initialize = function() {
    // require Plugins and extensions here
    this.use('Handlebars', 'hbrs'); // include the plugin and alias handlebars() to hb()

    this.navSections = {};

    // prime the sections once with NAV_SECTIONS data for later (fast) lookup
    for (var i = 0, len = NAV_SECTIONS.length; i < len; i++) {
      this.navSections[NAV_SECTIONS[i].name] = NAV_SECTIONS[i];
    }

    // add "home" section to allowed navSections here since its a special nav section not in the section config
    this.navSections.home = { name: "home", url: "#/", headline: "kaschkasch cologne - designstudio by Florian Kallus and Sebastian Schneider."};

    this.defineRoutes();
  }

  // updates the Navigation Section
  this.navSectionData = function(selected_section){
    var nav_sections  = [];

    if (!this.navSections[selected_section]) {
      console.warn("No such section available --> ["+selected_section+"]");
      return null;
    }

    for(section in this.navSections) {
      this.navSections[section].active = section === selected_section;

      // skip home - it will not be rendered in nav section
      if (section !== "home") {
        // keep for rendering && to check wheter update of nav_section is needed
        nav_sections.push(this.navSections[section]);
      }
    }

    return nav_sections;
  };

  // updates the Navigation Section
  this.getBaseDataForSection = function(selected_section){
    var data = {};

    data.headline      = this.navSections[selected_section].headline;
    data.section_class = this.navSections[selected_section].section_class;

    data.nav_sections  = this.navSectionData(selected_section);

    return data;
  };

  this.defineRoutes = function() {

    // STARTPAGE
    this.get('#/',      function(context) {
      var section = "home",
          data = this.app.getBaseDataForSection(section),
          randomImage = function (list) {
            var randomListItem;

            randomListItem = Math.floor(Math.random()*list.length);
            randomListItem = randomListItem < (list.length-1) ? randomListItem : (list.length-1);

            return list[randomListItem] || null;
          }([ "IMG_1.JPG",
              "IMG_2.JPG",
              "IMG_3.JPG",
              "IMG_4.JPG",
              "IMG_5.JPG",
              "IMG_6.JPG",
              "IMG_7.JPG",
              "IMG_8.JPG",
              "IMG_9.JPG",
              "IMG_10.JPG",
              "IMG_11.JPG",
              "IMG_12.JPG",
              "IMG_13.JPG" ]);

      data.main_image_url = "images/start/" + randomImage;

      // clear the main area
      context.app.swap('');

      // add main layout on main element
      this.render('templates/hb_startpage.hbrs', data).appendTo(context.$element());
    });


    this.get('#/what',  function(context) {
      var section = "what",
          data = this.app.getBaseDataForSection(section);

      data.linkSections = products.sections || [];
      data.main_image_url = "images/what/what.jpg";

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_what.hbrs', data).appendTo(context.$element());
    });


    this.get('#/who',   function(context) {
      var section = "who",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_who.hbrs', data).appendTo(context.$element());
    });


    this.get('#/when',  function(context) {
      var section = "when",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_when.hbrs', data).appendTo(context.$element());
    });


    this.get('#/where', function(context) {
      var section = "where",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_where.hbrs', data).appendTo(context.$element());
    });


    this.get('#/what/product/:productname', function(context) {
      var section = "where",
          data = this.app.getBaseDataForSection(section);

      data.product         = products.withName(this.params['productname']);
      data.nextProduct     = products.nextTo(this.params['productname']);
      data.previousProduct = products.previousTo(this.params['productname']);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_product.hbrs', data).appendTo(context.$element());
    });


    this.get('#/download',  function(context) {
      var section = "what",
          data = this.app.getBaseDataForSection(section);

      data.linkSections = products.sections || [];
      data.main_image_url = "images/where/01.jpg";

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_what.hbrs', data).appendTo(context.$element());
    });
  };

  // bind app.run() handler to start of the initialization of the APP
  // Once the DOM is loaded and the APP started because of app.run()
  this.bind('run', function() { this.app.initialize(); });

});

$(function() {
  app.bindToAllEvents(function(event) {
    //debugger;
  });

  // every time a navigation was successfull and the route got followed
  app.bind("changed", function() {
    initPageOnLoad();
  });

  app.run()
});