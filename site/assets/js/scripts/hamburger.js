import { $ } from './utilities.js';

/**
 * Toogle mobile menu
 *
 * @param {object} $tigger
 * @param {object} $nav
 * @param {object} $main
 */
(function toggleMenu($tigger, $nav, $main) {
  let open = false;

  $tigger.addEventListener('click', function() {
    const ariaLabel = (open) ? 'Open menu' : 'Close menu';
    const $focusElement = (open) ? $main : $nav;

    this.classList.toggle('is-open')
    this.setAttribute('aria-label', ariaLabel);

    $main.classList.toggle('is-collapsed');
    $nav.classList.toggle('is-open');

    $focusElement.setAttribute('tabindex', '-1')
    $focusElement.focus();

    open = !open;
  });
})($('.js-hamburger'), $('nav'), $('main'));
