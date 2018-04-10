/* eslint-disable no-param-reassign */

// TODO: Improve method to adjust modules container in a function, not mutating way
// (e.g. returning a updated modules array instead of mutating) --> then removing eslint rule above

import Vue from 'vue';

export function mountModules(modules, container) {
    if (typeof modules === 'undefined') return [];

    const loadedModules = [];

    // Loop through all Modules
    for (let i = 0; i < modules.length; i++) {
        // get the element from the vue file
        const elementSelector = modules[i].el;
        const elements = container.querySelectorAll(elementSelector);

        // Nullify the lement selector to allow proper mounting
        // Not sure why we have to do this
        modules[i].el = null;

        // mount vue instance to all elements
        for (let j = 0; j < elements.length; j++) {
            const instance = new Vue(modules[i]).$mount(elements[j]);
            loadedModules.push(instance);
        }

        // Restore the Element selector, otherwise it will be lost in future calls
        modules[i].el = elementSelector;
    }

    return loadedModules;
}

export function unMountModules(modules) {
    if (typeof modules === 'undefined') return;

    // Loop through all Modules
    for (let i = 0; i < modules.length; i++) {
        modules[i].$destroy();
    }
}
