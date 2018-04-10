
/**
 * This addon allows us to save state information in the pjax history.
 *
 * For every page we go, we store the last page in the history and also store
 * the scrolling position of the previous page.
 *
 * We can now know if we are going to a new page or a going back to a previous page (back button)
 */
export default class History {

    /**
     *
     */
    constructor() {

        // Create new session storage for pjax history
        if(window.history.state === null) {
            const state = sessionStorage.getItem('history') || 0;
            window.history.replaceState(parseInt(state), null, window.location);
        }

        this.prevState = 0;
        this.state = window.history.state;

        // When going back in the history, load the previous state
        window.addEventListener('popstate', event => {
            sessionStorage.setItem('history', event.state);
            this.prevState = this.state;
            this.state = event.state;
        });
    }


    /**
     * Go to page (replaces Barba.pjax.goto !)
     *
     * This saves the state to the history
     */
    goTo(url) {
        this.prevState = this.state;
        this.state = window.history.state + 1;
        window.history.pushState(this.state, null, url);
    }


    /**
     * If we are going back in the history
     */
    isBackwards() {
        return this.state <= this.prevState;
    }


    /**
     * If we are going to a new page (not back)
     */
    isForwards() {
        return this.state >= this.prevState;
    }


    /**
     * Set history state
     */
    set(key, value) {
        const historyData = History.getSessionData();
        historyData[`${this.state}.${key}`] = value;
        History.setSessionData(historyData);
    }


    /**
     * Set prev history state
     */
    setPrev(key, value) {
        const historyData = History.getSessionData();
        historyData[`${this.prevState}.${key}`] = value;
        History.setSessionData(historyData);
    }


    /**
     * Get history state
     */
    get(key, defaultValue = null) {
        const historyData = History.getSessionData();
        const value = historyData[`${this.state}.${key}`];
        return value || defaultValue;
    }


    /**
     * Get prev history state
     */
    getPrev(key, defaultValue = null) {
        const historyData = History.getSessionData();
        const value = historyData[`${this.prevState}.${key}`];
        return value || defaultValue;
    }


    /**
     *  Write data to session storage
     */
    static setSessionData(data = {}) {
        sessionStorage.setItem('historyData', JSON.stringify(data));
    }


    /**
     * Get Data from session storage
     */
    static getSessionData() {
        const data = sessionStorage.getItem('historyData') || null;
        if (data === null) return {};
        return JSON.parse(data);
    }

}
