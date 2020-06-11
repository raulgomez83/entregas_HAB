<template>
  <div class="about">
    <vue-headful title="About" />
    <h2>
      Hello,this super-project was created by me using
      <a
        href="https://www.last.fm/api/?lang=es"
      >Last FM API</a> and
      <a href="https://www.npmjs.com/package/axios">AXIOS</a> library. 👇
    </h2>
    <img src="../assets/fotomia.jpg" alt="mi foto" />
    <h3>
      If you want more recent information push
      <a
        href="https://linkedin.com/in/raúl-gómez-romero-1bb4a753"
      >here.</a>
    </h3>
    <FooterCustom></FooterCustom>
  </div>
</template>
<script>
import FooterCustom from "@/components/FooterCustom.vue";
export default {
  name: "About",
  components: { FooterCustom }
};
</script>
<style>
.about {
  color: rgb(60, 0, 119);
}
img {
  width: 6rem;
  margin: 2rem;
}
a {
  color: lime;
}
</style>
