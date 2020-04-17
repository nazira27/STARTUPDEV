import VDatePickerComponent from "./DatePickerComponent";

const VDatePicker = {
    install: (Vue) => {
        Vue.component("DatePicker", VDatePickerComponent);
    }
};

export default VDatePicker;