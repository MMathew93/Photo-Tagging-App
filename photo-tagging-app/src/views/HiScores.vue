<template>
  <div class="container">
    <div class="column">
      <div class="header">
        <div>
          <router-link class="is-primary" to="/" tag="b-button">
            Back to Main Page
          </router-link>
        </div>
      </div>
      <div class="content centerFlex waldo">
        <div class="title">
          <h1>HI-SCORES</h1>
          <div id="line"></div>
        </div>
        <div class="container fixed">
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
.container {
  max-width: none;
  margin: none;
}

.header {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
}

.column {
  min-width: 800px;
}

.title {
  display: flex;
  flex-direction: column;
}

#line {
  height: 5px;
  background: black;
}

.centerFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: #f2dfd7;
}

.waldo {
  border: 50px solid;
  border-image: repeating-linear-gradient(
      45deg,
      #f00,
      #f00 40px,
      #fff 10px,
      #fff 80px
    )
    50 round;
}

.fixed {
  min-width: 700px;
  font-size: 40px;
}

.hiscores {
  margin-top: 25px;
}

.playerdata {
  display: flex;
  justify-content: space-between;
}
</style>
