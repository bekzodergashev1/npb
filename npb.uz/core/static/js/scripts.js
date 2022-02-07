(function ($) {
    $(document).ready(function () {
        "use strict";

        new WOW().init();

        // MASONRY
        var $container = $(".masonry");
        $container.imagesLoaded(function () {
            $container.isotope({
                itemSelector: '.masonry li',
                layoutMode: 'masonry'
            });
        });


        // TAB
        $(".tab-nav li").on('click', function (e) {
            $(".tab-item").hide();
            $(".tab-nav li").removeClass('active');
            $(this).addClass("active");
            var selected_tab = $(this).find("a").attr("href");
            $(selected_tab).stop().show();
            return false;
        });


        /* MENU TOGGLE */
        $('.side-widget .site-menu ul li a').on('click', function (e) {
            $(this).parent().children('.side-widget .site-menu ul li ul').toggle();
            return true;
        });


        // SEARCH BOX
        $('.navbar .search-button').on('click', function (e) {
            $(this).toggleClass('open');
            $(".search-box").toggleClass('active');
        });


        // HAMBURGER MENU
        $('.hamburger-menu').on('click', function (e) {
            $(this).toggleClass('open');
            $(".side-widget").toggleClass('active');
        });


        // PAGE TRANSITION
        $('body a').on('click', function (e) {

            var target = $(this).attr('target');
            var fancybox = $(this).data('fancybox');
            var url = this.getAttribute("href");
            if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


                e.preventDefault();
                var url = this.getAttribute("href");
                if (url.indexOf('#') != -1) {
                    var hash = url.substring(url.indexOf('#'));


                    if ($('body ' + hash).length != 0) {
                        $('.page-transition').removeClass("active");


                    }
                } else {
                    $('.page-transition').toggleClass("active");
                    setTimeout(function () {
                        window.location = url;
                    }, 1000);

                }
            }
        });

    });
    // END DOCUMENT READY


    // MAIN SLIDER
    var swiper = new Swiper('.main-slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        speed: 600,
        loop: 'false',
        touchRatio: 0,
        autoplay: 'false',
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });


    // SIDE SLIDER
    var swiper = new Swiper('.side-slider .slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        loop: 'true',
        speed: 600,
        autoplay: 'false',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    // EXPERTS SLIDER
    var swiper = new Swiper('.experts-slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        loop: 'true',
        speed: 600,
        autoplay: 'false',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    // HIGHLIGHT SLIDER
    var swiper = new Swiper('.highlight-slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        speed: 600,
        touchRatio: 0,
        autoplay: 'false',
        pagination: {
            el: '.custom-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
            },
        },
    });


    // CAROUSEL IMAGE BOX
    var swiper = new Swiper('.carousel-image-box', {
        slidesPerView: '4',
        spaceBetween: 40,
        speed: 600,
        //touchRatio: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });


    // CAROUSEL TESTIMONIALS
    var swiper = new Swiper('.testimonials-slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });


    // DATA BACKGROUND IMAGE
    var pageSection = $("*");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background", "url(" + $(this).data("background") + ")");
        }
    });

    // DATA BACKGROUND COLOR
    var pageSection = $("*");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background", $(this).data("background"));
        }
    });


    // COUNTER
    $(document).scroll(function () {
        $('.odometer').each(function () {
            var parent_section_postion = $(this).closest('section').position();
            var parent_section_top = parent_section_postion.top;
            if ($(document).scrollTop() > parent_section_top - 300) {
                if ($(this).data('status') == 'yes') {
                    $(this).html($(this).data('count'));
                    $(this).data('status', 'no');
                }
            }
        });
    });


    // PRELOADER
    $(window).load(function () {
        $("body").addClass("page-loaded");
    });

    //mask phone
    $(function () {
        function maskPhone() {
            $("#phone").mask("+*** (**) *** ** **");
            $("#phone1").mask("+*** (**) *** ** **");
        }

        maskPhone();
    });

    function  clearForm() {
        $("#nameRequest").val("");
        $("#phone").val("");
    }

    $("#ajax-form").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        // var url = form.attr('request');

        $.ajax({
            type: "GET",
            url: 'request.html',
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
                clearForm();
                //alert(data); // show response from the php script
                $(document).ready(function() {
                    $("#showModal").modal('show');
                });

            },
            error: function () {
                alert('Error!');
            }
        });


    });

    $("#ajax-form1").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        // var url = form.attr('request');

        $.ajax({
            type: "GET",
            url: 'request.html',
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
                clearForm();
                //alert(data); // show response from the php script
                $(document).ready(function() {
                    $("#showModal").modal('show');
                });

            },

        });


    });


})(jQuery);
