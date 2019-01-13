import Vue from 'vue';

import LogLay from 'components/LogLay.vue';

const app = new Vue({el: '#log', render: h => h(LogLay)});
const [log] = app.$children;

export default log;
