/**
 * Created by vuthy on 5/16/19.
 */
// function
import global from './globalfunction';
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import VueImageLoader from '@kevindesousa/vue-image-loader'
import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import Datetime from 'vue-datetime'
import InputTag from 'vue-input-tag'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
import ToggleButton from 'vue-js-toggle-button'


let header = global.getCookie("header")
let token = header?JSON.parse(header)['access_token']:"";
// Vue.use(Datetime);
// Vue.use(VueSocketio, io(process.env.socket, { query: 'token=Bearer ' + token }));
Vue.use(VueImageLoader);
Vue.use(VueCookies);
Vue.use(require('vue-moment'));
Vue.component('input-tag', InputTag);
Vue.use(ToggleButton);

var toastrConfigs = {
    position: 'bottom left',
    showDuration: 600,
    hideDuration: 1500,
    timeOut: 1500,
    color: '#4A4A4A',
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
}
Vue.use(CxltToastr, toastrConfigs)
 

