import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlPHfOFsORr7nvG6ItGdVXInHM-cF5W24",
  authDomain: "where-s-waldo-cf908.firebaseapp.com",
  databaseURL: "https://where-s-waldo-cf908.firebaseio.com",
  projectId: "where-s-waldo-cf908",
  storageBucket: "where-s-waldo-cf908.appspot.com",
  messagingSenderId: "107357266680",
  appId: "1:107357266680:web:5605b980a497175b1a110d",
  measurementId: "G-1069RY7NQF"
};

export default firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
