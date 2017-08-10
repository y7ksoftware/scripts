import Vue from 'vue';
import {mountModules} from 'utils/modules';

// Modules (Global)
import DemoModule from 'modules/DemoModule.vue';

/**
 * * ----------------------------------------------------------------------------------------
 * Enable Barba Page Transitions
 */

// document.addEventListener("DOMContentLoaded", () => {
//     Barba.Pjax.start()
//     Barba.Prefetch.init()
// })


/**
 * ----------------------------------------------------------------------------------------
 * Mount normal Vue Components (outside of Barba container)
 * You don't need this if you load modules inside a barba container
 * or if u build a SPA app
 */
// All Vue components
import DemoComponent from 'components/DemoComponent.vue';
require('boot');

// import DemoModule from 'modules/DemoModule.vue'
//
// mountModules([
//     DemoModule,
// ], document)
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
