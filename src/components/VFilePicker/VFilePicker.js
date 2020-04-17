import VFilePickerComponent from "./VFilePickerComponent";

const VFilePicker = {
    install: (Vue) => {
        Vue.component("VFilePicker", VFilePickerComponent);
    }
};

export default VFilePicker;