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
