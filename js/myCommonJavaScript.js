function preventRightClick (event) {
  if (!event)
    event = window.event;
  if ((event.type && event.type == "contextmenu") || (event.button && event.button == 2) || (event.which && event.which == 3)) {
    if (window.opera)
      window.alert("Sorry: Diese Funktion ist deaktiviert.");
    return false;
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
}
  
document.onmousedown = preventRightClick;
document.oncontextmenu = preventRightClick;

$(document).ready(function(){
  $(".details").bind("click", function(){
    $(".detailsWrapper").toggleClass("collapsed");
  }); 

});