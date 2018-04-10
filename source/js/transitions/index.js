import * as config from 'config';
import History from 'transitions/history';
import Barba from 'barba.js';


// Initalize the views
require('transitions/views');

// Initalize the modules
require('transitions/modules');


// ------------------------------------------------------------------------
// SETTINGS
// ------------------------------------------------------------------------

// Set DOM class names
Barba.Pjax.Dom.wrapperId = 'js-barbaWrapper';
Barba.Pjax.Dom.containerClass = 'js-barbaContainer';

// Increase Timeout when in Dev Mode
Barba.Utils.xhrTimeout = config.APP_DEBUG ? 20000 : 5000;


// ------------------------------------------------------------------------
// HISTORY
// ------------------------------------------------------------------------

// Use custom history to save state
window.pjaxHistory = new History();

// Overwrite goto method to use custom history goto
Barba.Pjax.goTo = (url) => {
    window.pjaxHistory.goTo(url);
    this.onStateChange();
};


// ------------------------------------------------------------------------
// DISABLE BARBA FOR CERTAIN LINKS
// ------------------------------------------------------------------------

Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;

// Add custom prevent method that disables barba transitions
// on all links that lead to files (meaning having "/storage/" in the URL)
//
// Add more exceptions here if you want.
Barba.Pjax.preventCheck = (evt, element) => {
    if (!Barba.Pjax.originalPreventCheck(evt, element)) {
        return false;
    }

    // No barba on file links
    if (/storage/.test(element.href.toLowerCase())) {
        return false;
    }

    return true;
};


// ------------------------------------------------------------------------
// UPDATE ACTIVE URL & TRACKING CODE
// ------------------------------------------------------------------------

Barba.Dispatcher.on('newPageReady', (currentStatus /* , oldStatus */ /* , container */) => {
    // Add active URL to store (so main navigation can react)
    // store.dispatch('setActiveUrl', currentStatus.url);

    // Track Pageview
    if (typeof window._paq !== 'undefined') {
        window._paq.push(['setCustomUrl', currentStatus.url]);
        window._paq.push(['trackPageView']);
    }
});


// ------------------------------------------------------------------------
// GET TRANSITION
// ------------------------------------------------------------------------

Barba.Pjax.getTransition = () => {
    return require('transitions/base').default;
};
