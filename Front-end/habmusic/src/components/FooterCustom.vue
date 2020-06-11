<template>
  <div>
    <p>{{ copyright }}</p>
  </div>
</template>

<script>
export default {
  name: "footercustom",
  data() {
    return {
      copyright: "Myself, 2020",
    };
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
  font-style: italic;
  margin-top: 2rem;
}
</style>
