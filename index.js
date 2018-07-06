
function install(Vue, options) {
    if (typeof(Vue.config.optionMergeStrategies.static) !== 'function') {
        Vue.config.optionMergeStrategies.static = Vue.config.optionMergeStrategies.data;
    }
    // Creates $static instance property if configured
    // Empty by default
    if (options && options.namespaced) {
        Vue.prototype.$static = {};
    }
    Vue.mixin({
        beforeCreate: function () {
            const static = this.$options.static;
            const destination = this.$static || this;
            if (static && typeof(static) === 'function') {
                Object.assign(destination, static.apply(this));
            } else if (static && typeof(static) === 'object') {
                Object.assign(destination, static);
            }
        },
    });
}

export default install;
