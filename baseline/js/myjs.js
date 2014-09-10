


      $('#hamburger').click(function(){
        $('div.burger_nav').slideToggle();
       });



    $(window).resize(function() {
        if ($(window).width() < 1024) {
            $('.nav_shown').hide();
            $('div.footerdiv_2').hide();
            $('div.hidden_nav').hide();
            $('div.burger_btn').show();
            $('#ft').removeClass('footerdiv_3').addClass('footer_img_clear');

        }//end of if

        else {
            $(".nav_shown").show();
            $('.footerdiv_2').show();
            $('div.burger_btn').hide();
            $('#ft').removeClass('footer_img_clear').addClass('footerdiv_3');


            $(document).scroll(function () {
        var headerShow = $(this).scrollTop();
        if (headerShow > 200) {
            $('div.hidden_nav').fadeIn();
            $(".nav_shown").hide();
        } else {
            $('div.hidden_nav').fadeOut();
              $(".nav_shown").show();
        }
    })


        }//end of else

    });


