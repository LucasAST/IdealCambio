$(document).ready(function(){
  $(window).scroll(function(){
   if ($(document).scrollTop() > 220) {
       $('.aside').css("display", "block")
   }else{
       $('.aside').css("display","none")
   }

  })
})
  jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
      event.preventDefault();
      $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1100);
    });
  });
 