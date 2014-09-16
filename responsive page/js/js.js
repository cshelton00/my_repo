  $('.block').hover(function() {
$(this).children('.block_overlay').slideToggle(175);
});

$('#hamburger').click(function(){
        $('.burger_nav').slideToggle(0);
});

  $('.toggle ').click(function() {
      $('.login').toggleClass('open');
    });

$(".toggle").click(function() {
  $('.arrow_down').toggleClass("arrow_up");
});