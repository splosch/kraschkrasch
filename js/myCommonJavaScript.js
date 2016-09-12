var appK = appK || {};

$.extend(appK, {
  delay : 400,
  triggerSliding : null
});

function maxOutImage() {
  "use strict";

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
  "use strict";

  return products.indexOf(name);
}

function renderLinks(nextUrl, previousUrl) {
  "use strict";

  var nextProductLink = $('<a>&gt;</a>')
        .attr({ href: nextUrl || '#next_product' })
        .addClass("next_product_link"),
      prevProductLink = $('<a>&lt;</a>')
        .attr({ href: previousUrl || '#previous_product' })
        .addClass("prev_product_link");

  $(".productDetails header").eq(0).after(nextProductLink).after(prevProductLink);
}

function nextProductInList(currentProductIndex, products) {
  "use strict";

  return products[currentProductIndex+1] || products[0] || null;;
}


function previousProductInList(currentProductIndex, products) {
  "use strict";

  return products[currentProductIndex-1] || products[products.length-1] || null;;
}

function showProductNaviagtionLinks() {
  "use strict";

  var products = [ "Cavetto", "Rail", "Ferro", "Pepe", "Flai", "Shape", "Fju", "Zet", "RoundAbout", "Raft", "Scoop_table", "Scoop_chair",
                  "Bubka", "Hoeninger", "Dub", "CherryTable", "Keep", "Cherry", "Konichiwa", "Industrial",
                  "Cap", "PinaTableLamp", "Horizon", "Vase","Lyn", "Lop", "Luna", "Plank", "Check", "Bulb" ],
     productPrefix = "whatDetails",
     currentUrlParts = window.location.href.split(productPrefix),
     nextUrl,
     previousUrl,
     nextProduct,
     currentProduct,
     previousProduct,
     currentProductIndex;

  // only if the current page is a valid what-product page
  if(currentUrlParts.length === 2){
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

var mySlider = {
    defaults : {
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
        pauseOnHover: true,
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
    },

    init : function(sliderOptions) {
      this.options = $.extend(this.defaults, sliderOptions || {});

      if($("[data-img]").length > 0 && this.options.dynamicSlider) {
        this.initDynamicSlider();
        this.bindDynamicSliderInteraction();
      } else {
        // initialize static slidejs on the slider
        if($('#slider')[0]) {
          $("#slider").slidesjs(this.options);
        }
      }
    },

    initDynamicSlider : function() {
      // prepare the slider-content if dynamic
      $('#slider_dynamic img').removeAttr("class");

      // for every productlink create a preview slide in the #slider
      $("[data-img]").each(function(index){
        var elem = $(this),
            slideImg = $("<img>", { src: elem.attr("data-img") });
        $('#slider_dynamic').append(slideImg);

        // add the index to the productlink to allow later matching with the pagination
        $(this).attr("data-slide-index", index );
      });

      $("#slider_dynamic").slidesjs(this.options);
      // hide pagination for what page
      $('.slidesjs-pagination').hide();
    },

    bindDynamicSliderInteraction : function() {
      $('[data-slide-index]').on('mouseover', function() {
        var that = this;

        clearTimeout(appK.triggerSliding);
        appK.triggerSliding = setTimeout(function(){
          // now that all the links with previews have preview images in the slider
          // allow mouseover on the link to trigger switching the slide to the according index
          var paginationIndex = parseInt($(that).attr("data-slide-index"),10) + 1;
          $(".slidesjs-pagination-item").eq(paginationIndex).find("a").trigger("click");
          $('[data-slide-index]').removeClass("active");
          $(that).addClass("active");
        }, delay);
      });
    }
  };


$(document).ready(function() {
  "use strict";

  $(".fullscale.startbild").bind("load", maxOutImage);
  $(".startbild").eq(0).bind("load", function(){ $(this).fadeIn(); });

  $(".details").not(".keep_open > .details").bind("click", function(event) {
    // force close
    if ($(".detailsWrapper").is(".keep_closed")) {
      $(".detailsWrapper").toggleClass("collapsed", true);
      return false;
    }

    // force open
    if ($(".detailsWrapper").is(".keep_open")) {
      $(".detailsWrapper").toggleClass("collapsed", false);
      return true;
    }

    if ($(event.target).is(":not([target='_blank'])")) {
      $(".detailsWrapper").toggleClass("collapsed");
    }
  });

  if($("body.productDetails").length) {
    showProductNaviagtionLinks();
  }

  // if details is open and click on navigation is detected
  // close details first
  $("a").not(".slidesjs-pagination a, a[target='_blank']").on("click", function(event){
    if( $(".detailsWrapper").length && !$(".detailsWrapper").hasClass("collapsed")) {
      event.preventDefault();

      var goTo  = this.getAttribute("href"),
          linkOpensInNewWindow = this.getAttribute("target") === "_blank";

      // ~2s animation time for details box to slide right
      setTimeout(function(){ window.location = goTo; }, 1700);

      if (!linkOpensInNewWindow) {
        $(".detailsWrapper").addClass("collapsed keep_closed");
      }
    }
  });

  // automatic open details box unless next / previous product navigation links triggered openong the current product
  if(!(window.location.hash === "#previous_product" || window.location.hash === "#next_product")) {
    $('.autoExpand img').eq(0).load(
      function() {
        window.setTimeout(function(){$('#detailsBox').toggleClass('collapsed',false);}, 500);
      }
    );
  }

  $(window).bind("resize", function() {
    maxOutImage();
  });

  mySlider.init(sliderOptions);
});
