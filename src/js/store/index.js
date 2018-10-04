import Vuex from 'vuex';
import StateApp from 'store/StateApp';
import StateScroll from 'store/StateScroll';


const store = new Vuex.Store({
    modules: {
        app: StateApp,
        scroll: StateScroll,
    },
});

window.store = store;
export default store;
