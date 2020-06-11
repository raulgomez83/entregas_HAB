<template>
  <div>
    <vue-headful title="Home" />
    <div class="spinning">
      <spinning></spinning>
      <spinning></spinning>
      <spinning></spinning>
      <spinning></spinning>
      <spinning></spinning>
    </div>
    <tags :tags="tags"></tags>
    <!-- Array del componente igual array de la vista -->
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
/*  Importamos los componentes */
import Swal from "sweetalert2";
import api from "@/api/index.js";
import tags from "@/components/tags.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import spinning from "@/components/spinning.vue";

export default {
  name: "Home",
  components: { spinning, tags, FooterCustom } /* componentes importados */,
  data() {
    return {
      artists: [] /* array vacio donde metemos el array de respuesta del componente */,
      tags: [] /* array vacio donde metemos el la respuesta de la Api */
    };
  },
  /* datos sacados de la API */
  created() {
    api.getTags().then(response => (this.tags = response.data.tags.tag));
  }
};
</script>
<style scoped>
.spinning {
  display: flex;
  flex-direction: row;
}
</style>
