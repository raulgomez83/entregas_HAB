<template>
  <div>
    <div class="hpbars">
      <img src="../assets/ryu.jpeg" alt="ryu" />
      <p class="name">Player</p>
      <div class="red">
        <div class="bar" :style="{ width: playerHp + '%' }"></div>
      </div>
      <img src="../assets/Sagat.jpg" alt="Enemy Character" />
      <p class="name">Enemy</p>
      <div class="red">
        <div class="bar" :style="{ width: enemyHp + '%' }"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lifebar",
  props: {
    playerHp: Number,
    enemyHp: Number,
    enemy: Object
  }
};
</script>
<style scoped>
img {
  width: 5rem;
}
.hpbars {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0);
  max-height: 20vh;
}
.red {
  background: red;
}
.bar {
  background: yellow;
  height: 2rem;
}
.name {
  width: 10rem;
}
</style>
