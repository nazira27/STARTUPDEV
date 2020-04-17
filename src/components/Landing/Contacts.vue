<template>
    <v-container>
        <v-row>
            <v-col md="6" lg="6" xs="12" sm="12">
                <h4 class="my-4">Get in touch</h4>
                <h1 class="my-8">Feel Free To Contact</h1>

                <v-text-field outlined label="Your name" append-icon="mdi-account"></v-text-field>
                <v-text-field outlined label="Your email" append-icon="mdi-email"></v-text-field>
                <v-text-field outlined append-icon="mdi-lock" type="password" label="Password"></v-text-field>
            </v-col>
            <v-col md="6" lg="6" xs="12" sm="12">
                <p class="mt-8 mb-5">Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>
                <div class="message">
                    <v-text-field outlined type="message" label="Message" append-icon="mdi-comment"></v-text-field>
                    <v-btn class="ma-6 mt-10 mx-auto" color="primary" large>Send Message</v-btn>
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
.message {
    padding-top: 50px;
}
</style>