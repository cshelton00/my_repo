  $('.block').hover(function() {
$(this).children('.block_overlay').slideToggle(175);
});

  $('.toggle ').click(function() {
      $('.login').toggleClass('open');
    });

$(".toggle").click(function() {
  $('.arrow_down').toggleClass("arrow_up");
});

  $(".xlogin").click(function(){
    $(".login_link").hide();
    $(".arrow_up").hide();
    $(".logout").show();
  });

  $(".logout").click(function(){
    $(".logout").hide();
    $(".login_link").show();
    $(".arrow_down").show();

  });


    $('#mobile-menu-icon').click(function() {
      var $mobile_nav = $('#mobile-nav');
      var $content = $('#content');

      if ( !$mobile_nav.hasClass('show') ) {
        $mobile_nav.removeClass('hide').addClass('show');
      } else {
        $mobile_nav.removeClass('show').addClass('hide');
      }

      $content.toggleClass('translate');

    });
