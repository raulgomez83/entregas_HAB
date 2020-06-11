<template>
  <div>
    <div class="options">
      <button @click="attackEvent">HADOUKEN 💥</button>
      <button @click="specialEvent">SHOURYUKEN {{ counterSpecial }}🌪</button>
      <button @click="healEvent">HEAL {{ counterHeal }}🍜</button>
      <button @click="giveUpEvent">GIVE UP</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "buttons",
  props: { counterHeal: Number, counterSpecial: Number },
  methods: {
    attackEvent() {
      this.$emit("attack");
    },
    healEvent() {
      this.$emit("heal");
    },
    specialEvent() {
      this.$emit("special");
    },
    giveUpEvent() {
      this.$emit("giveUp");
    }
  }
};
</script>
<style scoped>
.options {
  width: 30vw;
  padding: 1rem;
  margin: auto;
  margin-top: rem;
  background-color: rgba(255, 255, 255, 0);
}
.options button {
  border: none;
  background-color: rgba(233, 14, 14, 0.2);
  padding: 1rem;
  margin: 0.4rem;
  color: gold;
}
</style>
