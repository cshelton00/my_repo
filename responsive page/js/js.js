  $('.block').hover(function() {
$(this).children('.block_overlay').slideToggle(175);
});

$('#hamburger').click(function(){
        $('.burger_nav').slideToggle(0);
});