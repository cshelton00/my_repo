
      $(function() {

    $('#hamburger').click(function(){
        $('div.burger_nav').slideToggle();
    });

    var currentlySmall = false;
    function update() {
        if ($(window).width() < 1024 && !currentlySmall) {
            currentlySmall = true;
            console.log('Less than 1024');

            $('.nav_shown').hide();
            $('div.footerdiv_2').hide();
            $('div.hidden_nav').hide();
            $('div.burger_btn').show();
            $('#ft').removeClass('footerdiv_3').addClass('footer_img_clear');
        }
        else if ($(window).width() >= 1024 && currentlySmall) {
            currentlySmall = false;
            console.log('More than 1024');

            $(".nav_shown").show();
            $('.footerdiv_2').show();
            $('div.burger_btn').hide();
            $('#ft').removeClass('footer_img_clear').addClass('footerdiv_3');
        }
    }

    //Calling this in the else part above will bind a new scroll event each time
    //Instead, if this should only happen when the screen is large, use the
    //flag you created
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
    update(); //Force initial calculation since resize won't be called when page loads
});