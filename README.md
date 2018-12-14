# Vue-Static

This plugin enables you to have variables in your Vue component that don't have reactivity.

## Why

Sometimes you don't want reactivity for some of your variables e.g. because they contain other objects (leafletjs maps or similar) or because they are huge and you don't need reactivity for them (e.g. big objects).

## Installation

```
$ npm i vue-static
```

in your `main.js`:

```
import VueStatic from 'vue-static'
Vue.use(VueStatic);
```


## Usage

```html
<template>
    <div>
        <p>
            Just use it like a normal variable: {{untracked_variable}}
        </p>
    </div>
</template>
<script>
export default {
    static() {
        return {
            untracked_variable: 'some variable without reactivity',
        };
    },
    mounted() {
        // the template won't update because the variable doesn't have reactivity
        this.untracked_variable = 'you can use it like a normal variable';
    },
};
</script>
```

`static` can be a function or an object (like `data`).


## Custom Merge Strategy

Internally, this plugin uses Vue's [$options](https://vuejs.org/v2/api/#vm-options) (specifically `$options.static`). Therefore you can use [custom merge strategies](https://vuejs.org/v2/guide/mixins.html#Custom-Option-Merge-Strategies). By default it uses the same strategy for merges as `data` (`Vue.config.optionMergeStrategies.data`). Thanks to [Akryum](https://github.com/Akryum) for the idea.

## Namespace

There's an option called `namespaced` so that all static data will be namespaced into `$static` component property. This is solely to avoid conflicts with other options and reactive data (same name, for instance), and helps you to remember which data is or isn't reactive.

```javascript
import VueStatic from 'vue-static'
Vue.use(VueStatic, {
    namespaced: true,
});
```

Just use `this.$static.variable` instead of `this.variable` in your code and `$static.variable` instead of `variable` in your template. Thanks to [matheusgrieger](https://github.com/matheusgrieger) for the idea. See [here](https://github.com/samuelantonioli/vue-static/pull/2) for example usage.

## Name

There's an option called `name` so that the `static` function/object can be renamed. This addresses the issue that `static` is a reserved keyword. If you have problems to use `static` as the default name, you can change it.

```javascript
import VueStatic from 'vue-static'
Vue.use(VueStatic, {
    name: 'basedata',
});
```

