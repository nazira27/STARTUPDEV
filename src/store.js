import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import Fingerprint2 from 'fingerprintjs2';
import UAParser from 'ua-parser-js';
import i18n from '@/i18n.js';
// let DEVICEID = '';
function getDevice() {
	// window.localStorage.removeItem('deviceId');
	let id = '';
	if (!window.localStorage.getItem('deviceId')) {
		if (window.requestIdleCallback) {
			requestIdleCallback(function() {
				Fingerprint2.get(
					{
						preprocessor: function(key, value) {
							if (key == 'userAgent') {
								var parser = new UAParser(value);
								var userAgentMinusVersion =
									parser.getOS().name +
									' ' +
									parser.getBrowser().name +
									' ' +
									parser.getBrowser().version;
								return userAgentMinusVersion;
							}
							return value;
						},
					},
					function(components) {
						var values = components.map(function(component) {
							if (component.key == 'userAgent') {
								if (!window.localStorage.getItem('userAgent')) {
									window.localStorage.setItem('userAgent', component.value);
								}
							}
							return component.value;
						});
						id = Fingerprint2.x64hash128(values.join(''), 31);
						window.localStorage.setItem('deviceId', id);
						deviceId(id);
					}
				);
			});
		}
	}
}
function deviceId(id) {
	let formdata = {
		deviceId: id,
		name: window.localStorage.getItem('userAgent'),
	};
	Vue.http.post('device', formdata).then(response => {
        Vue.http.headers.common['device-id'] = id;
		console.log(response);
	});
}
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		token: '',
		navigation: true,
		userName: '',
		user: [],
		phone: '',
		roles: '',
		deviceId: '',
		toolbar: true,
		authorized: false,
		apiUrl: 'https://igovapi.achilov.dev/api/v1/',
		// apiUrl: 'http://192.168.120.51:8082/api',
		// apiUrl: 'http://localhost:8082/api',
		apiLocale: window.localStorage.getItem('lang') || 'uz',
		message: '',
		color: '',
		excelMeta: [
			[
				{
					key: 'charset',
					value: 'utf-8',
				},
			],
		],
		pagination: {
			page: 1,
			rowsPerPage: 10,
		},
		services: [],
		allCards: [],
		cardsUpdatedAt: 0,
	},
	getters: {
		token: state => state.token,
		roles: state => {
			if (state.roles.length === 0) {
				state.roles = JSON.parse(window.localStorage.getItem('roles'));
			}
			return state.roles;
		},
		navigation: state => state.navigation,
		toolbar: state => state.toolbar,
		authorized: state => state.authorized,
		apiUrl: state => {
			return state.apiUrl;
		},
		message: state => state.message,
		color: state => state.color,
		userName: state => state.userName,
		user: state => state.user,
		phone: state => state.phone,
		menu: state => {
			if (state.roles.length === 0) {
				state.roles = JSON.parse(window.localStorage.getItem('roles'));
			}
			return state.roles[0] && menu[state.roles[0]] ? menu[state.roles[0]] : [];
		},
		pagination: state => {
			return state.pagination;
		},
		services: state => state.services,
		allCards: state => state.allCards,
		cardsUpdatedAt: state => {
			return state.cardsUpdatedAt
		},
		deviceId: state => {
			getDevice();
			state.deviceId = window.localStorage.getItem('deviceId');
			Vue.http.headers.common['device-id'] = window.localStorage.getItem('deviceId');
			return state.deviceId;
		},
		apiLocale: state => {
			i18n.locale = state.apiLocale
			return state.apiLocale
		}
	},
	mutations: {
		deviceId(state) {
			getDevice();
			state.deviceId = window.localStorage.getItem('deviceId');
		},
		pagination(state, pagination) {
			state.pagination = pagination;
		},
		services(state, services) {
			state.services = services;
		},
		allCards(state, allCards) {
			state.allCards = allCards;
		},
		cardsUpdatedAt(state, cardsUpdatedAt) {
			state.cardsUpdatedAt = cardsUpdatedAt;
		},
		userName(state, userName) {
			state.userName = userName;
		},
		user(state, user) {
			let newUser = user;
			let userName = newUser.firstName + ' ' + newUser.lastName;
			newUser.userName = userName;
			state.user = newUser;
		},
		phone(state, phone) {
			state.phone = phone;
		},
		token(state, token) {
			state.token = token;
			Vue.http.headers.common['token'] = token;
			if (token) {
				// state.toolbar = true;
				state.authorized = true;
				// state.navigation = true;
				window.localStorage.setItem('token', token);
			} else {
				state.authorized = false;
				// state.toolbar = false;
				// state.navigation = false;
				window.localStorage.removeItem('token');
			}
		},
		roles(state, roles) {
			state.roles = roles;
			window.localStorage.setItem('roles', JSON.stringify(roles));
		},
		navigation(state, navigation) {
			state.navigation = navigation;
		},
		toolbar(state, toolbar) {
			state.toolbar = toolbar;
		},
		authorized(state, authorized) {
			state.authorized = authorized;
		},
		errorMessage(state, errorMessage) {
			state.message = errorMessage;
			state.color = 'error';
		},
		successMessage(state, successMessage) {
			state.message = successMessage;
			state.color = 'success';
		},
		infoMessage(state, infoMessage) {
			state.message = infoMessage;
			state.color = 'info';
		},
		message(state, message) {
			state.message = message;
		},
		color(state, color) {
			state.color = color;
		},
		setApiLocale(state, locale) {
			state.apiLocale = locale;
			window.localStorage.setItem('lang', locale)
		},
	},
});
