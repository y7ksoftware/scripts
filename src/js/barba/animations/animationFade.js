import { tween, styler } from 'popmotion';

export function animateOldContainer(oldContainer) {
    return new Promise((resolve) => {
        // Example with Popmotion
        tween({
            from: {
                opacity: 1,
                x: 0,
            },
            to: {
                opacity: 0,
                x: 50,
            },
            duration: 500,
        })
            .start({
                update: styler(oldContainer).set,
                complete: resolve,
            });
    });
}

export function animateNewContainer(newContainer) {
    newContainer.style.opacity = 0;

    return new Promise((resolve) => {
        // Example with Popmotion
        tween({
            from: {
                opacity: 0,
                x: 50,
            },
            to: {
                opacity: 1,
                x: 0,
            },
            duration: 500,
        })
            .start({
                update: styler(newContainer).set,
                complete: resolve,
            });
    });
}
