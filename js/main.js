var SliderStatus = true;

// Navigation
(function ($) {

    "use strict"

    $(window).on("scroll", function () {
        var navBar = $(".navbar-fixed-top"),
            windowHeight = $(this).innerHeight() - navBar.innerHeight();

        if ($(this).scrollTop() > windowHeight) {
            SliderStatus = false;
            navBar.removeClass("bottom");
        } else {
            SliderStatus = true;
            navBar.addClass("bottom");
        }
    });
})(jQuery);

// TEMPLATE
(function ($) {
    $(document).on("ready", function () {
        "use strict"

        //Header fit screen
        $(function () {
            "use strict";
            $("#header").css({
                "height": ($(window).height()) + "px"
            });
            $(window).resize(function () {
                $("#header").css({
                    "height": ($(window).height()) + "px"
                });
            });
        });

        // anchor handler
        $(document).on("click", "a", function (e) {
            var full_url = this.href,
                windowWidth = window.innerWidth,
                navBar = (windowWidth >= 768) ? $(".navbar-fixed-top") : $(".navbar-header"),
                windowLocation = window.location.href.split("#")[0],
                parts = full_url.split("#");

            if (windowLocation !== parts[0])
                return

            if (parts[1].length > 0 && $("#" + parts[1]).length > 0) {
                $.smoothScroll({
                    offset: -navBar.innerHeight(),
                    scrollTarget: "#" + parts[1],
                    speed: 500
                });
            }

            return false;
        });


        // animated element
        $(".animated").appear(function () {
            var element = $(this),
                animation = element.data("animate"),
                animationDelay = element.data("delay");

            if (animationDelay) {
                setTimeout(function () {
                    element.addClass(animation + " visible");
                    if (element.hasClass("counter")) {
                        element.find('.value').countTo();
                    }
                }, animationDelay);
            } else {
                element.addClass(animation + " visible");
                if (element.hasClass("counter")) {
                    element.find(".value").countTo();
                }
            }
        }, {
            accY: -150
        });

        $(".skill-bar .percentage").appear(function () {
            var element = $(this),
                animation = element.data("value");
            element.animate({
                "width": animation
            }, 2000);
        });
    });

    // PORTFOLIO
    $(document).on("ready", function () {
        "use strict"

        function columnsSplit() {
            if ($(window).innerWidth() >= 1200)
                return 4
            else if ($(window).innerWidth() >= 992)
                return 3
            else if ($(window).innerWidth() >= 768)
                return 2
            else return 1
        }

        $(window).on("resize", function () {
            $(".container-portfolio .portfolio-view").each(function (a, b) {
                $(b).css({
                    "width": $(window).innerWidth() / columnsSplit(),
                    "height": ($(window).innerWidth() / columnsSplit() - 113)
                });
            });
        });
    });
})(jQuery);