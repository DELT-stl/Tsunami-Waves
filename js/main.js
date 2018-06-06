jQuery(document).ready(function ($) {
    console.log('document ready');
    if (Modernizr.history) {
        $(window).bind("popstate", function () {
            link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
            //            alert(link);
            fadeTransition(link);
        });
        $('body').on('click', 'a', function (event) {
            event.preventDefault();
            event.stopPropagation();
        })
        $("li").on("click", "a", function (event) {
            var _href = $(this).attr("href");
            history.pushState(null, null, _href);
            fadeTransition(_href);
        });
//        $('body').on('click', 'button a', function () {
//            _href = $(this).attr('href');
//            //        alert('grow variable');
//            console.log('grow variable');
//            history.pushState(null, null, _href);
//            //            growTransition($(this).closest('.slanted'));
//            growTransition($(this).closest('.img-container'));
//        });

        $('body').on('click', 'a.grow', function () {
            _href = $(this).attr('href');
            history.pushState(null, null, _href);
            growTwo($(this))

        });
    } else {}
}); // ready jquery


function growTransition(obj, href = window.location.href) {
    var scroll = $(window).scrollTop(),
        elementOffset = $('.anchor').offset().top,
        distance = (elementOffset - scroll);
    obj.parent().siblings().animate({
        'opacity': '0'
    }).closest('.anchor').siblings().animate({
        'opacity': '0'
    });
    $('.anchor .wrapper').css({
        "transform": "skew(0deg)",
        "-webkit-transform": "skew(0deg)",
        "-ms-transform": "skew(0deg)"
    });
    if (obj.offset().top < scroll) {
        d = distance * -1;
        $('.anchor').animate({
            'margin-top': d
        });
    }
    obj.css({
        'position': 'absolute',
        'transform': 'translateX(0%)'
    }).animate({
        'border-radius': '0',
        //        'transform': 'translateX(0%)',
        'left': '0',
        'top': '-' + distance,
        'height': '80vh',
        'width': '100vw'
    }).parent().css({
        'z-index': '2'
    }).find('.slantedin').animate({
        'opacity': '0'
    });
    setTimeout(function () {
        $('.anchor').css({
            'margin-top': '0'
        });
        obj.css({
            'position': 'relative',
            'margin-left': '0',
            'margin-right': '0',
            'top': '0'
        }).parent().css({
            'padding-left': '0',
            'padding-right': '0',
        }).siblings().html('').css({
            'display': 'none'
        });
        obj.closest('.anchor').siblings().not('.insert').remove();
        obj.closest('.anchor').css({
            'padding-top': '0'
        });
        obj.parents('.content-div').siblings().remove();
        $('.banner-missionpage').remove();
        $('.insert').css({
            'opacity': '0'
        }).load(href + ' .content-div', function () {
            $('.banner-missionpage').css({
                'display': 'none'
            }).remove();
            obj.closest('.flex-col').css({
                'padding-left': '0',
                'padding-right': '0'

            }).closest('.flex-col').siblings().remove();
        }).animate({
            'opacity': '1'
        }, 400, function () {});
        $('html').scrollTop(0);
    }, 1000);
}

function growTwo(obj, href = window.location.href) {
    var $anchor = obj.parents('.anchor'),
        scroll = $(window).scrollTop(),
        elementOffset = $anchor.offset().top,
        distance = (elementOffset - scroll),
        $img = obj.find('img'),
        $wrapper = obj.closest('.wrapper'),
        inverseDistance = distance * -1;
    if (obj.offset().top < scroll) {
        d = distance * -1;
        $anchor.animate({
            'margin-top': d
        });
    }

    $anchor.unwrap();
    $('.slider-transition').children().not($anchor).animate({
        'opacity': '0'
    }, 400, function () {
        $(this).remove();
    });
    obj.children().not($img).animate({
        'opacity': '0'
    }, 400, function () {
        $(this).remove();
    });
    //    $wrapper.css({
    //        'position': 'absolute',
    //        'z-index': '5',
    //    }).animate({
    //        'border-radius': '0',
    //        'left': '0',
    //        'top': '-' + distance,
    //        'height': '80vh',
    //        'width': '100vw'
    //    }, 400, function () {
    //        $wrapper.siblings().remove();
    //    });
    $img.css({
        'position': 'absolute',
        'z-index': '5',
    }).animate({
        'border-radius': '0',
        'left': '0',
        'top': '-' + distance,
        'height': '80vh',
        'width': '100vw'
    }, 400, function () {
        $img.unwrap();
        $img.css({
            'position': 'relative',
            'margin-left': '0',
            'margin-right': '0',
            'top': '0'
        }).parents().removeClass('.skew');
        $wrapper.siblings().remove();
        $wrapper.css({
            'padding-left': '0',
            'padding-right': '0',
            'margin-left': '0',
            'margin-right': '0'
        });
        $('html').scrollTop(0);
        $('<div class="insert"></div>').insertAfter($anchor);
        $('.insert').load(href + ' .content-div');
    }).closest('.link-wrapper').siblings().animate({
        'opacity': '0'
    }, 400, function () {
        $img.css({
            'top': '0',
            'position': 'relative'
        });
    });

}

function fadeTransition(href = window.location.href) {
    $('.fader').css({
        'position': 'fixed',
        //        'height': h,
        'height': '100vh',
        'width': '0',
        'left': '0',
        'top': '0',
        'color': 'black',
        'background-color': 'black',
        'z-index': '3'
    }).animate({
        'width': '100vw',
    }, 400, function () {
        $('.slider-transition').load(href + ' .slider-transition', function () {
            //            EXECUTES ON CALLBACK
            //            h = $(document).height();
            $('.fader').animate({
                'left': '100vw'
            }, 400, function () {
                $('.slider-transition').children('.slider-transition').unwrap();
            });
            //            pushState(href);
            //            initClicky();
        });
    });
}
