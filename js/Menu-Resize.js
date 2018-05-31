function screenChange(screenWidth) {

  if (screenWidth < 768) {
    //Menu
    $("#menuPai").hide();


    //Banner Seta e Logo
    $("#logo").appendTo("#bannerMobile");
    $("#linkSeta").appendTo("#bannerMobile")
    $("#bannerMobile").show();
    $("#mascara").hide();


    //Testemunhos
    $("div.cardTestemunho").addClass("carousel-inner"); //<div> Class cardTestemunhos
    $("div.subTestemunhos").addClass("carousel-item"); //<div< Class SubTestemunhos
    //$('div.subTestemunhos:first-child').addClass('active'); // Primeira Div class subTestemunhos


  } else if (screenWidth >= 768 && screenWidth < 992) {
    //Menu
    $("#menuPai").show();

    //Banner Seta e Logo
    $("#logo").appendTo("#mascara");
    $("#linkSeta").appendTo("#banner")
    $("#bannerMobile").hide();
    $("#mascara").show();

    //Testemunhos
    $("div.cardTestemunho").addClass("carousel-inner"); //<div> Class cardTestemunhos
    $("div.subTestemunhos").addClass("carousel-item"); //<div< Class SubTestemunhos
    //$('div.subTestemunhos:first-child').addClass('active'); // Primeira Div class subTestemunhos

  } else if (screenWidth >= 992 && screenWidth < 2000) {
    //Menu
    $("#menuPai").show();

    //Banner Seta e Logo
    $("#logo").appendTo("#mascara");
    $("#linkSeta").appendTo("#banner")
    $("#bannerMobile").hide();
    $("#mascara").show();

    // Testemunhos
    $("div").removeClass("carousel-inner");
    $("div").removeClass("carousel-item");
    //$("div.subTestemunhos:first-child").removeClass("active");


  } else if (screenWidth >= 2000) {

  }
};

screenChange(window.innerWidth);



$(window).resize(function() {
  function screenChange(screenWidth) {

    if (screenWidth < 768) {
      //Menu
      $("#menuPai").hide();


      //Banner Seta e Logo
      $("#logo").appendTo("#bannerMobile");
      $("#linkSeta").appendTo("#bannerMobile")
      $("#bannerMobile").show();
      $("#mascara").hide();


      //Testemunhos
      $("div.cardTestemunho").addClass("carousel-inner"); //<div> Class cardTestemunhos
      $("div.subTestemunhos").addClass("carousel-item"); //<div< Class SubTestemunhos
      //$('div.subTestemunhos:first-child').addClass('active'); // Primeira Div class subTestemunhos


    } else if (screenWidth >= 768 && screenWidth < 992) {

      //Menu
      $("#menuPai").show();

      //Banner Seta e Logo
      $("#logo").appendTo("#mascara");
      $("#linkSeta").appendTo("#banner")
      $("#bannerMobile").hide();
      $("#mascara").show();

      //Testemunhos
      $("div.cardTestemunho").addClass("carousel-inner"); //<div> Class cardTestemunhos
      $("div.subTestemunhos").addClass("carousel-item"); //<div< Class SubTestemunhos
      //$('div.subTestemunhos:first-child').addClass('active'); // Primeira Div class subTestemunhos


    } else if (screenWidth >= 992 && screenWidth < 2000) {
      //Menu
      $("#menuPai").show();

      //Banner Seta e Logo
      $("#logo").appendTo("#mascara");
      $("#linkSeta").appendTo("#banner")
      $("#bannerMobile").hide();
      $("#mascara").show();

      // Testemunhos
      $("div").removeClass("carousel-inner");
      $("div").removeClass("carousel-item");

      //$("div.subTestemunhos:first-child").removeClass("active");


    } else if (screenWidth >= 2000) {

    }
  };

  screenChange(window.innerWidth);

});