/*
 * Configuration
 * TODO: move to seperate file
 */
var sections = {
      home : {url : "#/"},
      what : {url : "#/what"},
      who  : {url : "#/who"},
      when : {url : "#/when"},
      where: {url : "#/where"}
    };

/* configuration end */


/* 
 *  Application routing via sammyjs (http://sammyjs.org/)
 *  url scheme: 
 *  main section #/:section
 *  product page #/:section/:product
 */
var app = $.sammy(function( ) {

  this.setSection = function(section){
    if ( !!sections[section] ) {
      this.section = section;

      console.log("switched to section '"+section+"'");
    } else {
      console.log("invalid section '"+section+"'");
    }
  };

  // include the plugin and alias handlebars() to hb()
  //this.use('Handlebars', 'hb');
  this.section = "home";

  // defining the basic routes
  this.get('#/',      function() { this.app.setSection("home"); });
  this.get('#/what',  function() { this.app.setSection("what"); });
  this.get('#/who',   function() { this.app.setSection("who"); });
  this.get('#/when',  function() { this.app.setSection("when"); });
  this.get('#/where', function() { this.app.setSection("where"); });

  this.get('#/what/product/:productname', function() {
    this.app.setSection("what");
    alert("Switched to product: " + this.params['productname'])
  })
});

$(function() {
  app.run()
});