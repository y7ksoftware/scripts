import Vue from 'vue';
import VueI18n from 'vue-i18n';

import de from 'locales/de';
import en from 'locales/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        de,
        en,
    },
});

export default i18n;
