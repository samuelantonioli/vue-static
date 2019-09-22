import Vue from "vue";

// defines type of PluginFunction
export default function(vue: typeof Vue, options?: {namespaced: boolean}): void;

// adds static as optional parameter to Vue component instances at creation
declare module 'vue/types/options' {
   export interface ComponentOptions<V extends Vue> {
     static?: object
   }
}

