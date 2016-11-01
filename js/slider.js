var appK = appK || {};

appK.delay = 400;
appK.triggerSliding = null;

appK.mySlider = {
  defaults : {
    width: 900,
    height: 600,

    play: {
      active: false,
      effect: "slide",  // [string] Can be either "slide" or "fade".
      interval: 5000,
      auto: true,
      pauseOnHover: true,
      restartDelay: 2500
    },
    slide: {       // Slide effect settings.
      speed: 4000  // [number] Speed in milliseconds of the slide animation.
    },
    pagination: {
      active: true,
      effect: "slide" //"slide" or "fade".
    },
    callback: {
    }
  },

  init : function(sliderOptions) {
    this.options = $.extend(this.defaults, sliderOptions || {});

    this.slider = $("#slider");

    if($("[data-slider-img]").length > 0 && this.options.dynamicSlider) {
      this.initDynamicSlider();
      this.bindDynamicSliderInteraction();
    } else {
      // initialize static slidejs on the slider
      if(this.slider[0]) {
        this.slider.slidesjs(this.options);
      }
    }
  },

  initDynamicSlider : function() {
    // prepare the slider-content if dynamic
    this.slider.find("img").removeAttr("class");

    // for every productlink create a preview slide in the #slider
    $("[data-slider-img]").each(function(index, element){
      var element = $(element),
          slideImg = $("<img>", { src: element.attr("data-slider-img") });
      this.slider.append(slideImg);

      // add the index to the productlink to allow later matching with the pagination
      element.attr("data-slide-index", index );
    }.bind(this));

    this.slider.slidesjs(this.options);
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
  // dont wait for scripts and styles - just need the dom to prepare
  $(document).bind("initialize_slider", function(event, data){
    var options = data && data.sliderOptions ? data.sliderOptions : {};
    appK.mySlider.init(options);
  });
});
