// Extend jQuery
(function() {

    'use strict';

    // Bind an event on click or touchstart, but not both in succession
    $.fn.impress = function (callback) {

        // Track touches
        var trackTouch = {};

        this.on('touchstart', function (e) {

            // Track touchstart
            trackTouch.x = e.touches[0].pageX;
            trackTouch.y = e.touches[0].pageY;

        }).on('touchend', function (e) {

            e.preventDefault();

            // Determine if this is a static touch or a scroll attempt
            var scrollX = Math.abs(trackTouch.x - e.changedTouches[0].pageX),
                scrollY = Math.abs(trackTouch.y - e.changedTouches[0].pageY);

            // Fire if touch event is not a scroll
            if ( (scrollX < 10) && (scrollY < 10) ) {
                callback.call(this, e);
            }

        }).on('click', function (e) {

            e.preventDefault();

            // Fire if no touch event was deteched
            if (typeof trackTouch.x === 'undefined') {
                callback.call(this, e);
            }

        });

        // Continue chain method
        return this;

    };

}());
//


// Add hamburger menu
(function () {

    'use strict';

    //
    var init = function () {

        //
        $('body').prepend('<div id="menu"><svg id="hamburger" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 12"><line class="bun" x1="2" y1="2" x2="12" y2="2" /><line class="bun" x1="2" y1="6" x2="12" y2="6" /><line class="bun" x1="2" y1="10" x2="12" y2="10" /></svg></div>');

        //
        $('#hamburger').impress(function () {
            toggleNav();
        });

        //
        walkNavBlock();

    };
    //


    //
    var walkNavBlock = function () {

        $(window).scroll(function () {

            var toggle = 'addClass',
                scrollPos = $(window).scrollTop();

            if (scrollPos < 50) {
                toggle = 'removeClass';
            }

            $('#menu')[toggle]('block');

        });

    };
    //


    //
    var toggleNav = function () {

        var toggle = 'addClass';

        if ( $('#menu').hasClass('close') ) {
            toggle = 'removeClass';
        }

        $('#menu')[toggle]('close');
        $('main')[toggle]('collapse');

    };
    //

    init();

})();
//


// Email address handler
(function () {

    'use strict';

    //
    $('.email').impress(function (e) {

        if (e.type === 'touchend') {
            window.location = 'mailto:' + $(this).text();
        } else {
            selectText(this);
        }

    });
    //


    //
    var selectText = function (selection) {
        var range;
        if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(selection);
            range.select();
        } else if (window.getSelection) {
            range = document.createRange();
            range.selectNode(selection);
            window.getSelection().addRange(range);
        }
    };
    //

})();
//
