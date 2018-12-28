import Vue from 'vue';

import 'utils/directives.js';
import 'utils/i18n.js';
import 'utils/url.js';
import context from 'utils/context.js';

Vue.prototype.$context = context;
