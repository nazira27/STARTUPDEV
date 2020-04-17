<template>
    <v-container>
        <v-row align="center">
            <v-col lg="5" md="5" sm="12">
                    <h3 class="my-5 display-3 textColor"><vue-typer class="textColor" text="About us"></vue-typer></h3>
                    <p class="my-5 title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </v-col>
            <v-col lg="7" md="7" sm="12">
                <v-img src=@/assets/good_team_m7uu.png> </v-img> 
            </v-col> 
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "About",
}
</script>
<style scoped>
.textColor {
    color: var(--v-secondary-base);
}
</style>