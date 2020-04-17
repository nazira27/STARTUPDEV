<template>
    <v-container>
        <v-row align="center">
            <v-col md="4" lg="4" xl="12">
                <v-card class="card1 mx-auto" max-width="344" elevation="3">
                    <div class="pt-10 pb-10 px-10">
                        <v-list-item-title class="font-weight-black mx-auto text-center display-2">$99
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-capitalize text-center mt-5 subtitle-1">Monthly package
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="text-uppercase text-center mt-10 display-1" color="primary">Starter
                        </v-list-item-subtitle>
                        <div class="text-center mt-5 mb-5">
                            <v-btn large rounded color="primary" dark>Button</v-btn>
                        </div>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">15 analytics compaign
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">Unlimited Site licenses
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">1 Database
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">10 Free Optimization
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">Html5 + Css3
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-center text-capitalize">24 / 7 customer support
                        </v-list-item-subtitle>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4" lg="4" xl="12">
                <v-card class="mx-auto card2" max-width="344" elevation="3">
                    <div class="pa-10">
                        <v-list-item-title class="font-weight-black mx-auto text-center display-2">$99
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-capitalize text-center mt-5 subtitle-1">Monthly package
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="text-uppercase text-center mt-10 display-1" color="primary">Starter
                        </v-list-item-subtitle>
                        <div class="text-center mt-5 mb-5">
                            <v-btn large rounded color="primary" dark>Button</v-btn>
                        </div>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">15 analytics compaign
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">Unlimited Site licenses
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">1 Database
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">10 Free Optimization
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">Html5 + Css3
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-center text-capitalize">24 / 7 customer support
                        </v-list-item-subtitle>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4" lg="4" xl="12">
                <v-card class="card3 mx-auto" max-width="344" elevation="3">
                     <div class="pt-10 pb-10 px-10">
                        <v-list-item-title class="font-weight-black mx-auto text-center display-2">$99
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center mt-5 subtitle-1">Monthly package
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="text-uppercase text-center mt-10 display-1">Starter
                        </v-list-item-subtitle>
                        <div class="text-center mt-5 mb-5">
                            <v-btn large rounded color="primary" dark>Button</v-btn>
                        </div>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">15 analytics compaign
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">Unlimited Site licenses
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">1 Database
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">10 Free Optimization
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-capitalize text-center">Html5 + Css3
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="my-3 text-center text-capitalize">24 / 7 customer support
                        </v-list-item-subtitle>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Pricing",
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
}
</script>
<style scoped>
.card2 {
   padding-top: 20px;
   padding-bottom: 20px;
}
.card2:hover{
  box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important;
}
.card1:hover {
   box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important; 
}
.card3:hover {
   box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important; 
}
</style>