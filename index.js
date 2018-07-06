
function install(Vue) {
    if (typeof(Vue.config.optionMergeStrategies.static) !== 'function') {
        Vue.config.optionMergeStrategies.static = Vue.config.optionMergeStrategies.data;
    }
    Vue.mixin({
        beforeCreate: function () {
            const static = this.$options.static;
            if (static && typeof(static) === 'function') {
                Object.assign(this, static.apply(this));
            } else if (static && typeof(static) === 'object') {
                Object.assign(this, static);
            }
        },
    });
}

export default install;
