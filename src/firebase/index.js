import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBpvzMPFo8919zTOd-rNb7DafCSLHMbaKM",
    authDomain: "pet-booking-f919b.firebaseapp.com",
    projectId: "pet-booking-f919b",
    storageBucket: "pet-booking-f919b.appspot.com",
    messagingSenderId: "502847730556",
    appId: "1:502847730556:web:3746302c2971f3852a6af9"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);


