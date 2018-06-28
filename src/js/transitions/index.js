import Barba from 'barba.js';
import store from 'store';
import Transition from 'transitions/transition';

// ------------------------------------------------------------------------
// INITIALIZE BARBA.JS
// ------------------------------------------------------------------------
require('transitions/boot');

// ------------------------------------------------------------------------
// SET TRANSITION
// ------------------------------------------------------------------------
Barba.Pjax.getTransition = () => Transition;

// ------------------------------------------------------------------------
// INITIALIZE THE VIEWS
// ------------------------------------------------------------------------
require('transitions/views');

// ------------------------------------------------------------------------
// UPDATE ACTIVE URL & TRACKING CODE
// ------------------------------------------------------------------------
Barba.Dispatcher.on('newPageReady', (currentStatus /* , oldStatus */ /* , container */) => {
    // Add active URL to store (so main navigation can react)
    store.dispatch('setActiveUrl', currentStatus.url);

    // Track Pageview
    if (typeof window._paq !== 'undefined') {
        window._paq.push(['setCustomUrl', currentStatus.url]);
        window._paq.push(['trackPageView']);
    }
});
