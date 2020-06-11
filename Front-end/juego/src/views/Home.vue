<template>
  <div>
    <img class="img" src="../assets/home.jpg" alt="foto entrada del juego" />

    <p>{{ speak }}</p>
    <button @click="changeDialog()" v-show="this.dialogs[this.dialog].game">Continue</button>
    <button v-show="!this.dialogs[this.dialog].game">
      <router-link class="link" :to="{ name: 'Choose' }">Select your enemy</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dialog: 0,
      dialogs: [
        { text: "Welcome to the jungle 🕸", dialog: 0, game: true },
        { text: "You are far far away 🕷", dialog: 1, game: true },
        { text: "Are you ready? 🙈", dialog: 2, game: false }
      ]
    };
  },
  computed: {
    speak() {
      return this.dialogs[this.dialog].text;
    }
  },
  methods: {
    changeDialog() {
      this.dialog++;
    }
  }
};
</script>
<style  scoped>
button {
  background: black;
  text-decoration: none;
  color: gold;
}
.link {
  color: gold;
  text-decoration: none;
}
.img {
  width: 15rem;
}
</style>
