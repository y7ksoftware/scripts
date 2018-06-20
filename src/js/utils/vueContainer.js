/* eslint-disable no-param-reassign */

import Vue from 'vue';

export function mountVue(elementSelector, container) {

    const loadedContainers = [];

    // get the element from the vue file
    const elements = container.querySelectorAll(elementSelector);

    // mount vue instance to all elements
    for (let j = 0; j < elements.length; j++) {
        const instance = new Vue({ name: 'VueContainer' }).$mount(elements[j]);
        loadedContainers.push(instance);
    }

    return loadedContainers;
}

export function unMountVue(containers) {
    if (typeof containers === 'undefined') return;

    // Loop through all Modules
    for (let i = 0; i < containers.length; i++) {
        containers[i].$destroy();
    }
}
