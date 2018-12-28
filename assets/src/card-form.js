import Vue from 'vue';

import './base.js';

import CardForm from 'components/CardForm.vue';

new Vue({el: '#app', render: h => h(CardForm)});
