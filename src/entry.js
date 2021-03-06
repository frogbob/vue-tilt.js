/*!
 * ------------------------------
 * Vue-Tilt.js - Based on Vanilla-Tilt ()
 * https://github.com/frogbob/vue-tilt.js
 * license: MIT license (http://opensource.org/licenses/MIT)
 * ------------------------------
 */

import polyfills from './_polyfills.js';

// Import VanillaTilt
import VanillaTilt from 'vanilla-tilt';

// Define VueTilt-Directive
const VueTilt = {
    install: function (Vue) {
        Vue.directive('tilt', function (el, binding) {
            VanillaTilt.init(el, Object.assign({}, binding.value));
        });
    }
};

let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue
}

if (GlobalVue) {
    GlobalVue.use(plugin)
}

export default VueTilt;

