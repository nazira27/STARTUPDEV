<template>
    <v-container text-center>
            <h3 class="mb-3 display-2">What type of site do you want?</h3>
            <v-row>
                <v-col lg="3" md="3" sm="6" xl="12" v-for="(list, i) in lists" :key="i">
                    <v-card class="box">
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
.box {
    border: 1px solid #999;
    color: var(--v-primary-base);
    border-radius: 2px;
    margin: 2px;
}
.box span {
    color: var(--v-primary-base);
}
</style>