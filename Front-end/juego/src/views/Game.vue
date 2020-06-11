<template>
  <div id="game">
    <lifebar class="bar" :playerHp="playerHp" :enemyHp="enemyHp"></lifebar>
    <buttons
      class="button"
      v-on:attack="attack()"
      v-on:heal="heal()"
      v-on:special="special()"
      v-on:giveUp="giveUp()"
      :counterHeal="counterHeal"
      :counterSpecial="counterSpecial"
    ></buttons>
    <div class="room">
      <logs :logs="logs"></logs>
    </div>
    <audio class="song" src="../assets/song.ogg" autoplay controls></audio>
    <audio id="attack" src="../assets/hadouken.ogg" autoplay></audio>
    <audio id="special" src="../assets/shouryuuken.ogg"></audio>
    <audio id="win" src="../assets/win.ogg"></audio>
    <audio id="lose" src="../assets/lose.ogg"></audio>
  </div>
</template>
<script>
import lifebar from "@/components/bars.vue";
import buttons from "@/components/commands.vue";
import logs from "@/components/log.vue";
import Swal from "sweetalert2";

export default {
  name: "Game",
  data() {
    return {
      playerHp: 100,
      enemyHp: 100,
      counterHeal: 1,
      counterSpecial: 1,
      logs: []
    };
  },
  components: { lifebar, buttons, logs },

  methods: {
    attack() {
      this.audioAttack();
      let damage = this.calculateDamage(1, 10);
      this.enemyHp -= damage;
      this.enemyAttack();
      this.logs.unshift({
        text:
          "Hadouken!!!  " +
          "Your enemy received damage of " +
          damage +
          " points"
      });
      this.checkWinner();
    },
    checkWinner() {
      if (this.playerHp <= 0) {
        this.audioLose();
        Swal.fire({
          title: "Loser",
          text: "Shame,shame,shame...",
          confirmButtonText: "🔔"
        });

        this.giveUp();
      }
      if (this.enemyHp <= 0) {
        this.audioWin();
        Swal.fire({
          title: "You win",
          text: "You are lucky today",
          confirmButtonText: "🍀"
        });
        this.giveUp();
      }
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    enemyAttack() {
      let damage = this.calculateDamage(3, 12);
      this.playerHp -= damage;
      this.logs.unshift({
        text: "You received a " + damage + " points of damage from your enemy"
      });
    },
    heal() {
      if (this.counterHeal > 0) {
        let heal = this.calculateDamage(13, 20);
        this.playerHp += heal;
        this.counterHeal--;
        this.enemyAttack();
      } else {
        alert("Sorry, no more heal");
      }
    },
    special() {
      if (this.counterSpecial > 0) {
        this.audioSpecial();
        let damage = this.calculateDamage(10, 25);
        this.enemyHp -= damage;
        this.counterSpecial--;
        this.enemyAttack();
        this.checkWinner();
        this.logs.unshift({ text: "Shouryuken!!!" + damage });
      } else {
        alert("You are so tired");
      }
    },
    giveUp() {
      this.playerHp = 100;
      this.enemyHp = 100;
      this.counterHeal = 1;
      this.counterSpecial = 1;
      this.logs = [];
    },
    goHome() {
      this.$router.push("/");
    },
    audioAttack() {
      let soundAttack = document.querySelector("#attack");
      soundAttack.play();
    },
    audioSpecial() {
      let soundSpecial = document.querySelector("#special");
      soundSpecial.play();
    },
    audioWin() {
      let soundWin = document.querySelector("#win");
      soundWin.play();
    },
    audioLose() {
      let soundLose = document.querySelector("#lose");
      soundLose.play();
    }
  }
};
</script>
<style scoped>
#game {
  margin: 2rem auto;
  max-width: 50vw;
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "bar button"
    "bar room";
  background-image: url(../assets/fondo.jpeg);
  background-repeat: round;
  background-size: cover;
}
.bar {
  padding: 3rem 1rem;
  background-color: rgba(255, 255, 255, 0);
  grid-area: bar;
}
.button {
  background-color: rgba(255, 255, 255, 0);
  grid-area: button;
}
.room {
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  height: 8rem;
  width: 25rem;
  overflow-y: scroll;
  grid-area: room;
  margin-left: 5rem;
}
.song {
  width: 8rem;
  opacity: 0.2;
}
</style>
