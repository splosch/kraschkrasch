/*
 * Configuration
 * TODO: move to seperate file
 */
var  NAV_SECTIONS = [
      { name: "what",  url: "#/what"  },
      { name: "who",   url: "#/who"   },
      { name: "when",  url: "#/when"  },
      { name: "where", url: "#/where" }
    ],

    sections_template = Handlebars.compile($("#hb_nav_sections").html()),
    product_template  = Handlebars.compile($("#hb_product").html());
    what_template     = Handlebars.compile($("#hb_what").html());
    who_template      = Handlebars.compile($("#hb_who").html());
    when_template     = Handlebars.compile($("#hb_when").html());
    where_template    = Handlebars.compile($("#hb_where").html());

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
    this.navSections.home = { name: "home", url: "#/" };

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
      this.app.setNavSection("home");
    });
    this.get('#/what',  function() { 
      this.app.setNavSection("what");
      $("#main-area").html(what_template());
    });
    this.get('#/who',   function() { 
      this.app.setNavSection("who");
      $("#main-area").html(who_template());
    });
    this.get('#/when',  function() { 
      this.app.setNavSection("when"); 
      $("#main-area").html(when_template());
    });
    this.get('#/where', function() { 
      this.app.setNavSection("where");
      $("#main-area").html(where_template());
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