/**
 * Created by luweibin on 2017/9/8.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import store from './store';
import routerConfig from './router';
Vue.use(VueRouter);
var router = new VueRouter(routerConfig)
new Vue({
        el: '#app',
        store,
        router: router,
        render: h => h(App),
        watch: {
                '$route' () {
                        window.document.title = this.$route.meta
                }
        },
});