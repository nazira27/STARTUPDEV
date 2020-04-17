<template>
    <div>
        <input type="file" ref="file" :multiple="multiple" :accept="accept" @change="inputChange" style="display: none">
        <v-text-field
                prepend-icon="mdi-file"
                @click="activateFileInput"
                :value="fileString"
                clearable
                @click:clear="clearIconCallback"
                :label="label"
                :append-outer-icon="appendOuterIcon"
                @click:append-outer="appendOuterCb"
                :loading="loading ? 'primary' : loading"
                :disabled="disabled"
        >
        </v-text-field>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: null,
                required: true
            },
            multiple: {
                type: Boolean,
                required: false,
                default: false,
            },
            accept: {
                type: String,
                required: false,
                default: "*/*",
            },
            label: {
                type: String,
                required: false,
                default: "",
            },
            appendOuterIcon: {
                type: String,
                required: false,
            },
            appendOuterCb: {
                type: Function,
                required: false,
                default: () => {
                },
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false,
            },
            loading: {
                type: [String, Boolean],
                required: false,
                default: false
            }
        },
        name: "VFilePicker",
        data() {
            return {
                files: [],
            };
        },
        methods: {
            activateFileInput() {
                this.$refs.file.click();
            },

            inputChange(event) {
                this.files = [];
                let files = event.target.files;
                for (let i = 0, filesLength = files.length; i < filesLength; i++) {
                    this.files.push(files[i]);
                }
            },

            clearIconCallback() {
                this.files = [];
            },

            emitUpdate() {
                this.$emit("input", this.files);
            }
        },
        computed: {
            fileString(){

                    let result = [];

                    for (let i = 0, filesLength = this.files.length; i < filesLength; i++) {
                        let file = this.files[i];
                        result.push(file.name);
                    }

                    return result.join(", ");
                }
        },
        watch: {
            files() {
                this.emitUpdate();
            }
        }
    }
</script>

<style scoped>

</style>