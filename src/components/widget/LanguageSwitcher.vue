<template>
  <div class="language-switch">
    <img @click="changeLocale('ru')" height="40" :src="require('../../assets/lang/russia.png')" alt=""> <br>
    <img @click="changeLocale('uz')" height="40" :src="require('../../assets/lang/uzbekistan.png')" alt="">
  </div>
  <!-- <div class="language-switch elevation-5">
    <v-select @change="changeLocale" :items="langs" v-model="$i18n.locale"></v-select>
  </div> -->

  <!-- <div class="locale-changer">
    <select @click="changeLocale" v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>-->

</template>
<script>

  import Vue from 'vue';
  export default {
  name: "LanguageSwitcher",

  data() {
    return {
      langs: ["uz", "ru"] };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      const route = Object.assign({}, this.$route);
      route.params.lang = locale;
      this.$store.commit('setApiLocale',locale)
      Vue.http.headers.common['lang'] = locale
      Vue.http.headers.common['lang'] = this.$i18n.locale;

      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.language-switch{
  position: fixed;
  bottom: 10%;
  right: 0px;
  z-index:9999;
}
</style>
