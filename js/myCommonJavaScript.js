var delay=400,
    triggerSliding;

function initPageOnLoad() {
  $(".fullscale").eq(0).bind("load", maxOutImage);
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


  // if details is open and click on navigation is detected
  // close details first
  $("a").not(".slidesjs-pagination a, a[target='_blank']").on("click", function(event){
    if( $(".detailsWrapper").length && !$(".detailsWrapper").hasClass("collapsed")) {
      event.preventDefault();

      var goTo  = this.getAttribute("href"),
          linkOpensInNewWindow = this.getAttribute("target") === "_blank";

      setTimeout(function(){
           window.location = goTo;
      },1700); // 2s animation time for details box to slide right

      if (!linkOpensInNewWindow) {
        $(".detailsWrapper").addClass("collapsed keep_closed");
      }
    }
  });

  // automatic open details box unless next / previous product navigation links triggered openong the current product
  if(!(window.location.hash === "#previous_product" || window.location.hash === "#next_product")) {
    $('.autoExpand img').eq(0).load(
      function() {
        window.setTimeout(function(){$('#detailsBox').toggleClass('collapsed',false)}, 500);
      }
    );
  }

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
  };

    // prepare the slider-content if dynamic
  if($("[data-slider-name]").length) {

    $('[data-slider-img]').on('mouseover', function(event) {
      var that = this;

      clearTimeout(triggerSliding);
      triggerSliding = setTimeout(function(){
        // now that al the links with previews have preview images in the slider
        // allow mouseover on the link to trigger switching the slide
        var $slider = $("#slider"),
            activeProductName = $(that).data("sliderName"),
            slideJsIndexToActivate = $slider.find('[data-product-name="'+activeProductName+'"]').attr("slidesjs-index");

        $slider.find('[data-slidesjs-item="'+slideJsIndexToActivate+'"]').trigger("click");
        $('[data-slider-img]').removeClass("active");
        $(that).addClass("active");
      }, delay);
    });

    $("#slider").slidesjs(specialOptions || options);
    // hide pagination for what page
    $(".slidesjs-pagination").hide();
  }

  // initialize slidejs on the slider
  if($('#slider')[0]) {
    $("#slider").slidesjs(options);
  }
}