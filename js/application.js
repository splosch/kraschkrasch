/*
 * Configuration
 * TODO: move to seperate file
 */
var  NAV_SECTIONS = [
      { name: "home",  url: "#/"      },
      { name: "what",  url: "#/what"  },
      { name: "who",   url: "#/who"   },
      { name: "when",  url: "#/when"  },
      { name: "where", url: "#/where" }
    ],

    sections_source   = $("#hb_nav_sections").html(),
    product_source    = $("#hb_product").html(),
    sections_template = Handlebars.compile(sections_source),
    product_template  = Handlebars.compile(product_source);

/* configuration end */


/* 
 *  Application routing via sammyjs (http://sammyjs.org/)
 *  url scheme: 
 *  main section #/:section
 *  product page #/:section/:product
 */
var app = $.sammy(function( ) {

  this.navSections = {}

  // TODO: Move into initialize method
  // prime the sections once with NAV_SECTIONS data for later (fast) lookup
  for (var i = 0, len = NAV_SECTIONS.length; i < len; i++) {
    this.navSections[NAV_SECTIONS[i].name] = NAV_SECTIONS[i];
  }

  // updates the Navigation Section when a change occurs
  this.setNavSection = function(section){
    var sectionData = {};

    sectionData.NAV_SECTIONS  = NAV_SECTIONS;

    debugger;
    if ( section && this.navSections[section]) {
      // keep to check wheter update of nav_section is needed
      this.activeSection = sectionData.activeSection = section;

      $("#nav_sections").html(sections_template(sectionData));

      console.log("switched to section '"+this.activeSection+"'");
    } else {
      console.log("invalid section '"+this.activeSection+"'");
    }
  };

  // include the plugin and alias handlebars() to hb()
  this.use('Handlebars', 'hb');
  this.activeSection = "home";

  // defining the basic routes
  this.get('#/',      function() { 
    this.app.setNavSection("home");
    this.render('hb_nav_sections.hb', null, { hb_slider: 'hb-partial_slider.hb' });

    /* TODO Make this work 
    /  --> source [http://stackoverflow.com/questions/12046748/how-to-dynamically-allocate-a-partial-view-within-a-parent-view-with-handlebars]
    /  this.render(
    /   'templates/mainPage.hb', 
    /   item, 
    /   { subView: 'templates/textView.hb' }
    /  );
    */
  });
  this.get('#/what',  function() { this.app.setNavSection("what"); });
  this.get('#/who',   function() { this.app.setNavSection("who"); });
  this.get('#/when',  function() { this.app.setNavSection("when"); });
  this.get('#/where', function() { this.app.setNavSection("where"); });

  this.get('#/what/product/:productname', function() {
    this.app.setNavSection("what");
    alert("Switched to product: " + this.params['productname'])
  })
});

$(function() {
  app.run()
});