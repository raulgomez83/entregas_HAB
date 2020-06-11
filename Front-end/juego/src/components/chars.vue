<template>
  <div id="chars">
    <ul>
      <li id="balrog" @click="balrogEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/Balrog.jpg" alt="Balrog" />Balrog
        </router-link>
      </li>
      <li id="bison" @click="bisonEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/bison.jpeg" alt="Bison" />Bison
        </router-link>
      </li>
      <li id="blanka" @click="blankaEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/blanka.jpeg" alt="Blanka" />Blanka
        </router-link>
      </li>
      <li id="chunli" @click="chunliEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/chun-li.jpeg" alt="Chun Li" />Chun Li
        </router-link>
      </li>
      <li id="dhalsin" @click="dhalsimEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/Dhalsim.jpg" alt="Dhalsim" />Dhalsim
        </router-link>
      </li>
      <li id="guile" @click="guileEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/guile.jpeg" alt="Guile" />Guile
        </router-link>
      </li>
      <li id="honda" @click="hondaEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/honda.jpeg" alt="Honda" />Honda
        </router-link>
      </li>
      <li id="ken" @click="kenEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/ken.jpeg" alt="Ken" />Ken
        </router-link>
      </li>
      <li id="ryu" @click="ryuEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/ryu.jpeg" alt="Ryu" />Ryu
        </router-link>
      </li>
      <li id="sagat" @click="sagatEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/Sagat.jpg" alt="Sagat" />Sagat
        </router-link>
      </li>
      <li id="vega" @click="vegaEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/Vega.jpg" alt="Vega" />Vega
        </router-link>
      </li>
      <li id="Zangief" @click="zangiefEvent">
        <router-link class="link" :to="{ name: 'Game' }">
          <img src="../assets/Zangief.jpg" alt="Zangief" />Zangief
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "characters",
  methods: {
    balrogEvent() {
      this.$emit("balrog");
    },
    bisonEvent() {
      this.$emit("bison");
    },
    blankaEvent() {
      this.$emit("blanka");
    },
    chunliEvent() {
      this.$emit("chunli");
    },
    dhalsimEvent() {
      this.$emit("dhalsim");
    },
    guileEvent() {
      this.$emit("guile");
    },
    hondaEvent() {
      this.$emit("honda");
    },
    kenEvent() {
      this.$emit("ken");
    },
    ryuEvent() {
      this.$emit("ryu");
    },
    sagatEvent() {
      this.$emit("sagat");
    },
    vegaEvent() {
      this.$emit("vega");
    },
    zangiefEvent() {
      this.$emit("zangief");
    }
  }
};
</script>

<style>
img {
  padding: 1rem;
  width: 6rem;
  height: 5rem;
}
ul {
  list-style: none;
  display: grid;
  gap: 0.3rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 1rem;
}
</style>