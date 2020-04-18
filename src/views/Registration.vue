<template>
    <div>
        <Header></Header>
	<v-container>
        <template>
            <v-stepper v-model="e1" class="m-20 elevation-0">
                <v-stepper-header class="elevation-0">
                    <v-stepper-step editable :complete="e1 > 1" step="1"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :editable="e1>2" :complete="e1 > 2" step="2"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :editable="e1>3" :complete="e1 > 3" step="3"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="4"></v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <Step1 v-model="e1" :step="e1" :lists="lists" @onElementSelected="handleStepOne" />
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Step2 v-model="e1" :step="e1" :valueFromStepOne="valueFromStepOne" :valueOfPlcholder="valueOfPlcholder" />
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Step3 v-model="e1" :step="e1"/>
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        <Integration/>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </template>
</v-container>
    </div>
</template>
<script>
import Header from "@/components/Landing/Header"
import Step1 from "@/components/Registration/Step1"
import Step2 from "@/components/Registration/Step2"
import Step3 from "@/components/Registration/Step3"
import Integration from "@/components/Registration/Integration"
export default {
    name: "Registration",
    components: {
        Header,
        Step1,
        Step2,
        Step3,
        Integration
    },
    data() {
        return {
            e1: 1,
            lists: [
                { name: "Business", icon: "mdi-wallet", plcholder: "e.g., John's business website, Mary's business" },
                { name: "Online Store", icon: "mdi-store", plcholder: "e.g., Bob's online store , Ethan's shop online" },
                { name: "Blog", icon: "mdi-rss", plcholder: "e.g., Nathan's blog, Lauren's blog" },
                { name: "Handyman Services", icon: "mdi-cogs", plcholder: "e.g., Smith's Handyman services" },
                { name: "Restaurants and Food", icon: "mdi-food-fork-drink", plcholder: "e.g., Aron's eatery, Jesse's Restaurant" },
                { name: "Photography", icon: "mdi-camera", plcholder: "e.g., Smith's Photography, Jacky's Photographs" },
                { name: "Events", icon: "mdi-calendar", plcholder: "e.g., John and Mary's Wedding, Larry's Venue" },
                { name: "Technology & Web", icon: "mdi-desktop-mac", plcholder: "e.g., John's Technology Business, Will's Web Services" },
                { name: "Transportation Services", icon: "mdi-car-side", plcholder: "e.g., Emma's Rental Service, Barry's Bus Rental" },
                { name: "Hospitality & Tourism", icon: "mdi-airplane-takeoff", plcholder: "Smith's hotel,Alfred's bed and Breakfast" },
                { name: "Music", icon: "mdi-headphones", plcholder: "e.g., Lisa's Music Service, David's Musician Website" },
                { name: "Creative Arts", icon: "mdi-palette", plcholder: "e.g., Linda's Performance Arts, Charles' Comedy" },
                { name: "Health & Wellness", icon: "mdi-cards-heart", plcholder: "e.g., Janet's Health Center, Victoria's Wellness Service" },
                { name: "Recreation & Sport", icon: "mdi-dumbbell", plcholder: "e.g., Smith's Sports Network, Bruce's Athletic Clubs" },
                { name: "CV & Portfolio", icon: "mdi-human-male", plcholder: "e.g., Hartson's CV and Portfolio Service" },
                { name: "Community", icon: "mdi-office-building", plcholder: "e.g., New Youth Community Club, Simpson Community Organization" }
            ],
            valueFromStepOne: '',
            valueOfPlcholder: '',
        }
    },
    methods: {
        handleStepOne(newValue) {
            this.valueFromStepOne = this.lists[newValue].name;
            this.valueOfPlcholder = this.lists[newValue].plcholder;
            console.log(this.valueFromStepOne, ' parent')
            console.log(this.valueOfPlcholder, ' parent')
        }
    }
}
</script>
<style scoped>
.m-20 {
    margin-top: 110px;
}
</style>