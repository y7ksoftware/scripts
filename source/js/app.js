import Vue from 'vue';
import { mountVue } from 'utils/vueContainer';

// All Vue components
import DemoComponent from 'components/DemoComponent';

// ------------------------------------------------------------------------
// Boot App
// ------------------------------------------------------------------------
require('boot');

// ------------------------------------------------------------------------
// Enable Barba.js Page Transitions
// ------------------------------------------------------------------------
// require('transitions');

// ------------------------------------------------------------------------
// Register Vue Components
// ------------------------------------------------------------------------
Vue.component('demo-component', DemoComponent);

// ------------------------------------------------------------------------
// Mount Vue Instances (outside of Barba container)
// ------------------------------------------------------------------------
mountVue('.js-vueContainer', document);
