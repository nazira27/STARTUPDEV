<template>
    <div>
        <v-app-bar class="navbar" height="88" color="white" dense>
            <div>
              <router-link :to="{ name: 'home' }">
                <v-img src="@/assets/logo1.jpg" width="200" height="70">
                </v-img>
              </router-link>
            </div>
            <h3 class="ml-10 mr-4 title"><a class="nav" v-scroll-to="'#banner'" href="#">Home</a></h3>
            <h3 class="mx-4 title"><a class="nav" v-scroll-to="'#features'" href="#">Features</a></h3>
            <h3 class="mx-4 title"><a class="nav" v-scroll-to="'#pricing'" href="#">Pricing</a></h3>
            <h3 class="mx-4 title"><a class="nav" v-scroll-to="'#contact'" href="#">Contacts</a></h3>
            <v-spacer></v-spacer>
            <h3 class="mx-4 title"><a href="#">Log In</a></h3>
            
                <router-link :to="{ name: 'registration' }"><v-btn large color="primary">Start Here</v-btn></router-link>
            
            <!-- <v-menu left bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: 'Header',
    components: {

    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    /*color: #323232;*/
}

.navbar {
    position: fixed;
    z-index: 10000;
}
</style>