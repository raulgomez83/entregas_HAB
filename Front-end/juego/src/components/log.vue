<template>
  <div>
    <p v-for="log in logs" :key="log.id">{{ log.text }}</p>
  </div>
</template>

<script>
export default {
  name: "logs",
  props: {
    logs: Array
  }
};
</script>

<style scoped>
div {
  background-color: rgba(255, 255, 255, 0);
}
</stylec>
