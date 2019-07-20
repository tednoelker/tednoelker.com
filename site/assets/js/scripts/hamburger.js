(function($, hamburger, nav, main) {

  'use strict';

  let open = false;

  $(hamburger).on('click', function() {
    const ariaLabel = (open) ? 'Open menu' : 'Close menu';

    $(this).class('toggle', 'is-open').attr('aria-label', ariaLabel);
    $(main).class('toggle', 'is-collapsed');
    $(nav).class('toggle', 'is-open');

    const $focusElement = (open) ? $(main) : $(nav);
    $focusElement.attr('tabindex', '-1')[0].focus();

    open = !open;
  });

})(window.jkQuery, '.js-hamburger', 'nav', 'main');
