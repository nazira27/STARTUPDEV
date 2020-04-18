<template>
    <v-footer dark padless>
        <v-card flat tile color="primary" class="card white--text text-center">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="pt-0 white--text">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>
export default {
    data() {
      return {
        icons: [
            'mdi-facebook-box',
            'mdi-twitter-circle',
            'mdi-google-plus-box',
            'mdi-linkedin-box',
            'mdi-instagram',
        ]

      }
    },
}
</script>
<style scoped>
    .card {
        margin: 0 auto;
    }
</style>