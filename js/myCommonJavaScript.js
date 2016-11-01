$(document).ready(function() {
  // in case something goes wrong ...
  var delayedStartbildShow = setTimeout(function(){
    $(".startbild").eq(0).fadeIn();
  }, 1000);

  // once loaded ...
  $(".startbild").eq(0).bind("load", function(){
    clearTimeout(delayedStartbildShow);
    $(this).fadeIn();
  });

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
});
