import { $ } from './utilities.js';

(function($hamburger, $nav, $main) {
  let open = false;

  $hamburger.addEventListener('click', function() {
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
