var delay=400, 
    triggerSliding;

function blubbclick (event) {
  if (!event)
  event = window.event;
  if ( (event.type && event.type == "contextmenu") 
       || (event.button && event.button == 2) 
       || (event.which && event.which == 3)) {
    
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


$(document).ready(function() {
  $(".fullscale").eq(0).bind("load", maxOutImage);
  $(".startbild").eq(0).bind("load", function(){ $(this).fadeIn(); });

  $(".details").bind("click", function() {
    $(".detailsWrapper").toggleClass("collapsed");
  });

  $('.autoExpand img').eq(0).load(
  function() {
    window.setTimeout(function(){$('#detailsBox').toggleClass('collapsed',false)}, 500);
  }
  );

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

  // prepare the slider-content if dynamic
  if($("[data-img]").length > 0 && options.dynamicSlider) {
    $('#slider_dynamic img').removeAttr("class");

    // for every productlink create a preview slide in the #slider
    $("[data-img]").each(function(index){
      var elem = $(this),
          slideImg = $("<img>", { src: elem.attr("data-img") });
      $('#slider_dynamic').append(slideImg); 

      // add the index to the productlink to allow later matching with the pagination
      $(this).attr("data-slide-index", index );
    });


    $('[data-slide-index]').on('mouseover', function(event) {
      var that = this;
        clearTimeout(triggerSliding);
        triggerSliding = setTimeout(function(){
          // now that al the links with previews have preview images in the slider
          // allow mouseover on the link to trigger switching the slide to the according index
          var pagination_index = parseInt($(that).attr("data-slide-index"),10) + 1;
          $(".slidesjs-pagination-item").eq(pagination_index).find("a").trigger("click");
         }, delay);
    });

    $("#slider_dynamic").slidesjs(options);
    // hide pagination for what page
    $('.slidesjs-pagination').hide();
  }

  // initialize slidejs on the slider
  if($('#slider')[0]) {
    $("#slider").slidesjs(options);
  }
});

/*
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
}

document.onmousedown   = click;
document.oncontextmenu = click;

*/