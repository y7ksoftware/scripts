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
    },
};


// ------------------------------------------------------------------------
// ACTIONS
// ------------------------------------------------------------------------
const actions = {

    /**
     * Enable body scroll (restore position)
     */
    enableScroll({ commit }) {
        if (!state.isScrollEnabled) {
            commit('setIsScrollEnabled', true);
            enableScroll();
        }
    },

    /**
     * Disable body scroll (keep position)
     */
    disableScroll({ commit }) {
        if (state.isScrollEnabled) {
            commit('setIsScrollEnabled', false);
            disableScroll();
        }
    },
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
