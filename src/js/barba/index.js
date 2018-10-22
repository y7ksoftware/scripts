import Barba from 'barba.js';
import store from 'store';
import transitionDefault from 'barba/transitions/transitionDefault';
import transitionExample from 'barba/transitions/transitionExample';

// ------------------------------------------------------------------------
// INITIALIZE BARBA.JS
// ------------------------------------------------------------------------
require('barba/boot');


// ------------------------------------------------------------------------
// INITIALIZE THE VIEWS
// ------------------------------------------------------------------------
require('barba/views');

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


// ------------------------------------------------------------------------
// SET TRANSITION
//
// You can create multiple transitions and list them here. The first valid one
// will be chosen with other transitions as fallback.
// ------------------------------------------------------------------------
Barba.Pjax.getTransition = () => {
    if (transitionExample.isValid()) {
        return transitionExample;
    }

    return transitionDefault;
};
