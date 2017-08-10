import {animateOldContainer, animateNewContainer} from 'transitions/timelines/base';

export default Barba.BaseTransition.extend({

    start() {

        Barba.Dispatcher.trigger('animateOldContainerStarted');

        // Save scroll position before going to next page (so we can restore it when coming back)
        pjaxHistory.setPrev('scrollPos', window.scrollY || window.savedScrollPos);

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
        if(pjaxHistory.isBackwards()) {
            const lastScrollPos = pjaxHistory.get('scrollPos', 0);
            window.scrollTo(0, lastScrollPos);
        } else {
            window.scrollTo(0, 0);
        }

        animateNewContainer(this.newContainer)
            .then(() => {
                Barba.Dispatcher.trigger('animateNewContainerEnded');
            });

    },

});
