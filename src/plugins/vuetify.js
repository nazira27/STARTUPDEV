import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import 'styles/_variables.scss'
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      options: {
        customProperties: true,
      },
        themes: {
          light: {
            primary: '#293d58',
            background: '#E5E5E5',
            lightGray: '#FBFBFB',
            secondary: '#47ccd6',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
