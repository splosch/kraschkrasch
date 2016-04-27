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
Handlebars.registerPartial("hb_download_link", $("#hb_download_link").html());
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
var controller = {
  // inside a controller "this" reffers to the sammy context
  startpage : function(context) {
    var section = "home",
        data = context.app.getBaseDataForSection(section),
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
    context.render('templates/hb_startpage.hbrs', data).appendTo(context.$element());
  },

  what : function(context, options) {
    var section = "what",
        showAll = options && options.showAll;
        data = context.app.getBaseDataForSection(section),
        imagelist = function(products){
          var images = [];
          products.all.forEach(function(product){
            images.push({ src: product.images[0], name: product.name});
          });

          return images;
        }(products);

    data.linkSections = products.sections || [];
    data.main_image_url = "images/what/what.jpg";
    data.showAll = options.showAll;

    data.slider = {
      imagesWithName : imagelist
    };

    // clear the main area
    context.app.swap('');

    context.render('templates/hb_page_what.hbrs', data).appendTo(context.$element());
  },

  whatProduct : function(context) {
    var section     = "what",
        data        = context.app.getBaseDataForSection(section),
        productName = context.params['productname'],
        product     = products.withName(productName);

    data.product         = product;
    data.nextProduct     = products.nextTo(productName);
    data.previousProduct = products.previousTo(productName);
    data.nav_sections    = context.app.navSections;

    data.slider = {
      images : product.images
    };

    // clear the main area
    context.app.swap('');

    context.render('templates/hb_page_product.hbrs', data).appendTo(context.$element());
  },

  who : function(context) {
    var section = "who",
        data = context.app.getBaseDataForSection(section);

    data.slider = {
      images : [
        "images/who/01.jpg",
        "images/who/02.jpg",
        "images/who/03.jpg",
        "images/who/04.jpg",
        "images/who/05.jpg",
        "images/who/06.jpg"
      ]
    };

    // clear the main area
    context.app.swap('');

    context.render('templates/hb_page_who.hbrs', data).appendTo(context.$element());
  },

  when : function(context) {
    var section = "when",
        data = context.app.getBaseDataForSection(section);

    data.slider = {
      images : [
        "images/when/01.jpg",
        "images/when/02.jpg",
        "images/when/03.jpg",
        "images/when/04.jpg",
        "images/when/05.jpg",
        "images/when/06.jpg"
      ]
    };

    // clear the main area
    context.app.swap('');

    context.render('templates/hb_page_when.hbrs', data).appendTo(context.$element());
  },

  where : function(context) {
    var section = "where",
        data = context.app.getBaseDataForSection(section);

    data.slider = {
      images : [
        "images/where/01.jpg",
        "images/where/02.jpg",
        "images/where/03.jpg",
        "images/where/04.jpg",
        "images/where/05.jpg",
        "images/where/06.jpg"
      ]
    };

    // clear the main area
    context.app.swap('');

    context.render('templates/hb_page_where.hbrs', data).appendTo(context.$element());
  },

  download : function(context) {
    var section = "download",
        data = context.app.getBaseDataForSection(section);

    data.linkSections = products.sections || [];
    data.main_image_url = "images/where/01.jpg";

    // clear the main area
    context.app.swap('');

    context.render('templates/hb_page_download.hbrs', data).appendTo(context.$element());
  }
};

var app = $.sammy('#main', function( ) {
  // prepare the APP
  this.initialize = function() {
    // require Plugins and extensions here
    this.use('Handlebars', 'hbrs'); // include the plugin and alias handlebars() to hb()

    this.navSections = {};
    this.article = { width: 900, height: 600};

    // prime the sections once with NAV_SECTIONS data for later (fast) lookup
    for (var i = 0, len = NAV_SECTIONS.length; i < len; i++) {
      this.navSections[NAV_SECTIONS[i].name] = NAV_SECTIONS[i];
    }

    // add "home" section to allowed navSections here since its a special nav section not in the section config
    this.navSections.home = { name: "home", url: "#/", headline: "kaschkasch cologne - designstudio by Florian Kallus and Sebastian Schneider."};
    // add "download" section to allowed navSections here since its a special nav section not in the section config
    this.navSections.download = { name: "download", url: "#/download", headline: "DOWNLOAD - kaschkasch download area", section_class: "download bigDetailsPage"}

    this.defineRoutes();
  }

  // helper
  this.maxOutImage = function() {
    var newWidth  = $(".content").width(),
        maxHeight = $(".content").height(),
        oldWidth  = $(".fullscale").width(),
        oldHeight = $(".fullscale").height(),
        factor    = newWidth / oldWidth,
        newHeight = oldHeight * factor;

    if(newHeight > maxHeight) {
      newHeight = maxHeight;
      factor    = newHeight / oldHeight;
      newWidth  = oldWidth * factor;
    }

    // max size cap
    if(newWidth > 920) {
      newWidth  = 920;
      newHeight = oldHeight * (newWidth / oldWidth);
    }

    this.article = { width: newWidth, height: newHeight};

    $("article").width(newWidth)
                .height(newHeight);

    // force slider to update size
    //$(window).trigger("load");
    return newWidth && $("article").width() === newWidth;
  }

  // updates the Navigation Section
  this.navSectionData = function(selected_section){
    var nav_sections    = [],
        skippedSections = ["home", "download"];

    if (!this.navSections[selected_section]) {
      console.warn("No such section available --> ["+selected_section+"]");
      return null;
    }

    for(section in this.navSections) {
      this.navSections[section].active = section === selected_section;

      // skipping certain sections that should not occur in the nav area
      if (skippedSections.indexOf(section) === -1) {
        // keep for rendering && to check wheter update of nav_section is needed
        nav_sections.push(this.navSections[section]);
      }
    }

    return nav_sections;
  };

  // updates the Navigation Section
  this.getBaseDataForSection = function(selected_section){
    var data = {};

    data.article = this.article || null;

    data.headline      = this.navSections[selected_section].headline;
    data.section_class = this.navSections[selected_section].section_class;

    data.nav_sections  = this.navSectionData(selected_section);

    return data;
  };

  this.defineRoutes = function() {

    // STARTPAGE
    this.get('#/',         controller.startpage);
    this.get('#/who',      controller.who);
    this.get('#/when',     controller.when);
    this.get('#/where',    controller.where);
    this.get('#/download', controller.download);
    this.get('#/what',     controller.what);
    this.get('#/what/showAll', controller.what, { showAll : true });
    this.get('#/what/product/:productname', controller.whatProduct);
  };

  // bind app.run() handler to start of the initialization of the APP
  // Once the DOM is loaded and the APP started because of app.run()
  this.bind('run', function() { this.app.initialize(); });
});


// global events
$(function() {
  app.isInitialized = false;

  app.bindToAllEvents(function(event) {
    //debugger;
  });

  $(window).bind("resize", function() {
    app.maxOutImage();
  });

  // every time a navigation was successfull and the route got followed
  app.bind("changed", function() {
    if(!app.isInitialized){
      app.isInitialized = app.maxOutImage();
    }

    initPageOnLoad();

    // automatic open details box unless next / previous product navigation links triggered openong the current product
    if( this.app.last_route && this.app.last_route.param_names && this.app.last_route.param_names.indexOf("productname") == -1 ) {
      window.setTimeout(function(){$('#detailsBox').toggleClass('collapsed',false)}, 500);
    }

  });

  app.run()
});
