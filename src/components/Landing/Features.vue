<template>
    <v-container pt-10>
        <v-row align="center">
            <v-col lg="4" md="4" xl="4" xs="12" sm="12">
                <p class="mt-6 display-2 font-weight-bold">
                    <vue-typer class="textColor" text="Let's code your template"></vue-typer>
                </p>
                <v-btn class="btn ma-6 mt-10 mx-auto" outlined large>Check prices</v-btn>
            </v-col>
            <v-col lg="8" md="8" xl="8" xs="12" sm="12">
                <v-row>
                    <v-col lg="6" md="6" xl="6" xs="12" sm="12" v-for="(item, i) in items" :key="i">
                        <v-card class="box pa-4">
                            <v-img class="image" :src="item.icon">
                            </v-img>
                            <h3 class="mx-2 textColor my-3">{{item.title}}</h3>
                            <p class="mx-1">{{item.text}}</p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Features",
    data() {
        return {
            items: [
                { icon: require("@/assets/icon1.svg"), title: "Mobile friendly", text: "Emails are essential to every business. That’s why we make sure all your email designs are responsive and work on any screen." },

                { icon: require("@/assets/icon2.svg"), title: "Cross client compatibility", text: "No matter where your emails appear, they maintain the same high quality look. We test on all major email clients like Outlook, Gmail, IOS, Android, and more." },

                { icon: require("@/assets/icon3.svg"), title: "Edit your own content", text: "You’re in control. Easily manage the content of your emails, including text and images, with mailchimp integration." },

                { icon: require("@/assets/icon4.svg"), title: "Fast delivery", text: "Get your handcrafted emails in as little as 2–3 days. Want to learn more? Chat with us today for a free review and estimated delivery time." },
            ]
        }
    },
}
</script>
<style lang="scss">
.textColor.vue-typer .custom.typed {
    color: var(--v-secondary-base);
}
</style>
<style scoped>
.textColor {
    color: var(--v-secondary-base);
}

.vue-typer .custom.char.typed {
    color: var(--v-secondary-base);
}

.vue-typer .custom.char.selected {
    color: var(--v-secondary-base);
}

.btn {
    background-color: white;
    color: #293d58;
    border: 1px solid #293d58;
}

.btn:hover {
    background-color: #293d58;
    color: white;
}

.image {
    filter: hue-rotate(320deg) saturate(0.5);
    width: 64px;
    height: 64px;
}

.box {
    width: 300px;
    height: 300px;
}

.box:hover {
    background: var(--v-primary-base);
    transition: 1.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: white;
}
</style>