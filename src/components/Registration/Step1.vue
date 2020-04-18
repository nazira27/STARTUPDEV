<template>
    <v-container text-center>
            <p class="textColor mb-3 display-1 animated fadeInDown">What type of site do you want?</p>
            <v-row>
                <v-col lg="3" md="3" sm="6" xl="3" xs="12" v-for="(list, i) in lists" :key="i">
                    <v-card class="box animated fadeInLeft">
                    <div @click="handleClick(i)">
                        <div>
                        <v-icon  color="primary" class="mt-3 mb-2" size="24px">{{ list.icon }}</v-icon>
                        </div>
                        <span color="primary" class="mt-2 mb-4">{{ list.name }}</span>
                    </div>
                </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Step1",
    data() {
        return {

        }
    },
    props: {
        step: {
            required: true,
            type: Number
        },
        lists: {
            required: true,
            type: Array
        }
    },
    methods: {
        handleClick(i) {
            console.log(i, ' child')
            this.$emit('input', 2);
            this.$emit('onElementSelected', i);
        }
    },
    mounted() {
        console.log(this.step)
    },

}
</script>
<style scoped>
.textColor {
    color: var(--v-secondary-base);
}
.box {
    border: 1px solid #999;
    color: var(--v-primary-base);
    border-radius: 2px;
    margin: 2px;
}
.box:hover {
    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important;
}
.box span {
    color: var(--v-primary-base);
}
</style>