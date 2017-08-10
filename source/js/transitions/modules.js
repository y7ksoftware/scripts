import {mountModules, unMountModules} from 'utils/modules';

// VueContainer module holds all children components
import VueContainer from 'modules/VueContainer.vue';


Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container) => {

    // Save modules from the old container, so we can unmount them,
    // as soon as the old container leaving transition is done
    Barba.BaseView.oldMountedModules = Barba.BaseView.mountedModules;

    // Load all modules
    Barba.BaseView.mountedModules = mountModules([
        VueContainer
    ], container);

});

Barba.Dispatcher.on('animateOldContainerEnded', function () {
    // Unmount Modules
    unMountModules(Barba.BaseView.oldMountedModules);
});
