import Barba from 'barba.js';


/**
 * This is an abstract base object for transitions.
 *
 * Do not use this transition directly! Use "transitionDefault" or extend
 * this baseTransition with your own implementation.
 */
export default Barba.BaseTransition.extend({

    // -----------------------------------------------------------------------
    // Abstract functions to implement
    // -----------------------------------------------------------------------
    beforeLeave() {},
    afterLeaveDone() {},
    beforeEnter() {},
    afterEnterDone() {},
    animateOldContainer() { return new Promise(); },
    animateNewContainer() { return new Promise(); },
    isValid() { return true; },
    shouldResetScrollPosition() { return true; },


    /**
     * Starts the transition by animate the old container leaving and simultaneously loading the new page
     *
     * If
     *
     * 1. the leaving animation is done
     * 2. the new page is finished loading
     *
     * Then, we continue to the next step
     *
     * You don't need to overwrite this function, but you can if you want to have a custom way
     * of how and when transition and pageloading should play together.
     */
    start() {

        // Save scroll position before going to next page (so we can restore it when coming back)
        window.pjaxHistory.setPrev('scrollPos', window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.savedScrollPos);

        // Call Hook
        this.beforeLeave();

        // Start loading the content of the new page
        // Start the animation of the old container
        Promise.all([
            this.newContainerLoading,
            this.animateOldContainer(this.oldContainer),
        ])
            .then(this.finish.bind(this));
    },


    /**
     * Is called after the old container finished leaving and the new page is loaded successfully.
     * It then starts to animate the new container
     *
     * You don't need to overwrite this function, but you can if you want to have a custom way
     * of how and when transition and pageloading should play together.
     */
    finish() {

        // Call Hook
        this.afterLeaveDone();

        // done() removes the old container and sets the visibility of the new container
        this.done();

        this.beforeEnter();


        // When we transition back in history, we restore the scroll position where we were before. Else
        // we always scroll back to the top
        if (window.pjaxHistory.isBackwards() && this.shouldResetScrollPosition()) {
            const lastScrollPos = window.pjaxHistory.get('scrollPos', 0);
            window.scrollTo(0, lastScrollPos);
        } else {
            window.scrollTo(0, 0);
        }

        // Animate the new container entering transition
        this.animateNewContainer(this.newContainer)
            .then(() => {
                this.afterEnterDone();
            });
    },


    /**
     *
     * Helper to match url vom previous page and next page.
     * Child transitions can use this to determine if the transition should be used (isValid)
     */
    isMatchingURLs(urlFromPattern, urlToPattern) {
        const prevPageURL = Barba.HistoryManager.prevStatus().url;
        const newPageURL = Barba.HistoryManager.currentStatus().url;
        return prevPageURL.match(urlFromPattern) && newPageURL.match(urlToPattern);
    },

});
