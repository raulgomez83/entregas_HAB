<template>
  <div>
    <vue-headful title="TopArtists" />
    <label for="bySearch">Search your favourite artist</label>
    <br />
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Search..." />
    <artists :artists="filteredArtists"></artists>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import artists from "@/components/artists.vue";
import FooterCustom from "@/components/FooterCustom.vue";
export default {
  name: "Topartist",
  components: {
    artists,
    FooterCustom
  },
  data() {
    return {
      artists: [],
      search: "",
      artist: []
    };
  },
  computed: {
    /* función de búsqueda y filtrado */
    filteredArtists() {
      if (!this.search) {
        return this.artists.sort((a, b /* ordena por número de oyentes */) =>
          a.listeners < b.listeners ? 1 : -1
        );
      } else {
        return this.artists.filter(artist =>
          artist.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
  },
  created() {
    api;
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>

<style>
label {
  color: lime;
}
input {
  background: purple;
  color: gold;
  margin: 1rem;
}
</style>