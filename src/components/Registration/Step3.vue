<template>
    <v-container text-center>
        <h3 class="textColor display-1 animated fadeInRight">Let's get started!</h3>
        <v-row>
            <v-col md="6" lg="6" sm="12" xs="12">
                <v-text-field outlined label="Your Name" append-icon="mdi-account"></v-text-field>
                <v-text-field outlined label="Your Email" append-icon="mdi-email"></v-text-field>
                <v-text-field outlined label="Password" type="password" append-icon="mdi-lock"></v-text-field>
                <div @click="onClick()">
                 <v-btn class="ma-6 mt-3 mx-auto" color="primary" large>Start my website</v-btn>
                </div>
                <v-container>
                <v-row class="socialOne" align="center">
                    <v-col class="line" sm="2" md="2" lg="2">
                        <v-icon color="#4264b2">mdi-facebook</v-icon>
                    </v-col>
                    <v-col sm="10" md="10" lg="10">
                        <p class="ma-auto">Sign-up with Facebook</p>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row class="socialTwo" align="center">
                    <v-col class="line" sm="2" md="2" lg="2">
                        <v-icon color="#d73e32">mdi-google</v-icon>
                    </v-col>
                    <v-col sm="10" md="10" lg="10">
                        <p class="ma-auto">Sign-up with Google</p>
                    </v-col>
                </v-row>
            </v-container>
            </v-col>
            <v-col md="6" lg="6" sm="12" xs="12">
                <v-img src=@/assets/step3.png> </v-img> 
            </v-col> 
        </v-row> 
    </v-container> 
</template> 
<script>
 export default {
        name: "Step3",
        methods: {
    onClick() {
        this.$emit('input', 4);
    }
}
}
</script>
<style scoped>
.textColor {
    color: var(--v-secondary-base);
}
	.socialOne {
		border: 1px solid #4264b2;
		color: #4264b2;
		border-radius: 1px;
	}
	.socialOne .line{
		border-right: 1px solid #4264b2;
	}
	.socialTwo {
		border-radius: 1px;
		border: 1px solid #d73e32;
		color: #d73e32
	}
	.socialTwo .line{
		border-right: 1px solid #d73e32;
	}
</style>