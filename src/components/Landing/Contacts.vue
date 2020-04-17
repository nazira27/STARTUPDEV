<template>
    <v-container>
        <div class="text-center mx-auto">
            <h3 class="display-3"><vue-typer class="textColor" text="Contacts"></vue-typer></h3>
        </div>
        <v-row align="center">
            <v-col md="5" lg="5" xs="12" sm="12">
                <h4 class="textColor my-4">Get in touch</h4>
                <h1 class="textColor my-8">Feel Free To Contact</h1>

                <v-text-field outlined label="Your name" append-icon="mdi-account"></v-text-field>
                <v-text-field outlined label="Your email" append-icon="mdi-email"></v-text-field>
                <v-text-field outlined append-icon="mdi-lock" type="password" label="Password"></v-text-field>
                <p class="textColor mt-1 mb-4">Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>
                    <v-text-field outlined type="message" label="Message" append-icon="mdi-comment"></v-text-field>
                    <div>
                <v-btn class="float-right" color="primary" large>Send Message</v-btn>   
                    </div>
            </v-col>
            <v-col md="7" lg="7" xs="12" sm="12" class="mt-10">
        <div class="mt-5">
            <v-img src=@/assets/convert_2gjv.png></v-img>
        </div>
        
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Contacts",
}
</script>
<style scoped>

.textColor {
    color: var(--v-secondary-base);
}
</style>