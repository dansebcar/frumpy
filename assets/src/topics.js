import Vue from 'vue';

import './base.js';

import TopicList from 'components/TopicList.vue';

new Vue({el: '#app', render: h => h(TopicList)});
