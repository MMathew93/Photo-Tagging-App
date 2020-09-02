<template>
  <div class="overlay">
    <div class="form-container">
      <form @submit="submitScore">
        <h1>
          You did it! Enter your name and submit your score to the Hi-Score
          board!
        </h1>
        <p>{{ score }}</p>
        <div class="submission">
          <input
            type="text"
            name="playername"
            v-model="playername"
            maxlength="12"
            placeholder="Enter your name..."
          />
          <!--I want the time to be displayed here-->
          <input type="submit" name="submit" value="Submit" />
          <!--I want it to take them to the Hi-Score page after submission-->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.firestore();
export default {
  name: "AddScore",
  props: ["score"],
  data() {
    return {
      playername: ""
    };
  },
  methods: {
    submitScore(e) {
      e.preventDefault();
      db.collection("hiscores")
        .add({
          name: this.playername || "Anonymous",
          score: this.score
        })
        .then(function() {
          console.log("Document successfully written");
        })
        .catch(function(error) {
          console.log("Error writing document: ", error);
        });
      this.playername = "";
      console.log("create collection and submit data to firebase");
      this.$router.push("/Hi-Scores");
    }
  }
};
</script>

<style>
.overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(13, 13, 13, 0.9);
  z-index: 99;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 100;
  color: white;
}

p {
  margin: 0px;
}

form {
  display: flex;
  flex-direction: column;
}

.submission {
  display: flex;
  justify-content: center;
  height: 40px;
  margin: 15px;
}

input[type="submit"],
input[type="text"] {
  background: white;
  border: 1px solid black;
}
</style>
