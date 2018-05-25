const config = {
  apiKey: "AIzaSyAlVlcnwcJWQUtvHf4X1aLF97MPPABPcvA",
  authDomain: "happy-hops.firebaseapp.com",
  databaseURL: "https://happy-hops.firebaseio.com",
  projectId: "happy-hops",
  storageBucket: "happy-hops.appspot.com",
  messagingSenderId: "655467803768"
};

const fire = firebase.initializeApp(config);
export default fire;