<template>
  <div>
    <vue-headful title="TopTracks" />
    <tracks :tracks="tracks"></tracks>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import tracks from "@/components/tracks.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "Toptracks",
  components: { tracks, FooterCustom },
  data() {
    return {
      tracks: []
    };
  },
  created() {
    api
      .getTopTracks()
      .then(response => (this.tracks = response.data.tracks.track));
  }
};
</script>

<style>
</style>