/**
 * querySelector shortcut
 *
 * @param {string} selector
 * @param {object} [node=document]
 */
export const $ = (selector, node = document) => (node).querySelector(selector);
