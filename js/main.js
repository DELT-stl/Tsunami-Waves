jQuery(document).ready(function ($) {
    $('.slanted img').on('click', function () {
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
        $('.anchor').css({});
        $('.anchor .wrapper').css({
            "transform": "skew(0deg)",
            "-webkit-transform": "skew(0deg)",
            "-ms-transform": "skew(0deg)"
        });
        $(this).parent().find('.slantedin').animate({
            'opacity': '0'
        });
        $(this).parent().css({
            'position': 'absolute',
        });
        $(this).parent().parent().css({
            'z-index': '2'
        });
        $(this).parent().animate({
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
            $('.anchor .wrapper').css({
                'position': 'relative'
            });
            $('.slanted').css({
                'top': 0
            });
            // Do something after 1 second
            $('.original-page').html('');
            var href = '/mission.html'

            console.log(href);
            //        $('#content-div').html('');
            $('#content-div').load(href + ' #content-div');
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
            e.preventDefault();


        }, 1000);

    });

});
