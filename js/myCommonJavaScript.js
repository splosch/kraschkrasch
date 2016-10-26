var appK = appK || {};

appK.delay = 400;
appK.triggerSliding = null;

function revealContentElement() {
  var content = document.querySelector(".content");

  if(content) {
    content.style.opacity = 1;
  }
}
// in case something goes wrong ...
// show the page anyways after 1 sec.
setTimeout(revealContentElement, 1000);

function maxOutImage() {
  "use strict";

  var fullscale = document.querySelector(".fullscale"),
      content   = document.querySelector(".content"),
      article   = document.querySelector("article");

  var newWidth  = content.offsetWidth,
      maxHeight = content.offsetHeight,
      oldWidth  = fullscale.offsetWidth,
      oldHeight = fullscale.offsetHeight,
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

  fullscale.style.width  = newWidth  + "px";
  fullscale.style.height = newHeight + "px";
  article.style.width    = newWidth  + "px";
  article.style.height   = newHeight + "px";

  appK.contentWidth = newWidth;
  appK.contentHeight = newHeight;

  // make the content visible again
  revealContentElement();
};

function openDetailsBoxForMainSections() {
  // takes '/preview/what.html' --> 'what'
  var mainSections = ['what','who','where','when'],
      section = window.location.pathname.split("/").pop().split(".")[0];

  if (mainSections.indexOf(section) !== -1){
    $("#detailsBox").removeClass("collapsed");
  }
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

  var products = [ "Cavetto", "Rail", "Ferro", "Pepe", "Flai", "Shape", "Fju", "Zet", "RoundAbout", "Scoop_table", "Scoop_chair",
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

appK.mySlider = {
    defaults : {
      width: appK.contentWidth || 900,
      height: appK.contentHeight || 600,

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
      },
      callback: {
        //loaded: function(){$(window).trigger("resize")}
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
        }, appK.delay);
      });
    }
  };


$(document).ready(function() {
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
      // only force collapsing in case a fragment/target was specified
      // undefined assures not influencing the toggling behaviour
      var forceCollapsing = (window.location.hash === "#detailsBox") || undefined;

      $(".detailsWrapper").toggleClass("collapsed", forceCollapsing);
    }

    // last
    // clean #detailsBox from url remove
    if (window.location.hash === "#detailsBox") {
      window.location.hash = "";
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



  $(window).bind("resize", function() {
    $(window).trigger("load");
    maxOutImage();
  });

  // open detailsBox for all category pages
  openDetailsBoxForMainSections();
});

// dont wait for scripts and styles - just need the dom to prepare
document.addEventListener("DOMContentLoaded", function(){
  "use strict";

  var sliderOptions = sliderOptions || appK.sliderOptions || {};
  maxOutImage();

  sliderOptions.width  = appK.contentWidth || 900;
  sliderOptions.height = appK.contentHeight || 600;

  appK.mySlider.init(sliderOptions);
});
