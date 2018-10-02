import Vue from 'vue';
import { mountVue } from 'utils/vueContainer';

// All Vue components
import DemoComponent from 'components/DemoComponent';

// ------------------------------------------------------------------------
// Boot App
// ------------------------------------------------------------------------
require('boot');

// ------------------------------------------------------------------------
// Register Vue Components
// ------------------------------------------------------------------------
Vue.component('demo-component', DemoComponent);

// ------------------------------------------------------------------------
// Mount Vue Instances (outside of Barba container)
// ------------------------------------------------------------------------
mountVue('.js-vueContainer', document);

// ------------------------------------------------------------------------
// Triggers once the app has been launched
// ------------------------------------------------------------------------
document.addEventListener('AppReady', () => {
    document.documentElement.classList.remove('no-fouc');
});

// ------------------------------------------------------------------------
// Launch the app
// ------------------------------------------------------------------------
if (document.readyState === 'complete') {
    document.dispatchEvent(new Event('AppReady'));
} else {
    document.addEventListener('DOMContentLoaded', () => document.dispatchEvent(new Event('AppReady')));
}
