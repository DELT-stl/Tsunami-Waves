jQuery(document).ready(function ($) {
    $('.slanted').on('click', function (obj) {
        growTransition($(this));
    });
    $('.main-menu ul li').on('click', function(obj) {
        $('.fader').css({
            'position':'absolute',
            'height':'150vh',
            'width':'0',
            'left':'0',
            'top':'0',
            'color':'black',
            'background-color':'black',
            'z-index':'3'
        }).animate({
            'width':'100vw',
        }).animate({
            'left':'100vw'
        });
    });


});
    function growTransition(obj) {
        //        var obj = $(this);
        var scroll = $(window).scrollTop(),
            elementOffset = $('.anchor').offset().top,
            distance = (elementOffset - scroll);
        //            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        //            h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        //            l = $(this).offset().left;
        //        $('.original-page').html('');
        //        $('html').scrollTop(0);
        obj.parent().siblings().animate({
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
        obj.find('.slantedin').animate({
            'opacity': '0'
        });
        obj.css({
            'position': 'fixed',
        });
        obj.parent().css({
            'z-index': '2'
        });
        obj.animate({
            'left': '0',
            'top': '-' + distance,
            //            'top':'0',
            'height': '80vh',
            'width': '100vw'

        });
        $('#content-div *, .original-page *').animate({
            'opacity': '0'
        });
        setTimeout(function () {
            $('.anchor').css({
                'margin-top': '0'
            });
            obj.css({
                'position': 'relative',
                'top': '0'
            }).parent().css({
                'padding-left': '0',
                'padding-right': '0'
            }).siblings().html('').css({
                'display': 'none'
            });
            $('.original-content').html('');
            var href = obj.data('url');
            console.log(href);
            $('#content-div').css({
                'opacity': '0'
            }).load(href + ' #content-div').animate({
                'opacity': '1'
            });
            $('html').scrollTop(0);
            // HISTORY.PUSHSTATE
            history.pushState('', 'New URL: ' + href, href);
            window.onpopstate = function (event) {
                location.reload();
            };
            event.preventDefault();
        }, 1000);
    }
