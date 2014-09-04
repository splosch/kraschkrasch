/*
 * Configuration
 * TODO: move to seperate file
 */
var NAV_SECTIONS = [
      { name: "what",  url: "#/what",  headline: "WHAT - kaschkasch products"},
      { name: "who",   url: "#/who",   headline: "WHO - kaschkasch about kaschkasch"},
      { name: "when",  url: "#/when",  headline: "WHEN - kaschkasch news and infos"},
      { name: "where", url: "#/where", headline: "WHERE - kaschkasch activities"}
    ],

    layout_template   = Handlebars.compile($("#hb_main_layout").html()),
    sections_template = Handlebars.compile($("#hb_nav_sections").html()),
    product_template  = Handlebars.compile($("#hb_product").html()),
    what_template     = Handlebars.compile($("#hb_what").html());
    // who_template      = Handlebars.compile($("#hb_who").html()),
    // when_template     = Handlebars.compile($("#hb_when").html()),
    // where_template    = Handlebars.compile($("#hb_where").html());

// allow usage of registered partials within templates

Handlebars.registerPartial("hb_startbild", $("#hb_startbild").html());
Handlebars.registerPartial("hb_visual", $("#hb_visual").html());
Handlebars.registerPartial("hb_nav_sections", $("#hb_nav_sections").html());
Handlebars.registerPartial("hb_product_nav", $("#hb_product_nav").html());
Handlebars.registerPartial("hb_fullscale_img", $("#hb_fullscale_img").html());

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
  this.setNavSection = function(selected_section){
    var sectionData = { 
          nav_sections  : []
        };

    if (!this.navSections[selected_section]) {
      console.warn("No such section available --> ["+selected_section+"]");
      return null;
    }

    for(section in this.navSections) {
      this.navSections[section].active = section === selected_section;

      // skip home - it will not be rendered in nav section
      if (section !== "home") {
        // keep for rendering && to check wheter update of nav_section is needed
        sectionData.nav_sections.push(this.navSections[section]);
      }
    }

    // update the respective section
    $("#nav_sections").html(sections_template(sectionData));
  };

  this.defineRoutes = function() {
    // defining the basic routes
    this.get('#/',      function() {
      var section = "home",
          data = {};
      data.headline = this.app.navSections[section].headline;

      $("#main").html(layout_template(data));
      this.app.setNavSection(section);
    });
    this.get('#/what',  function() {
      var section = "what",
          data = {};
      data.headline = this.app.navSections[section].headline;

      $("#main").html(layout_template(data));
      this.app.setNavSection(section);
    });
    this.get('#/who',   function() {
      var section = "who",
          data = {};
      data.headline = this.app.navSections[section].headline;

      $("#main").html(layout_template(data));
      this.app.setNavSection(section);
    });
    this.get('#/when',  function() {
      var section = "when",
          data = {};
      data.headline = this.app.navSections[section].headline;

      $("#main").html(layout_template(data));
      this.app.setNavSection(section);
    });
    this.get('#/where', function() { 
      var section = "where",
          data = {};
      data.headline = this.app.navSections[section].headline;

      $("#main").html(layout_template(data));
      this.app.setNavSection(section);
    });

    this.get('#/what/product/:productname', function() {
      this.app.setNavSection("what");
      $("#main-area").html(product_template(productData || {}));
      alert("Switched to product: " + this.params['productname'])
    })
  };

  // bind app.run() handler to start of the initialization of the APP  
  // Once the DOM is loaded and the APP started because of app.run()
  this.bind('run', function() { this.app.initialize(); });

});

$(function() {
  app.run()
});