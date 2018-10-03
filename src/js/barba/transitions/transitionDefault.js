import transitionBase from 'barba/transitions/transitionBase';
import { tween, styler } from 'popmotion';

export default transitionBase.extend({

    /**
     * Called, before the old container starts its leaving animation
     */
    beforeLeave() { },


    /**
     * Called, after the old container leaving animation is done
     */
    afterLeaveDone() { },


    /**
     * Called, before the new container starts its entering animation
     */
    beforeEnter() { },


    /**
     * Called, after the new container entering animation is done
     */
    afterEnterDone() { },


    /**
     * Returns, if this transition should be used. You can implement your own logic, when different
     * transitions should be used.
     */
    isValid() {
        return true;
    },


    /**
     * If true, Scroll Position will be set to the previous value if going back in the history.
     * E.g., if you click a link on the bottom of the page and then later go back to the same page
     * (with back button), you will be on the bottom of the page again.
     */
    shouldResetScrollPosition() {
        return true;
    },


    /**
     * Animates the old container with popmotion
     */
    animateOldContainer(oldContainer) {
        return new Promise((resolve) => {
            tween({
                from: {
                    opacity: 1,
                },
                to: {
                    opacity: 0,
                },
                duration: 500,
            })
                .start({
                    update: styler(oldContainer).set,
                    complete: resolve,
                });
        });
    },


    /**
     * Animates the new container with popmotion
     */
    animateNewContainer(newContainer) {
        newContainer.style.opacity = 0;

        return new Promise((resolve) => {
            tween({
                from: {
                    opacity: 0,
                },
                to: {
                    opacity: 1,
                },
                duration: 500,
            })
                .start({
                    update: styler(newContainer).set,
                    complete: resolve,
                });
        });
    },


});
