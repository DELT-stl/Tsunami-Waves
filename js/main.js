jQuery(document).ready(function ($) {
    $('.slanted').on('click', function (obj) {
        var obj = $(this);
        var scroll = $(window).scrollTop(),
            elementOffset = $('.anchor').offset().top,
            distance = (elementOffset - scroll),
            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            l = $(this).offset().left,
            right = w - l,
            scaleX = w / $(this).width(),
            scaleY = h / $(this).height();
        //        $('.original-page').html('');
        //        $('html').scrollTop(0);
        $(this).parent().siblings().animate({
            'opacity': '0'
        });
        $('.anchor').css({});
        $('.anchor .wrapper').css({
            "transform": "skew(0deg)",
            "-webkit-transform": "skew(0deg)",
            "-ms-transform": "skew(0deg)"
        });
        $(this).find('.slantedin').animate({
            'opacity': '0'
        });
        $(this).css({
            'position': 'absolute',
        });
        $(this).parent().css({
            'z-index': '2'
        });
        $(this).animate({
            'left': '0',
            'top': '-' + distance,
            //            'top':'0',
            'height': '80vh',
            'width': '100vw'

        });
        if ($(this).offset().top < scroll) {
            $('.anchor .wrapper').css({
                'position': 'absolute'
            });
            $('.anchor').animate({
                'top': '-' + distance
            });
        }
        $('#content-div *, .original-page *').animate({
            'opacity': '0'
        });
        setTimeout(function () {
            obj.parent().siblings().html('').css({
                'display':'none'
            });
            $('.anchor .wrapper').css({
                'position': 'relative'
            });
            obj.css({
                'position':'relative'
            });
            obj.parent().css({
                'padding-left':'0',
                'padding-right':'0'
            });
            $('.slanted').css({
                'top': 0
            });
            // Do something after 1 second
            $('.original-page').html('');
            //            var href = '/mission.html'
            var href = obj.data('url');


            console.log(href);
            //        $('#content-div').html('');
            $('#content-div').load(href + ' #content-div');
            $('#content-div').css({
                'opacity': '0'
            });
            $('#content-div').animate({
                'opacity': '1'
            });
            $('html').scrollTop(0);
            // loads content into a div with the ID content_div

            // HISTORY.PUSHSTATE
            history.pushState('', 'New URL: ' + href, href);
            window.onpopstate = function (event) {
                location.reload();
            };
            //            response.headers['Vary'] = 'Accept';
            //            window.onpopstate = function (event) {
            //                alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
            //                            location.reload();
            //                        response.headers['Vary'] = 'Accept';
            //            };

            //            $(window).bind('popstate', function () {

            //            window.onpopstate = function (event) {
            //                window.location.href = window.location.href;
            //                location.reload();
            //            };
            event.preventDefault();


        }, 1000);

    });

    function save($obj) {
        var l = $obj;
        return $obj;
    }

});
