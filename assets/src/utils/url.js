import Vue from 'vue';

const lang = document.documentElement.lang;

Vue.prototype.$url = function(url = '') {
  return `/${lang}/${url}`;
}
