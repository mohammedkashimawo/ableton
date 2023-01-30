import Vue from 'vue'
import App from './App.vue'
import TopNav from './TopNav.vue'
import MiddleContent from './MiddleContent.vue'


Vue.config.productionTip = false;

Vue.component('TopNav',TopNav);
Vue.component('MiddL', MiddleContent);



export const bus = new Vue();
export const bus1 = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');

