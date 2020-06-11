<template>
  <div class="container">
    <div class="card" v-for="char in chars" :key="char.id">
      <h2>{{char.name}}</h2>
      <p>{{char.species}}</p>
      <p>{{char.gender}}</p>
      <p
        :class="{ green: char.status ==='Alive', red: char.status==='Dead',yellow:char.status==='unknown'}"
      >{{char.status}}</p>
      <p>{{char.origin.name}}</p>
      <img :src="char.image" alt="Rick And Morty images" />
      <p>Id:{{char.id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "charCard",
  props: {
    chars: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red;
}
.yellow {
  color: gold;
}
.green {
  color: green;
}
.card {
  padding: 0.5rem;
  background: linear-gradient(to bottom, lime, rgb(0, 204, 255));
  margin: 0.5rem;
  width: 12rem;
  border: 0.01rem solid rebeccapurple;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  margin-top: 0.5rem;
  border-radius: 50%;
  width: 8rem;
}
</style>
