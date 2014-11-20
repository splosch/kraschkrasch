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
Handlebars.registerPartial("hb_visual",        $("#hb_visual").html());
Handlebars.registerPartial("hb_fullscale_img", $("#hb_fullscale_img").html());

Handlebars.registerPartial("hb_startbild",     $("#hb_startbild").html());

/* configuration end */


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
    this.use('Handlebars', 'hb'); // include the plugin and alias handlebars() to hb()

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
    // defining the basic routes
    this.get('#/',      function(context) {
      var section = "home",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      // add main layout on main element
      this.render('templates/hb_startpage.hb', data).appendTo(context.$element());
    });
    this.get('#/what',  function(context) {
      var section = "what",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_what.hb', data).appendTo(context.$element());
    });
    this.get('#/who',   function(context) {
      var section = "who",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_who.hb', data).appendTo(context.$element());
    });
    this.get('#/when',  function(context) {
      var section = "when",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_when.hb', data).appendTo(context.$element());
    });
    this.get('#/where', function(context) { 
      var section = "where",
          data = this.app.getBaseDataForSection(section);

      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_where.hb', data).appendTo(context.$element());
    });

    this.get('#/what/product/:productname', function(context) {
      var section = "where",
          data = this.app.getBaseDataForSection(section);

      data = { 
        product:
          {
            name:    "Bulb",
            section: "products",
            material: "glass | metal",
            dimensions: "90 | 120 | 160",
            development: { purpose: "coat hook", year   : "2013" },
            producers: [
              { 
                name: "SCHÖNBUCH", 
                url: "http://www.schoenbuch.com/de/wohnen/interior-accessoires/garderobenhaken/bulb.html"
              }
            ],
            images: [
              1,2,3,4,5,6
            ]
          }
      };



      // clear the main area
      context.app.swap('');

      this.render('templates/hb_page_product.hb', data).appendTo(context.$element());
      alert("Switched to product: " + this.params['productname']);
    })
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