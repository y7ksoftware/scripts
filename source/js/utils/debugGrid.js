import * as config from 'config';

/**
 * Debug Grid. Can be used to show a Susy background grid (which is exact)
 *
 * Show hide with "ALT + G" (only in dev mode)
 */

export function init() {

    const DEBUG_GRID_KEY = 71; // g

    if(config.APP_DEBUG) {
        document.addEventListener('keydown', (e) => {
            if(e.altKey && e.keyCode == DEBUG_GRID_KEY) {
                const debugGrid = document.querySelector('.debugGrid');
                if(debugGrid) {
                    debugGrid.classList.toggle('debugGrid-isVisible');
                }
            }
        });
    }
}
