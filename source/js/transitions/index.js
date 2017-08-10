import * as config from 'config';
import History from 'transitions/history';

// Init Barba.js
window.Barba = require('barba.js');

// Initalize the views
require('transitions/views');

// Initalize the modules
require('transitions/modules');


Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container) => {
// ------------------------------------------------------------------------
// HISTORY
// ------------------------------------------------------------------------

// Use custom history to save state
window.pjaxHistory = new History();

// Overwrite goto method to use custom history goto
Barba.Pjax.goTo = function(url) {
    window.pjaxHistory.goTo(url);
    this.onStateChange();
};





// ------------------------------------------------------------------------
// UPDATE ACTIVE URL & TRACKING CODE
// ------------------------------------------------------------------------

Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container) => {

    // Add active URL to store (so main navigation can react)
    // store.dispatch('setActiveUrl', currentStatus.url);

    // Track Pageview
    if (typeof(_paq) !== 'undefined') {
        _paq.push(['setCustomUrl', currentStatus.url]);
        _paq.push(['trackPageView']);
    }

});



// ------------------------------------------------------------------------
// GET TRANSITION
// ------------------------------------------------------------------------

Barba.Pjax.getTransition = function () {
    return require('transitions/base').default;
};
