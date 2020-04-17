const numberFormatFilter = {
    install(Vue) {
        Vue.filter('numberFormat', (value) => {
            if (!value) return '0';
            if(value === -1) return '-';
            let number = !Number.isNaN(value) ? value.toString() : parseFloat(value).toFixed(2).toString();
            let x = number.split('.');
            let x1 = x[0];
            let x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ' ' + '$2');
            }
            return x1 + x2.substr(0, 3);
        });
    }
};
export default numberFormatFilter;