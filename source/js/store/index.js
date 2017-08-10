
import {disableScroll, enableScroll} from 'utils/scrollDisabler';
import Vuex from 'vuex';

// ------------------------------------------------------------------------
// STATE
// ------------------------------------------------------------------------
const state = {
    activeUrl: '',
    isScrollEnabled: true,
};


// ------------------------------------------------------------------------
// MUTATIONS
// ------------------------------------------------------------------------
const mutations = {
    setActiveUrl (state, activeUrl) {
        state.activeUrl = activeUrl;
    },
    setIsScrollEnabled (state, isScrollEnabled) {
        state.isScrollEnabled = isScrollEnabled;
    },
};


// ------------------------------------------------------------------------
// ACTIONS
// ------------------------------------------------------------------------
const actions = {

    setActiveUrl: ({commit}, activeUrl) => commit('setActiveUrl', activeUrl),


    // Enable body scroll (restore position)
    enableScroll({commit}) {
        if(!state.isScrollEnabled) {
            commit('setIsScrollEnabled', true);
            enableScroll();
        }
    },

    // Disable body scroll (keep position)
    disableScroll({commit}) {
        if(state.isScrollEnabled) {
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


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
