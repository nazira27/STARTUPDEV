import Vue from 'vue';
import App from './App.vue';
import mixins from './plugins/mixins';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import numberFormatFilter from './plugins/numberFormatFilter';
// import colors from './colors';
import SnackbarMessage from './components/snackbar/SnackbarMessage';
import VFilePicker from './components/VFilePicker/VFilePicker';
import VDatePicker from './components/VDatePicker/VDatePicker';
import downloadExcel from 'vue-json-excel';
import VueI18n from 'vue-i18n';
import i18n from './i18n';
import vuetify from './plugins/vuetify';
import IconFonts from './components/IconFonts.vue';
import ContentTitle from './components/widget/ContentTitle.vue';
import VueTyperPlugin from 'vue-typer'

Vue.use(mixins);
Vue.use(numberFormatFilter);
Vue.use(SnackbarMessage);
Vue.use(VueResource);
Vue.use(VFilePicker);
Vue.use(VDatePicker);
Vue.use(downloadExcel);
Vue.component('downloadExcel', downloadExcel);
Vue.component('IconFonts', IconFonts);
Vue.component('ContentTitle', ContentTitle);
Vue.use(VueTyperPlugin)

Vue.use(VueI18n);

Vue.use(vuetify, {
	options: {
		customProperties: true,
	},
	iconfont: 'mdi',
});
Vue.config.productionTip = false;

var username = 'AVtO_L0aN_8f234_Ssmeiq';
var password = '&*sk92jf8.1521aydd3810bx742n54kiygh2';
var credentials = btoa(username + ':' + password);
var basicAuth = 'Basic ' + credentials;

Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Authorization'] = basicAuth;
// Vue.http.headers.common['token'] = store.getters.token;
// Vue.http.headers.common['app-version'] = 'w0.0.1';
// Vue.http.headers.common['device-id'] = store.getters.deviceId;
// Vue.http.headers.common['lang'] = store.getters.apiLocale;
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

Vue.http.options.root = store.getters.apiUrl;
new Vue({
	router,
	store,
	i18n,
	vuetify,
	render: h => h(App),
}).$mount('#app');
