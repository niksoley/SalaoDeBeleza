var bodyHeight = ((document.getElementById('home').offsetHeight) / 30);

//get offsets for all your div's.  Now. you can access the number of pixels from the top of the document
//each object is by using one.top, two.top, or whatever you name your variables
var one = $("#quemSomos").offset();
var two = $("#servicos").offset();
var three = $("#testemunhos").offset();
var four = $("#formulario").offset();
var five = $("#maps").offset();


$(document).ready(function() {
  $(window).scroll(function() {
    //the scroll() function will run every time the selected object is scrolled.
    //since you are binding the change of size to the scroll event, it may be best not to provide a direct
    //href to the objects.  Instead, you may want to use scrollTo inside of a click event.
    //Or, you could just add a click event that calls scroll when the link is clicked, as done below.
    //calling the scrollTop() function with no arguments will give you the current position in pixels of the selected object.
    var screenPosition = $(document).scrollTop();
    if ((screenPosition + bodyHeight) < one.top) {
      // $(".menuAnimation").css( "animation-direction", "backwards" );
      // $(".menuAnimation").css( "animation-play-state", "initial" );

      $(".menu1").addClass("hidden");
    }
    if ((screenPosition + bodyHeight) >= one.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");



      //be sure you are removing the active class from the other ones.
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".1").addClass("active");
    }
    if ((screenPosition + bodyHeight) >= two.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");

      $(".1").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".2").addClass("active");
    }
    if ((screenPosition + (bodyHeight + 300)) >= three.top) {
      $("#testemunhos").css("animation-play-state", "initial");
    }
    if ((screenPosition + bodyHeight) >= three.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");

      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".3").addClass("active");
    }
    if ((screenPosition + bodyHeight) >= four.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");

      $(".2").removeClass("active");
      $(".1").removeClass("active");
      $(".3").removeClass("active");
      $(".5").removeClass("active");
      $(".4").addClass("active");
    }
    if ((screenPosition + (bodyHeight + 100)) >= five.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");

      $(".2").removeClass("active");
      $(".1").removeClass("active");
      $(".4").removeClass("active");
      $(".3").removeClass("active");
      $(".5").addClass("active");
    }
  });


  //call the scroll() event so that the proper one is highlighted at the start
  $(window).scroll();
  $(".one, .two, .three, .four, .five").click(function() {
    $(window).scroll();
  });
});