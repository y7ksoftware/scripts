/**
 * This disabled scroll on the body without jumping to the top.
 * It adds fixed to the body (disable scroll) but moving it (adding negative top) so it is visually
 * at the same place.
 *
 * This way we can easily add modal windows with scroll
 */

window.savedScrollPos = 0;


/**
 * Disable scroll on document
 */
export function disableScroll() {
    window.savedScrollPos = window.scrollY || document.documentElement.scrollTop;
    document.body.style.top = `${(-1 * window.savedScrollPos)}px`;
    document.body.style.width = '100%';
    document.body.style.position = 'fixed';
}


/**
 * Re-enable scroll on document
 */
export function enableScroll() {
    document.body.style.top = '';
    document.body.style.position = '';
    document.body.style.width = '';
    window.scrollTo(0, window.savedScrollPos);
}
