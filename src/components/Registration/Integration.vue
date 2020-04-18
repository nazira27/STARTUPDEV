<template>
    <v-container text-center>
        <h3 class="textColor mb-2 display-1 animated fadeInLeft"><vue-typer caret-animation='expand' class="textColor" text="Integration"></vue-typer></h3>
        <v-row align="center">
            <v-col md="7" lg="7" sm="12">
                <v-img src=@/assets/undraw_online_discussion.svg> </v-img> 
            </v-col> 
            <v-col md="5" lg="5" sm="12">
                    <v-btn class="mx-3 animated fadeInDown"  color="primary" large>
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn class="mx-3 animated fadeInUp delay-1s" color="primary" large>
                        <v-icon>mdi-google</v-icon>
                    </v-btn>
                    <v-btn class="mx-3 animated fadeInDown delay-1s" color="primary" large>
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn class="mx-3 animated fadeInUp" color="primary" large>
                        <v-icon>mdi-telegram</v-icon>
                    </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Integration",

}
</script>
<style scoped>
.textColor {
    color: var(--v-secondary-base);
}
</style>