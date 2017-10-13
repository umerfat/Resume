(function($) {
    "use strict";

    $(document).ready(function() {

        var scroll = new SmoothScroll();
        scroll.init({
            speed: 1000,
            easing: 'easeOutCubic'
        });

        /* Scroll to Top */
        var scrollTimeout;

        $('a.scroll-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 500);
            return false;
        });

        $(window).scroll(function () {
            clearTimeout(scrollTimeout);

            if ($(window).scrollTop() > 400){
                scrollTimeout = setTimeout(function () {
                    $('a.scroll-top:hidden').fadeIn()
                }, 100, "easeInOutExpo");
            }
            else {
                scrollTimeout = setTimeout(function () {
                    $('a.scroll-top:visible').fadeOut()
                }, 100, "easeInOutExpo");
            }
        });
    });

    $(window).on('load' ,function () {

        parallaxInit();
        initTyped();
        new WOW().init();
        gmapInit();
    });

    function parallaxInit() {

        $('#section-home').parallax("30%", 0.3);
        $('#section-work').parallax("30%", 0.3);
        $('#section-contact').parallax("30%", 0.3);
    }

})(jQuery);

function initTyped() {
    $("#typed").typed({
        strings: ["A Designer", "A Freelancer", "A Developer"],
        // typing speed
        typeSpeed: 300,
        // time before typing starts
        startDelay: 100,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 3000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: ".",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {
        },
        // starting callback function before each string
        preStringTyped: function() {
        },
        //callback for every typed string
        onStringTyped: function() {
        },
        // callback for reset
        resetCallback: function() {
        }
    });
}

function gmapInit() {
    var center = [13.008857, 77.649447];
    $('#gmap').gmap3({
            center: center,
            zoom: 13,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        })
        .bicyclinglayer()
        .circle({
            center: center,
            radius : 250,
            fillColor : "#57AA02",
            strokeColor : "#f18805"
        })
        .on('click', function (circle, event) {
            circle.setOptions({fillColor: "#AAFF55"});
            setTimeout(function () {
                circle.setOptions({fillColor: "#FFAF9F"});
            }, 200);
        })
    ;
}
