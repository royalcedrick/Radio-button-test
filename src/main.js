import { createApp } from 'vue'
import {createStore} from 'vuex'
import menu from './store.js';
import App from './App.vue'

window.$ = window.jQuery = require('jquery');

const store = createStore(menu);

createApp(App)
    .use(store)
    .mount('#app')
