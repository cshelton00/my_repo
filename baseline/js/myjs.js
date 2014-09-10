
      $(function() {

    $('#hamburger').click(function(){
        $('div.burger_nav').slideToggle();
    });

    var currentlySmall = false;
    function update() {
        if ($(window).width() < 1024 && !currentlySmall) {
            currentlySmall = true;

            $('.nav_shown').hide();
            $('div.footerdiv_2').hide();
            $('div.hidden_nav').hide();
            $('div.burger_btn').show();
            $('#ft').removeClass('footerdiv_3').addClass('footer_img_clear');
        }
        else if ($(window).width() >= 1024 && currentlySmall) {
            currentlySmall = false;

            $(".nav_shown").show();
            $('.footerdiv_2').show();
            $('div.burger_btn').hide();
            $('#ft').removeClass('footer_img_clear').addClass('footerdiv_3');
        }
    }

    $(document).scroll(function () {
        if (!currentlySmall) {
            var headerShow = $(this).scrollTop();
            if (headerShow > 200) {
                $('div.hidden_nav').fadeIn();
                $(".nav_shown").hide();
            } else {
                $('div.hidden_nav').fadeOut();
                $(".nav_shown").show();
            }
        }
    });

    $(window).resize(update);
    update();
});