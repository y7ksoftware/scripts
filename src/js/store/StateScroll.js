import { disableScroll, enableScroll } from 'utils/scrollDisabler';

// ------------------------------------------------------------------------
// STATE
// ------------------------------------------------------------------------
const state = {
    isScrollEnabled: true,
};


// ------------------------------------------------------------------------
// MUTATIONS
// ------------------------------------------------------------------------
const mutations = {
    /**
     * Enable or disable scroll
     */
    setIsScrollEnabled(state, isScrollEnabled) {
        state.isScrollEnabled = isScrollEnabled;
        if (isScrollEnabled) {
            enableScroll();
        } else {
            disableScroll();
        }
    },
};


// ------------------------------------------------------------------------
// ACTIONS
// ------------------------------------------------------------------------
const actions = {

};


// ------------------------------------------------------------------------
// GETTERS
// ------------------------------------------------------------------------
const getters = {

};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
