import transitionBase from 'barba/transitions/transitionBase';
import { tween, styler } from 'popmotion';

export default transitionBase.extend({

    /**
     * Returns, if this transition should be used. You can implement your own logic, when different
     * transitions should be used.
     *
     * In this example, the Transition is used when the URL's match this pattern:
     *
     * "/" --> "/about"
     *
     * You could also use other strategies, not based on the URL. you could also read what link was clicked and add some
     * kind of data-attribute to the link, which then would help you to chose a transition.
     *
     * See: https://github.com/luruke/barba.js/issues/19#issuecomment-223874845
     *
     */
    isValid() {
        return this.isMatchingURLs(/\/$/, /\/about/);
    },


    /**
     * Animates the old container with popmotion
     */
    animateOldContainer(oldContainer) {
        return new Promise((resolve) => {
            // Example with Popmotion
            tween({
                from: {
                    opacity: 1,
                    x: 0,
                    rotateZ: 0,
                },
                to: {
                    opacity: 0,
                    x: 50,
                    rotateZ: 50,
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
            // Example with Popmotion
            tween({
                from: {
                    opacity: 0,
                    x: 50,
                    rotateZ: 50,
                },
                to: {
                    opacity: 1,
                    x: 0,
                    rotateZ: 0,
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
