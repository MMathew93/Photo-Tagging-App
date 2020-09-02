<template>
  <div class="main">
    <div class="header">
      <div>
        <router-link to="/" tag="button">
          Back to Main Page
        </router-link>
      </div>
    </div>
    <div class="title">
      <h1>HI-SCORES</h1>
      <div id="line"></div>
    </div>
    <div id="playerContainer">
      <ol>
        <li class="hiscores" v-for="score in scores" :key="score[0]">
          <div class="playerdata">
            <div class="playername">{{ score[0] }}</div>
            <div class="playerscore">{{ score[1] }}</div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.firestore();
export default {
  data() {
    return {
      scores: []
    };
  },
  mounted: function() {
    let hiScores = db
      .collection("hiscores")
      .orderBy("score")
      .limit(10);
    hiScores.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let data = [doc.data().name, doc.data().score];
        this.scores.push(data);
      });
    });
  }
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: end;
}

.title {
  display: flex;
  flex-direction: column;
}

#line {
  height: 5px;
  background: black;
}

#playerContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ol {
  font-size: 40px;
  width: 20%;
}

.hiscores {
  margin-top: 25px;
}

.playerdata {
  display: flex;
  justify-content: space-between;
}

.playername {
  font-size: 40px;
}
.playerscore {
  font-size: 40px;
}
</style>
