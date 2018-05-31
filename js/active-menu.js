$(window).onresize = function() {
  var bodyHeight = (document.getElementById('banner').offsetHeight);
};
var bodyHeight = (document.getElementById('banner').offsetHeight);

//((document.getElementById('home').offsetHeight) / 30);

//get offsets for all your div's.  Now. you can access the number of pixels from the top of the document
//each object is by using one.top, two.top, or whatever you name your variables
var one = $("#quemSomos").offset();
var two = $("#servicos").offset();
var three = $("#testemunhos").offset();
var four = $("#contForm").offset();
var five = $("#maps").offset();


$(document).ready(function() {
  $(window).scroll(function() {
    //the scroll() function will run every time the selected object is scrolled.
    //since you are binding the change of size to the scroll event, it may be best not to provide a direct
    //href to the objects.  Instead, you may want to use scrollTo inside of a click event.
    //Or, you could just add a click event that calls scroll when the link is clicked, as done below.
    //calling the scrollTop() function with no arguments will give you the current position in pixels of the selected object.
    var screenPosition = $(document).scrollTop();
    if ((screenPosition) < one.top) {
      // $(".menuAnimation").css( "animation-direction", "backwards" );
      // $(".menuAnimation").css( "animation-play-state", "initial" );
      $(".menu1").addClass("hidden");
      $("#testemunhos").css("background-color", "white");
    }
    if ((screenPosition + (bodyHeight / 3)) >= one.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");
      //be sure you are removing the active-menu class from the other ones.
      $(".2").removeClass("active-menu");
      $(".3").removeClass("active-menu");
      $(".4").removeClass("active-menu");
      $(".5").removeClass("active-menu");
      $(".1").addClass("active-menu");
    }
    if ((screenPosition + (bodyHeight / 3)) >= two.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");

      $(".1").removeClass("active-menu");
      $(".3").removeClass("active-menu");
      $(".4").removeClass("active-menu");
      $(".5").removeClass("active-menu");
      $(".2").addClass("active-menu");
    }
    if ((screenPosition + (bodyHeight / 2)) + 100 >= three.top) {
      setTimeout(function() {
        $("#testemunhos").css("animation-play-state", "initial");
        $("#testemunhos").css("-webkit-animation-play-state", "initial");
      }, 100);
    }
    if ((screenPosition + (bodyHeight / 3)) >= three.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");
      $(".1").removeClass("active-menu");
      $(".2").removeClass("active-menu");
      $(".4").removeClass("active-menu");
      $(".5").removeClass("active-menu");
      $(".3").addClass("active-menu");
    }
    if ((screenPosition + (bodyHeight / 3)) >= four.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");
      $(".2").removeClass("active-menu");
      $(".1").removeClass("active-menu");
      $(".3").removeClass("active-menu");
      $(".5").removeClass("active-menu");
      $(".4").addClass("active-menu");
    }
    if ((screenPosition + (bodyHeight / 2)) >= five.top) {
      $(".menu1").removeClass("hidden");
      $(".menuAnimation").css("animation-play-state", "initial");
      $(".2").removeClass("active-menu");
      $(".1").removeClass("active-menu");
      $(".4").removeClass("active-menu");
      $(".3").removeClass("active-menu");
      $(".5").addClass("active-menu");
    }
  });


  //call the scroll() event so that the proper one is highlighted at the start
  $(window).scroll();
  $(".one, .two, .three, .four, .five").click(function() {
    $(window).scroll();
  });
});