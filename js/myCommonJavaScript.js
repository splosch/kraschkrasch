function click (event) {
  if (!event)
  event = window.event;
  if ( (event.type && event.type == "contextmenu")
       || (event.button && event.button == 2)
       || (event.which && e.which == 3)) {

    if (window.opera) {
      window.alert("Sorry: Diese Funktion ist deaktiviert.");
    }

    return false;
  }
}

function maxOutImage() {
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

  $("article, .fullscale").width(newWidth)
                          .height(newHeight);

// force slider to update size
  $(window).trigger("load");
}

function currentNameInProductlist(name, products) {
  var index;

  index = products.indexOf(name);

  return index;
}

function renderLinks(nextUrl, previousUrl) {
  var next_product_link = $('<a>&gt;</a>')
        .attr({ href: nextUrl || '#next_product' })
        .addClass("next_product_link"),
      prev_product_link = $('<a>&lt;</a>')
        .attr({ href: previousUrl || '#previous_product' })
        .addClass("prev_product_link");

  $(".productDetails header").eq(0).after(next_product_link).after(prev_product_link);
}

function nextProductInList(currentProductIndex, products) {
  var name;

  name = products[currentProductIndex+1] || products[0] || null;

  return name;
}


function previousProductInList(currentProductIndex, products) {
  var name;

  name = products[currentProductIndex-1] || products[products.length-1] || null;

  return name;
}

function showProductNaviagtionLinks() {
 var products = [ "Zet", "RoundAbout", "Fju", "Raft", "Plank", "Check", "Scoop_table", "Scoop_chair",
                  "Bubka", "Hoeninger", "PinaSideTable", "tome", "TampLable", "CherryTable", "Keep", "Cherry", "Konichiwa", "Industrial",
                  "Cap", "PinaTableLamp", "Flachmann", "Candleblocks", "Luna", "Bulb", "Bonfire", "hopperboxes"],
     productPrefix = "whatDetails",
     currentUrlParts = window.location.href.split(productPrefix),
     nextUrl,
     prevUrl,
     nextProduct,
     currentProduct,
     previousProduct,
     currentProductIndex;

  // only if the current page is a valid what-product page
  if(currentUrlParts.length == 2){
    currentProduct = currentUrlParts[1].split(".html")[0];
    currentProductIndex = currentNameInProductlist(currentProduct, products);

    nextProduct = nextProductInList(currentProductIndex, products);
    previousProduct = previousProductInList(currentProductIndex, products);
  }

  if(nextProduct) {
    nextUrl = currentUrlParts[0] + productPrefix + nextProduct + ".html#next_product";
  }

  if(previousProduct) {
    previousUrl = currentUrlParts[0] + productPrefix + previousProduct + ".html#previous_product";
  }


  renderLinks(nextUrl, previousUrl);
}


$(document).ready(function() {
  $(".fullscale").eq(0).bind("load", maxOutImage);
  $(".startbild").eq(0).bind("load", function(){ $(this).fadeIn(); });

  $(".details").bind("click", function() {
    $(".detailsWrapper").toggleClass("collapsed");
  });

  if($("body.productDetails").length) {
    showProductNaviagtionLinks();
  }

  // automatic open details box unless next / previous product navigation links triggered openong the current product
  if(!(window.location.hash === "#previous_product" || window.location.hash === "#next_product")) {
    $('.autoExpand img').eq(0).load(
      function() {
        window.setTimeout(function(){$('#detailsBox').toggleClass('collapsed',false)}, 500);
      }
    );
  }

  $(window).bind("resize", function() {
    maxOutImage();
  });

  var options = typeof sliderOptions === "object" ? sliderOptions : {
    width: 900,
    height: 600,

    play: {
      active: false,
      // [boolean] Generate the play and stop buttons.
      // You cannot use your own buttons. Sorry.
      effect: "slide",
      // [string] Can be either "slide" or "fade".
      interval: 5000,
      // [number] Time spent on each slide in milliseconds.
      auto: true,
      // [boolean] Start playing the slideshow on load.
      pauseOnHover: false,
      // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
      // [number] restart delay on inactive slideshow
    },
    slide: {       // Slide effect settings.
      speed: 4000 // [number] Speed in milliseconds of the slide animation.
    },
    pagination: {
      active: true,
      effect: "slide" //"slide" or "fade".
    }
  };

  if($('#slider')[0]) {
    $("#slider").slidesjs(options);
  }
});

if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
}

document.onmousedown   = click;
document.oncontextmenu = click;