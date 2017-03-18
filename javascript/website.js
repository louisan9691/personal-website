$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.banner-h1').css({
      'transform' : 'translate(0px, '+ wScroll /0.5 +'%)'
  });
   /*when user scrolls, logo is moved down half the user's scroll speed*/
   $('.banner-h3').css({
       'transform' : 'translate(0px, '+ wScroll /0.5+'%)'
   });

   $('.msg-me').css({
       'transform' : 'translate(0px, '+ wScroll /1 +'%)'
   });
   $('.scroll').css({
       'transform' : 'translate(-50%, '+ wScroll /1 +'%)'
   });


   if(wScroll > $('.section-1').offset().top - ($(window).height()/ 1.5)){
    $('.section-1 img').each(function(i){
      setTimeout(function(){
        $('.section-1 img').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);    /*  150 * (i+1))*/
    });
  }

  if(wScroll > $('.section-2').offset().top - ($(window).height()/ 1.3)){
   $('.section-2 img').each(function(i){
     setTimeout(function(){
       $('.section-2 img').eq(i).addClass('is-showing');
     }, (700 * (Math.exp(i * 0.14))) - 700);
   });
}

if(wScroll > $('.section-3').offset().top - ($(window).height()/ 1.3)){
 $('.section-3 img').each(function(i){
     setTimeout(function(){
       $('.section-3 img').eq(i).addClass('is-showing');
     },(700 * (Math.exp(i * 0.14))) - 700);
   });
  }

  if(wScroll > $('.section-4').offset().top - ($(window).height()/ 1.3)){
   $('.section-4 img').each(function(i){
       setTimeout(function(){
         $('.section-4 img').eq(i).addClass('is-showing');
       },(700 * (Math.exp(i * 0.14))) - 700);
     });
    }
});



$(document).ready(function() {
  $(".burger-container").on('click',function () {
      $(this).toggleClass("open");
  });
});

  $(document).ready(function() {
    $(".burger-container").on('click',function () {
        $("body").toggleClass("menu-open");
    });
});
