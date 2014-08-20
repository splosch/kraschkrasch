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
  this.get('#/',      function() { this.setSection("home"); }.bind(this));
  this.get('#/what',  function() { this.setSection("what"); }.bind(this));
  this.get('#/who',   function() { this.setSection("who"); }.bind(this));
  this.get('#/when',  function() { this.setSection("when"); }.bind(this));
  this.get('#/where', function() { this.setSection("where"); }.bind(this));

  this.get('#/what/product/:name', function() { 
    this.setSection("what"); 
    alert(this.params['name']);
  }.bind(this));
});

$(function() {
  app.run()
});