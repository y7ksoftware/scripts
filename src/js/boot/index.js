import * as config from 'config';
import lazysizes from 'lazysizes';

// ------------------------------------------------------------------------
// Bugsnag
// ------------------------------------------------------------------------
if (config.BUGSNAG_API_KEY_JS) {
    require('boot/bugsnag');
}


// ------------------------------------------------------------------------
// Polyfills
// ------------------------------------------------------------------------
require('boot/polyfills');


// ------------------------------------------------------------------------
// Other Libraries
// ------------------------------------------------------------------------



// ------------------------------------------------------------------------
// Vue
// ------------------------------------------------------------------------
require('boot/vue');


// ------------------------------------------------------------------------
// Lazysizes
// ------------------------------------------------------------------------
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false;

// require('lazysizes/plugins/object-fit/ls.object-fit.min');
// require('lazysizes/plugins/parent-fit/ls.parent-fit');
// require('lazysizes/plugins/unveilhooks/ls.unveilhooks.min');

document.addEventListener('AppReady', lazysizes.init);

// ------------------------------------------------------------------------
// Axios
// ------------------------------------------------------------------------
window.axios = require('axios');

// axios.defaults.baseURL = config.API_PREFIX
axios.defaults.headers.common = {
    // 'Authorization': 'Bearer ' + config.API_TOKEN,
    // 'X-CSRF-TOKEN': window.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
};


// ------------------------------------------------------------------------
// Component Hooks
//
// If you install Y7K components, they add their setup code here
// (Keep the "hook" line below)
// ------------------------------------------------------------------------
// $cli-hook-tools-init$
