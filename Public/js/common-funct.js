// JavaScript Document
$(function(){
  $('#intro-wrap').css({ height: $(window).innerHeight() });
  $(window).resize(function(){
    $('#intro-wrap').css({ height: $(window).innerHeight() });
  });
});

$(function () {
    $(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 80) {
                $('.link').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });

    });
});

// SMOOTH SCROLLING (with negative scroll of 40 for header)

$(function () {
    $('.link').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 850);
                return false;
            }
        }
    });
});

