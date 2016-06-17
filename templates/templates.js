(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['templates/hb_page_what.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <li>\n                    <h3> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </h3>\n                    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                  </li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>"
    + ((stack1 = container.invokePartial(partials.hb_link,depth0,{"name":"hb_link","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <script>\n    specialOptions.width = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ";\n    specialOptions.height = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0))
    + ";\n  </script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_visual,depth0,{"name":"hb_visual","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div id=\"detailsBox\" class=\"detailsWrapper "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showAll : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n            <div class=\"aniContainer\">\n\n              <ul class=\"productNav\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.linkSections : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </ul>\n\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n\n<script>\n  // Einstellungen für dynamischen slider\n  var specialOptions = {\n        width: 900,\n        height: 600,\n\n        play: {\n          active: false,\n          // [boolean] Generate the play and stop buttons.\n          // You cannot use your own buttons. Sorry.\n          effect: \"fade\",\n          // [string] Can be either \"slide\" or \"fade\".\n          interval: 5000,\n          // [number] Time spent on each slide in milliseconds.\n          auto: false,\n          // [boolean] Start playing the slideshow on load.\n          pauseOnHover: true,\n          // [boolean] pause a playing slideshow on hover\n          restartDelay: 2500\n          // [number] restart delay on inactive slideshow\n        },\n        effect: {\n          fade: {\n            speed: 900,\n            crossfade: true\n          }\n        },\n        pagination: {\n          active: true,\n          effect: \"fade\" //\"slide\" or \"fade\".\n        }\n      };\n</script>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['templates/hb_page_download.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <li>\n                    <h3> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </h3>\n                    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                  </li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.download : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                          <li>"
    + ((stack1 = container.invokePartial(partials.hb_download_link,depth0,{"name":"hb_download_link","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <script>\n    specialOptions.width = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ";\n    specialOptions.height = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0))
    + ";\n  </script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_startbild,depth0,{"name":"hb_startbild","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div class=\"imprint\">\n          <h2>Download area</h2>\n          <p>\n            click on the several products to download\n          </p>\n        </div>\n\n        <div id=\"detailsBox\" class=\"detailsWrapper collapsed\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n            <div class=\"aniContainer\">\n\n              <ul class=\"productNav\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.linkSections : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                <li>\n                  <h3> about us </h3>\n                  <ul>\n                    <li> <a target=\"_blank\" filename=\"kaschkasch_portrait\" href=\"https://drive.google.com/folderview?id=0B_DmGn8prUUIWTZBa3Fub0JmTEE&usp=sharing\"> portait </a> </li>\n                    <li> <a target=\"_blank\" filename=\"kaschkasch_studio\" href=\"https://drive.google.com/folderview?id=0B_DmGn8prUUIc2JmUGxCblpaS0E&usp=sharing\"> studio </a> </li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n\n<script>\n  // Einstellungen für dynamischen slider\n  var specialOptions = {\n        width: 900,\n        height: 600,\n\n        play: {\n          active: false,\n          // [boolean] Generate the play and stop buttons.\n          // You cannot use your own buttons. Sorry.\n          effect: \"fade\",\n          // [string] Can be either \"slide\" or \"fade\".\n          interval: 5000,\n          // [number] Time spent on each slide in milliseconds.\n          auto: false,\n          // [boolean] Start playing the slideshow on load.\n          pauseOnHover: true,\n          // [boolean] pause a playing slideshow on hover\n          restartDelay: 2500\n          // [number] restart delay on inactive slideshow\n        },\n        effect: {\n          fade: {\n            speed: 900,\n            crossfade: true\n          }\n        },\n        pagination: {\n          active: true,\n          effect: \"fade\" //\"slide\" or \"fade\".\n        }\n      };\n </script>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['templates/hb_page_product.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.previousProduct : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.previousProduct : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" id=\"#previous_product\" class=\"prev_product_link\">&lt;</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nextProduct : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nextProduct : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" id=\"#next_product\" class=\"next_product_link\">&gt;</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <h3>Dimensions_</h3>\n                <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.dimensions : stack1), depth0))
    + "</p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <h3>Material_</h3>\n                <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.material : stack1), depth0))
    + "</p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <h3>Producer_</h3>\n                <p>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.producers : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </p>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                      <a class=\"follow\" href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "                      "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.extras : stack1)) != null ? stack1.video : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.extras : stack1)) != null ? stack1.notice : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                  <h3>Extras_</h3>\n                  <p>\n                    <a class=\"follow\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.extras : stack1)) != null ? stack1.video : stack1), depth0))
    + "\" target=\"_blank\">VIDEO</a>\n                  </p>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                  <p>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.extras : stack1)) != null ? stack1.notice : stack1), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression, alias3=container.lambda;

  return "<div id=\"container\" class=\""
    + alias2(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + " productDetailsPage\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.previousProduct : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.nextProduct : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_visual,depth0,{"name":"hb_visual","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div id=\"detailsBox\" class=\"detailsWrapper collapsed\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n\n            <div class=\"aniContainer\">\n              <a class=\"follow backlink\" href=\""
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.nav_sections : depth0)) != null ? stack1.what : stack1)) != null ? stack1.url : stack1), depth0))
    + "/showAll\">back to products</a>\n\n              <h2>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n              <p><i>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.development : stack1)) != null ? stack1.purpose : stack1), depth0))
    + " | "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.development : stack1)) != null ? stack1.year : stack1), depth0))
    + "</i></p>\n              <p>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.summary : stack1), depth0))
    + "</p>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.dimensions : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.material : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.producers : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.extras : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n          </div>\n        </div>\n\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['templates/hb_page_what.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <li>\n                    <h3> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </h3>\n                    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                  </li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>"
    + ((stack1 = container.invokePartial(partials.hb_link,depth0,{"name":"hb_link","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <script>\n    specialOptions.width = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ";\n    specialOptions.height = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0))
    + ";\n  </script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_visual,depth0,{"name":"hb_visual","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div id=\"detailsBox\" class=\"detailsWrapper "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showAll : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n            <div class=\"aniContainer\">\n\n              <ul class=\"productNav\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.linkSections : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </ul>\n\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n\n<script>\n  // Einstellungen für dynamischen slider\n  var specialOptions = {\n        width: 900,\n        height: 600,\n\n        play: {\n          active: false,\n          // [boolean] Generate the play and stop buttons.\n          // You cannot use your own buttons. Sorry.\n          effect: \"fade\",\n          // [string] Can be either \"slide\" or \"fade\".\n          interval: 5000,\n          // [number] Time spent on each slide in milliseconds.\n          auto: false,\n          // [boolean] Start playing the slideshow on load.\n          pauseOnHover: true,\n          // [boolean] pause a playing slideshow on hover\n          restartDelay: 2500\n          // [number] restart delay on inactive slideshow\n        },\n        effect: {\n          fade: {\n            speed: 900,\n            crossfade: true\n          }\n        },\n        pagination: {\n          active: true,\n          effect: \"fade\" //\"slide\" or \"fade\".\n        }\n      };\n</script>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['templates/hb_page_when.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <script>\n    sliderOptions.width = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ";\n    sliderOptions.height = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0))
    + ";\n  </script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_visual,depth0,{"name":"hb_visual","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div id=\"detailsBox\" class=\"detailsWrapper collapsed\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n\n            <div class=\"aniContainer\">\n              <h3>Exhibitions_</h3>\n              <ul class=\"dates\">\n                SaloneSatellite, IMM, Stockholm Furniture Fair, Clerkenwell Design Week,\n                Ambiente, Light&Building, ICFF, Interieur,\n                Maison et Objet, DMY and others.\n              </ul>\n              <br>\n\n              <h3>Publications_</h3>\n              <p>\n                Wallpaper, Frame, Schöner Wohnen, Case de Abitare,\n                RUM, Surface, Couch, Neo2, Damn, ELLE Decoration,\n                Wohnrevue, A&W, KWest, Raum5, Wohn!Ideen, Form\n                and many others.\n              </p>\n\n              <h3>Awards_</h3>\n              <p>\n                German Design Award Nominée 2015, Interior Innovation Award, German Design Award Nominée 2013, Designpreis Deutschland Nominée, Interieur Award winner.\n              </p>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n\n\n<script>\n  var sliderOptions = {\n        width: 900,\n        height: 600,\n        play: {\n          active: false,\n          // [boolean] Generate the play and stop buttons.\n          // You cannot use your own buttons. Sorry.\n          effect: \"slide\",\n          // [string] Can be either \"slide\" or \"fade\".\n          interval: 5000,\n          // [number] Time spent on each slide in milliseconds.\n          auto: true,\n          // [boolean] Start playing the slideshow on load.\n          pauseOnHover: true,\n          // [boolean] pause a playing slideshow on hover\n          restartDelay: 2500\n          // [number] restart delay on inactive slideshow\n        },\n        slide: {       // Slide effect settings.\n          speed: 4000 // [number] Speed in milliseconds of the slide animation.\n        },\n        pagination: {\n          active: true,\n          effect: \"slide\" //\"slide\" or \"fade\".\n        }\n      };\n</script>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['templates/hb_page_where.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <script>\n    sliderOptions.width = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ";\n    sliderOptions.height = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0))
    + ";\n  </script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_visual,depth0,{"name":"hb_visual","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div id=\"detailsBox\" class=\"detailsWrapper collapsed\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n            <div class=\"aniContainer\">\n              <p>\n                <b>kaschkasch´s</b> studio and workshop are located in a charming backyard building in the former working-class district cologne Zollstock (means: folding ruler). Back in the days the studio was a saddlery and the model-building workshop was a horse stable. The associated garden offers kaschkasch the possibility to grow their own vegetables.\n              </p>\n\n              <h3>Address_</h3>\n              <p>\n                <a class=\"follow\" href=\"https://maps.google.com/maps?q=kaschkasch&client=safari&oe=UTF-8&fb=1&cid=15081375848978126355&t=h&z=16&iwloc=A\" target=\"_blank\">\n                  kaschkasch<br>\n                  Hoeningerweg 174<br>\n                  50969 Cologne<br>\n                  Germany <br>\n                </a>\n              </p>\n\n              <h3>Phone_</h3>\n              <p>\n                <a href=\"tel:+4922120431759\"> studio 0221 204 31 759</a><br>\n                <a href=\"tel:+491797790652\">Florian 0049 179 77 90 652</a><br>\n                <a href=\"tel:+4915233586479\">Sebastian 0049 152 33 58 64 79</a><br>\n              </p>\n\n              <h3>Email_</h3>\n              <p>\n                <a class=\"follow\" href=\"mailto:mail@kaschkasch.com\">mail@kaschkasch.com (general)</a><br ><a class=\"follow\" href=\"mailto:press@kaschkasch.com\">press@kaschkasch.com (press)</a>\n              </p>\n\n              <h3>Imprint_</h3>\n              <p>\n                <a class=\"follow\" href=\"imprint.html\">click here!</a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n    </div>\n  </div>\n</div>\n\n\n<script>\n  var sliderOptions = {\n        width: 900,\n        height: 600,\n        play: {\n          active: false,\n          // [boolean] Generate the play and stop buttons.\n          // You cannot use your own buttons. Sorry.\n          effect: \"slide\",\n          // [string] Can be either \"slide\" or \"fade\".\n          interval: 5000,\n          // [number] Time spent on each slide in milliseconds.\n          auto: true,\n          // [boolean] Start playing the slideshow on load.\n          pauseOnHover: true,\n          // [boolean] pause a playing slideshow on hover\n          restartDelay: 2500\n          // [number] restart delay on inactive slideshow\n        },\n        slide: {       // Slide effect settings.\n          speed: 4000 // [number] Speed in milliseconds of the slide animation.\n        },\n        pagination: {\n          active: true,\n          effect: \"slide\" //\"slide\" or \"fade\".\n        }\n      };\n</script>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['templates/hb_page_who.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <script>\n    sliderOptions.width = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ";\n    sliderOptions.height = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0))
    + ";\n  </script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = container.invokePartial(partials.hb_visual,depth0,{"name":"hb_visual","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div id=\"detailsBox\" class=\"detailsWrapper collapsed\">\n          <div class=\"details\">\n            <div class=\"label\"><span class=\"icon_arrow\"></span></div>\n            <div class=\"aniContainer\">\n              <h2>kaschkasch cologne</h2>\n              <p>\n                The design studio was established\n                by Florian Kallus and Sebastian Schneider.\n              </p>\n              <p>\n                kaschkasch always tries to achieve the maximum out of\n                the minimum by breaking every idea down to its essential elements.\n              </p>\n              <p>\n                The products are casual and voguish at the same time.\n                Precise lines and geometric shapes give them a graphical\n                impression, that is underlined by fashioned colouring and\n                straightforwardness. Every piece has a little thing to\n                discover that speaks of the designers’ love for details.\n              </p>\n\n              <h3>Clients_</h3>\n              <p>\n                Menu | Zeitraum | Normann Copenhagen | Schönbuch | Bolia | Magazin | Esaila | Dreizehngrad | Asco | Hubert Feldkircher\n              </p>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n\n\n<script>\n  var sliderOptions = {\n        width: 900,\n        height: 600,\n\n        play: {\n          active: false,\n          // [boolean] Generate the play and stop buttons.\n          // You cannot use your own buttons. Sorry.\n          effect: \"slide\",\n          // [string] Can be either \"slide\" or \"fade\".\n          interval: 5000,\n          // [number] Time spent on each slide in milliseconds.\n          auto: true,\n          // [boolean] Start playing the slideshow on load.\n          pauseOnHover: true,\n          // [boolean] pause a playing slideshow on hover\n          restartDelay: 2500\n          // [number] restart delay on inactive slideshow\n        },\n        slide: {       // Slide effect settings.\n          speed: 4000 // [number] Speed in milliseconds of the slide animation.\n        },\n        pagination: {\n          active: true,\n          effect: \"slide\" //\"slide\" or \"fade\".\n        }\n      };\n</script>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['templates/hb_startpage.hbrs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"invisible\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.width : stack1), depth0))
    + ", height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.height : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"container\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.section_class || (depth0 != null ? depth0.section_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"section_class","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content centeringContainer\">\n    <div class=\"centered\">\n\n      <header>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href=\"#/\"><img src=\"images/logo.png\"/></a>\n      </header>\n\n      <article id=\"main-area\" style=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.hb_startbild,depth0,{"name":"hb_startbild","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </article>\n\n      <nav id=\"nav_sections\">"
    + ((stack1 = container.invokePartial(partials.hb_nav_sections,depth0,{"name":"hb_nav_sections","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</nav>\n\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});
})();
