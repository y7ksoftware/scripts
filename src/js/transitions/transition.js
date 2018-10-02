import Barba from 'barba.js';
import { animateOldContainer, animateNewContainer } from 'transitions/timeline';

export default Barba.BaseTransition.extend({

    start() {
        Barba.Dispatcher.trigger('animateOldContainerStarted');

        // Save scroll position before going to next page (so we can restore it when coming back)
        window.pjaxHistory.setPrev('scrollPos', window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.savedScrollPos);

        // Start loading the content
        // Start the animation
        Promise.all([
            this.newContainerLoading,
            animateOldContainer(this.oldContainer),
        ])
            .then(this.finish.bind(this));
    },


    finish() {
        Barba.Dispatcher.trigger('animateOldContainerEnded');
        Barba.Dispatcher.trigger('animateNewContainerStarted');

        // done() removes the old container and sets the visibility of the new container
        this.done();

        // When we transition back in history, we restore the scroll position where we were before. Else
        // we always scroll back to the top
        if (window.pjaxHistory.isBackwards()) {
            const lastScrollPos = window.pjaxHistory.get('scrollPos', 0);
            window.scrollTo(0, lastScrollPos);
            // document.body.scrollTop = lastScrollPos;
        } else {
            window.scrollTo(0, 0);
            // document.body.scrollTop = 0;
        }

        animateNewContainer(this.newContainer)
            .then(() => {
                Barba.Dispatcher.trigger('animateNewContainerEnded');
            });
    },

});