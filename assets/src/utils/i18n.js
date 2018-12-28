import Vue from 'vue';
import VueGettext from 'vue-gettext';

import context from 'utils/context.js';
import translations from '../translations.json';

const lang = document.documentElement.lang;

Vue.use(
  VueGettext,
  {
    defaultLanguage: lang,
    availableLanguages: context.availableLanguages,
    translations,
    silent: true,
  },
);
