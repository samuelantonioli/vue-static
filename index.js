
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
            const vue_static = this.$options.static;
            const vue_static_destination = this.$static || this;
            if (vue_static && typeof(vue_static) === 'function') {
                Object.assign(vue_static_destination, vue_static.apply(this));
            } else if (vue_static && typeof(vue_static) === 'object') {
                Object.assign(vue_static_destination, vue_static);
            }
        },
    });
}

export default install;
