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

