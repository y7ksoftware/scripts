import * as config from 'config';
import History from 'barba/boot/history';
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
// INITIALIZE VUE CONTAINER
// ------------------------------------------------------------------------

// If the new container is loaded, we need to make sure, vue components are initialized in the new container
// and vue components of the old container are removed correctly
// Therefore, we mount the barba vue container when the new page is ready
Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container) => {
    Barba.BaseView.oldMountedVue = Barba.BaseView.mountedVue;
    Barba.BaseView.mountedVue = mountVue(`.${Barba.Pjax.Dom.vueContainerClass}`, container);
});

// And if the old container is finished animating (and should be invisible by now),
// we can unmount all vue elements in the old container. This will correctly call "destroy()"
// on this vue components.
Barba.Dispatcher.on('animateOldContainerEnded', () => {
    unMountVue(Barba.BaseView.oldMountedVue);
});

// ------------------------------------------------------------------------
// ACTIVATE BARBA.JS
// ------------------------------------------------------------------------
document.addEventListener('AppReady', () => {
    Barba.Pjax.start();
    Barba.Prefetch.init();
});
