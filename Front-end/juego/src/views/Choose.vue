<template>
  <div>
    <h1>Select your Enemy</h1>
    <characters v-on:balrog="fixCharacterBalrog()"></characters>
  </div>
</template>

<script>
import characters from "@/components/chars.vue";
import lifebar from "@/components/bars.vue";
export default {
  name: "Choose",
  components: { characters, lifebar },
  data() {
    return { enemy: { img: "", name: "" }, see: true };
  },
  methods: {}
};
</script>

<style>
</style>