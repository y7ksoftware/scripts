import project from '../../../../project.json';

const backendConfig = JSON.parse(JSON.stringify(window.backendConfig));

export const APP_VERSION = project.version;
export const APP_ENV = backendConfig.APP_ENV;
export const APP_DEBUG = backendConfig.APP_DEBUG;
export const BUGSNAG_API_KEY = backendConfig.BUGSNAG_API_KEY;
export const API_PREFIX = backendConfig.API_PREFIX;
export const CSRF_TOKEN = backendConfig.CSRF_TOKEN;
