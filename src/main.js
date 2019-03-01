import Vue from 'vue';

Vue.config.productionTip = false;

import router from './router';

import App from './App';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
