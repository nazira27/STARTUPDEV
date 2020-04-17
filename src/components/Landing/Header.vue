<template>
    <div :class="{ fixed: isFixed }">
        <v-app-bar class="navbar elevation-0" height="70" color="white" dense>
            <div>
                <router-link :to="{ name: 'home' }">
                    <v-img src="@/assets/logo1.jpg" width="200" height="55">
                    </v-img>
                </router-link>
            </div>
            <h3 class="ml-10 mr-4 title"><a @click="handleClick" class="nav" v-scroll-to="'#banner'" href="#">Home</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#features'" href="#">Features</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#about'" href="#">About</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#pricing'" href="#">Pricing</a></h3>
            <h3 class="mx-4 title"><a class="nav" @click="handleClick" v-scroll-to="'#contact'" href="#">Contacts</a></h3>
            <v-spacer></v-spacer>
            <h3 class="mx-4 title"><a href="#">Log In</a></h3>
            <router-link :to="{ name: 'registration' }">
                <v-btn large color="primary">Start Here</v-btn>
            </router-link>
        </v-app-bar>
    </div>
</template>
<script>
    import $ from 'jquery';
export default {
    name: 'Header',
    data() {
        return{
        scrollPosition: null,
        isFixed: false
}
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;

            if(window.scrollY>300){
                this.isFixed = true;
            }else{
                this.isFixed = false;
            }
        },
        handleClick(e){
            $(".title a").removeClass('active');
            $(e.target).addClass('active')
            console.log(e.target)
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    /*color: #323232;*/
}
.fixed .navbar{
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)!important;
}
.navbar {
    position: fixed;
    z-index: 10000;
}
.nav:after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background: var(--v-secondary-base);
    margin-top: 3px;

}
.nav:hover:after{
    width: 100%;
    background: var(--v-secondary-base);
    transition: width .3s ease
}
.active:after {
    width: 100%;
    background: var(--v-secondary-base);
}
</style>