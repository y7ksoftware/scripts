import Barba from 'barba.js';
import store from 'store';
import transition from 'barba/baseTransition';

// ------------------------------------------------------------------------
// INITIALIZE BARBA.JS
// ------------------------------------------------------------------------
require('barba/boot');

// ------------------------------------------------------------------------
// SET TRANSITION
// ------------------------------------------------------------------------
Barba.Pjax.getTransition = () => transition;

// ------------------------------------------------------------------------
// INITIALIZE THE VIEWS
// ------------------------------------------------------------------------
require('barba/pages');

// ------------------------------------------------------------------------
// UPDATE ACTIVE URL & TRACKING CODE
// ------------------------------------------------------------------------
Barba.Dispatcher.on('newPageReady', (currentStatus /* , oldStatus */ /* , container */) => {
    // Add active URL to store (so main navigation can react)
    store.commit('app/setActiveUrl', currentStatus.url);

    // Track Pageview with Matomo
    if (typeof window._paq !== 'undefined') {
        window._paq.push(['setCustomUrl', currentStatus.url]);
        window._paq.push(['trackPageView']);
    }

    // Add other tracking library updates here
});
