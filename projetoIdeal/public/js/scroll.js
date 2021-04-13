jQuery(document).ready(function ($) {

    if ($(document).scrollTop() > 100) {
        $('.side').css("display", "block")
    }else{
        $('.aside').css("display","none")
    }
    $(".scroll").click(function (event) {
      event.preventDefault();
      $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1100);
    });
  });
 