<template>
    <v-container pt-10>
        <v-row align="center">
            <v-col lg="4" md="4" xl="12">
                <p class="mt-6 display-2 font-weight-bold">Let's code your template</p>
                <v-btn class="btn ma-6 mt-10 mx-auto" outlined large>Check prices</v-btn>
            </v-col>
            <v-col lg="8" md="8" xl="12">
                <v-row>
                    <v-col lg="6" md="6" xl="12" v-for="(item, i) in items" :key="i">
                        <v-img class="image" :src="item.icon">
                        </v-img>
                        <h3 class="my-3">{{item.title}}</h3>
                        <p>{{item.text}}</p>
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
<style scoped>
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
</style>