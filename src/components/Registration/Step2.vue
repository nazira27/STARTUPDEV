<template>
    <v-container text-center>
        <h3 class="display-2">Add your {{valueFromStepOne}} name</h3>
        <v-row align="center">
            <v-col md="6" lg="6" sm="12">
                <v-text-field outlined :label="valueOfPlcholder"></v-text-field>
                <div @click="onClick()">
                    <v-btn class="ma-6 mt-10 mx-auto" color="primary" large>Go to final step</v-btn>
                </div>
            </v-col>
            <v-col md="6" lg="6" sm="12">
                <v-img src=@/assets/step2.png> 
                </v-img> 
            </v-col> 
        </v-row> 
    </v-container> 
</template> 
<script>
export default {
name: "Step2",
data() {
return {
}
},
props: {
step: {
required: true,
type: Number
},
valueFromStepOne: {
required: true,
type: String
},
valueOfPlcholder: {
required: true,
type: String
}
},
methods: {
onClick() {
this.$emit('input', 3);
}
},
mounted() {
console.log(this.step)
}
}
</script>