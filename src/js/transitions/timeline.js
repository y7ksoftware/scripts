// import { tween, styler } from 'popmotion';

export function animateOldContainer(/* oldContainer */) {
    return new Promise((resolve) => {
        // Example with Popmotion
        // tween({ from: 1, to: 0, duration: 200 })
        // .start({
        //     update: styler(oldContainer).set('opacity'),
        //     complete: resolve,
        // });

        // Remove this, if you use the animation above!
        resolve();
    });
}

export function animateNewContainer(/* newContainer */) {
    return new Promise((resolve) => {
        // Example with Popmotion
        // tween({ to: 1, duration: 200 })
        // .start({
        //     update: styler(newContainer).set('opacity'),
        //     complete: resolve,
        // });

        // Remove this, if you use the animation above!
        resolve();
    });
}
