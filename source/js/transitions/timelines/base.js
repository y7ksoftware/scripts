//import {TimelineLite, TweenLite} from 'gsap'

export function animateOldContainer(oldContainer) {

    return new Promise((resolve) => {

        // Example with GSAP
        // new TimelineLite({ onComplete: resolve}).to(oldContainer, 0.5, {opacity: 0 }, '+=0');

        // Remove this, if you use the animation above!
        resolve();

    });

}

export function animateNewContainer(newContainer) {

    return new Promise((resolve) => {

        // Example with GSAP
        // new TimelineLite({
        //     onComplete: () => {
        //         TweenLite.set(newContainer,{ clearProps:'all' });
        //         resolve();
        //     }
        // }).from(newContainer, 0.5, {opacity: 0 }, '+=0');

        // Remove this, if you use the animation above!
        resolve();
    });

}


