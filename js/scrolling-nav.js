//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 20) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$('body').scrollspy({ offset: 70 });

var lgwidth = 1200;
var mdwidth = 992;
var smwidth = 768;
var xssmwidth = 450;
var xxswith = 350;

$(document).ready (function() {
    resize();
    $(window).resize (function () {
        resize();
    });
});

function resize() {
    var width = $(window).width();
    var frame = $("#rsvpframe");
    if (width >= lgwidth) {
        frame.width(800);
        frame.height(1025);
    } else if (width >= mdwidth) {
        frame.width(700);
        frame.height(1025);
    } else if (width >= smwidth) {
        frame.width(600);
        frame.height(1050);
    } else if (width >= xssmwidth) {
        frame.width(500);
        frame.height(1150);
    } else if (width >= xxswidth) {
        // XS
        frame.width(340);
        frame.height(1350);
    } else {
        // Custom XXS
        frame.width(280);
        frame.height(1600);
    }
}

//jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/