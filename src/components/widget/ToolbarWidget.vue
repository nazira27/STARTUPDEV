<template>
  <div>
    <v-toolbar class="tool-nav elevation-0" height="65px">
      <v-container>
        <v-row no-gutters align="center" justify="center">
          <!-- <v-col> -->
          <router-link :to="{name: 'home'}">
            <img class="kp" src="~@/assets/Group.png" />
          </router-link>
          <v-spacer></v-spacer>
          <a href="http://bit.ly/32WXlNI" target="_blank">
            <img height="30px" contain class="ap" src="~@/assets/logo.png" />
          </a>
          <!-- </v-col> -->
        </v-row>
      </v-container>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "ToolbarWidget",
  data() {
    return {};
  },
  methods: {
    logout() {
      let self = this;
      self.$http.post(self.$store.getters.apiUrl + "/logout").then(response => {
        let messageData = response.data.data;
        if (messageData) {
          self.$store.commit("token", "");
          self.redirect("login");
        }
      }, self.handleError);
    }
  }
};
</script>
<style lang="scss" scoped>
body .v-application {
  .tool-nav {
    background-color: #000;
    h3 {
      color: #fff !important;
      padding-left: 20px;
      margin-bottom: 3px;
    }
    .kp {
      width: 200px;
    }
    .ap {
      height: 30px;
    }
    @include sm-down {
      .kp {
        width: 120px;
      }
      .ap {
        height: 20px;
      }
    }
  }
}
</style>