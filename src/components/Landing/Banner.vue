<template>
  <v-container class="mt-10 mb-10 pt-10 pb-10">
    <v-row align="center" mb-10 mt-10>
      <v-col lg="7" md="7">
        <v-img class="animated fadeInLeft" src=@/assets/team_collaboration.png>
        </v-img>
      </v-col>
      <v-col lg="5" md="5" class="animated fadeInRight">
        <p class="display-3 mb-10 mt-10 text" type="primary"><vue-typer class="textColor" text="STARTUPDEV"></vue-typer></p>
        <p class="mb-10 mt-10 title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven.</p>
        <router-link :to="{ name: 'registration' }">
        <v-btn class="mb-10 mt-10" x-large color="primary">Start Here</v-btn>
      </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "Banner",
    }
</script>
<style scoped>
  .text {
    color: #293d58;
  }
  a{
    text-decoration: none;
  }

</style>