<template>
    <div>
        <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px">
            <template v-slot:activator="{ on }">
                <v-text-field
                        v-model="date"
                        :label="label"
                        prepend-icon="event"
                        v-on="on"
                        clearable
                        readonly
                ></v-text-field>
            </template>
            <v-date-picker v-model="date"
                           @input="menu = false" no-title scrollable></v-date-picker>
        </v-menu>
    </div>
</template>
<script>
    export default {
        name: 'DatePicker',
        props: {
            value: {
                type: null,
                required: true
            },
            label: {
                type: String,
                required: false,
                default: ""
            }
        },
        data() {
            return {
                menu: false,
                date: ''
            }
        },
        watch:{
            date(value){
                this.$emit('input', value);
            }
        }
    }
</script>
<style scoped>

</style>