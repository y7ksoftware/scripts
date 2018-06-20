import * as config from 'config';
import History from 'transitions/boot/history';
import Transition from 'transitions/boot/transition';
import { mountVue, unMountVue } from 'utils/vueContainer';
import Barba from 'barba.js';


// ------------------------------------------------------------------------
// SETTINGS
// ------------------------------------------------------------------------

// Set DOM class names
Barba.Pjax.Dom.wrapperId = 'js-barbaWrapper';
Barba.Pjax.Dom.containerClass = 'js-barbaContainer';
Barba.Pjax.Dom.vueContainerClass = 'js-vueContainerBarba';

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
    Barba.Pjax.onStateChange();
};


// ------------------------------------------------------------------------
// DISABLE BARBA FOR CERTAIN LINKS
// ------------------------------------------------------------------------
Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;

// Add custom prevent method that disables barba transitions
// on all links that lead to files (meaning having "/storage/" in the URL)

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
// SET TRANSITION
// ------------------------------------------------------------------------
Barba.Pjax.getTransition = () => {
    return Transition;
};

// ------------------------------------------------------------------------
// INITIALIZE VUE CONTAINER
// ------------------------------------------------------------------------
Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container) => {
    Barba.BaseView.oldMountedVue = Barba.BaseView.mountedVue;
    Barba.BaseView.mountedVue = mountVue(`.${Barba.Pjax.Dom.vueContainerClass}`, container);
});

Barba.Dispatcher.on('animateOldContainerEnded', () => {
    unMountVue(Barba.BaseView.oldMountedVue);
});

// ------------------------------------------------------------------------
// ACTIVATE BARBA.JS
// ------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    Barba.Pjax.start();
    Barba.Prefetch.init();
});
