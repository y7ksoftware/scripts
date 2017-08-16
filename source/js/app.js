import Vue from 'vue';
import {mountModules} from 'utils/modules';

// Modules (Global)
import DemoModule from 'modules/DemoModule.vue';

// All Vue components
import DemoComponent from 'components/DemoComponent.vue';


// ------------------------------------------------------------------------
// BOOT APP
// ------------------------------------------------------------------------

require('boot');



// ------------------------------------------------------------------------
// Enable Barba Page Transitions
// ------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//     Barba.Pjax.start();
//     Barba.Prefetch.init();
// });


// ------------------------------------------------------------------------
// Register Vue Components
// ------------------------------------------------------------------------

Vue.component('demo-component', DemoComponent);



// ------------------------------------------------------------------------
// Mount normal Vue Components (outside of Barba container)
// ------------------------------------------------------------------------

mountModules([
    DemoModule
], document);
