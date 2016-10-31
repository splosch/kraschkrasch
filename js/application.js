var kkc = kkc || {};

/*
 *  Application routing via sammyjs (http://sammyjs.org/)
 *  url scheme:
 *  main section #/:section
 *  product page #/:section/:product
 *  main_content_area id = 'main' --> now sammy knows whats the main content section (equal to this.element_selector = '#main'; within sammy.app())
 */
kkc.app = $.sammy('#main', function( ) {
  // prepare the APP
  this.initialize = function() {
    // require Plugins and extensions here
    this.use('Handlebars', 'hbrs'); // include the plugin and alias handlebars() to hbrs()

    //this.templateCache('templates/hb_startpage.hbrs', Handlebars.templates['templates/hb_startpage.hbrs']);

    this.navSections = {};
    this.article = { width: 900, height: 600};

    // prime the sections once with kkc.NAV_SECTIONS data for later (fast) lookup
    for (var i = 0, len = kkc.NAV_SECTIONS.length; i < len; i++) {
      this.navSections[kkc.NAV_SECTIONS[i].name] = kkc.NAV_SECTIONS[i];
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
    this.get('#/',         kkc.controller.startpage);
    this.get('#/who',      kkc.controller.who);
    this.get('#/when',     kkc.controller.when);
    this.get('#/where',    kkc.controller.where);
    this.get('#/download', kkc.controller.download);
    this.get('#/what',     kkc.controller.what);
    this.get('#/what/showAll', kkc.controller.what, { showAll : true });
    this.get('#/what/product/:productname', kkc.controller.whatProduct);
  };

  // bind app.run() handler to start of the initialization of the APP
  // Once the DOM is loaded and the APP started because of app.run()
  this.bind('run', function() { this.app.initialize(); });
});


// global events
$(function() {
  kkc.app.isInitialized = false;

  kkc.app.bindToAllEvents(function(event) {
    //debugger;
  });

  $(window).bind("resize", function() {
    kkc.app.maxOutImage();
  });

  // every time a navigation was successfull and the route got followed
  kkc.app.bind("changed", function() {
    if(!this.app.isInitialized){
      this.app.isInitialized = this.app.maxOutImage();
    }

    $(document).trigger("appk_changed");

    // automatic open details box unless next / previous product navigation links triggered openong the current product
    if( this.app.last_route && this.app.last_route.param_names && this.app.last_route.param_names.indexOf("productname") == -1 ) {
      window.setTimeout(function(){$('#detailsBox').toggleClass('collapsed',false)}, 500);
    }

  });

  kkc.app.run()
});
