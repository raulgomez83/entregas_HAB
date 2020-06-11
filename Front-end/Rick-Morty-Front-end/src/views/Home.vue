<template>
  <div class="home">
    <img src="../assets/logorick.png" alt="logo" class="logo" />
    <label for="bySearch">Search your favourite character</label>
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Search..." />
    <p class="down">and scroll 👇👇👇👇👇</p>
    <div class="cont">
      <charCard :chars="filtereredChars"></charCard>
    </div>
  </div>
</template>

<script>
import charCard from "@/components/charCard.vue";
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    charCard
  },
  data() {
    return {
      chars: [],
      search: ""
    };
  },
  computed: {
    filtereredChars() {
      if (!this.search) {
        return this.chars;
      }
      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.id.toString().includes(this.search)
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap");
* {
  font-family: "Chelsea Market";
  margin: 0;
  padding: 0;
}
html {
  min-height: 100vh;
  background: rebeccapurple;
}

.home {
  margin: 0 auto;
  color: rebeccapurple;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.logo {
  border-radius: 0%;
  width: 15rem;
}
label {
  margin-top: 2rem;
  color: lime;
  font-weight: bolder;
}
input {
  background: rgb(0, 204, 255);
  margin: 3rem 0 3rem 0;
}
.down {
  color: lime;
  margin-bottom: 9rem;
}
</style>
