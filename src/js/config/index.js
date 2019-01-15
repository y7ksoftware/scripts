import project from '../../../../project.json';

const backendConfig = JSON.parse(JSON.stringify(window.backendConfig));

export const APP_VERSION = project.version;
export const {
    APP_ENV,
    APP_DEBUG,
    BUGSNAG_API_KEY,
    API_PREFIX,
    CSRF_TOKEN,
    LOCALE,
} = backendConfig;
