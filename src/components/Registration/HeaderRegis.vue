<template>
    <div>
       <!--  <v-app-bar class="navbar elevation-0" height="70" color="white" dense> -->
            <div class="center">
                <router-link class="link" :to="{ name: 'home' }">
                    <v-img class="mx-auto mt-3" src="@/assets/logo1.jpg" width="200" height="55">
                    </v-img>
                </router-link>
            </div>
            <!-- <h3 class="ml-10 mr-4 title"><a @click="handleClick" class="nav" v-scroll-to="'#banner'" href="#">Home</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#features'" href="#">Features</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#about'" href="#">About</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#pricing'" href="#">Pricing</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#contact'" href="#">Contacts</a></h3>
            <v-spacer></v-spacer>
            <h3 class="mx-4 title"><a href="#">Log In</a></h3>
            <router-link :to="{ name: 'registration' }">
                <v-btn large color="primary">Start Here</v-btn>
            </router-link> -->
        <!-- </v-app-bar> -->
    </div>
</template>
<script>
export default {
    name: 'HeaderRegis',

}
</script>
<style scoped>
a {
    text-decoration: none;
}
.center {
    width: 100%;
    padding: 15px auto; 
    align-items: center;
    align-content: center;
    text-align: center;
}

.navbar {
    position: fixed;
    z-index: 10000;
}


</style>