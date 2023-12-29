import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAss4wTpeLtqjUSeiXB3oomfPsAddo_Tz8",
  authDomain: "kalavadykshetra.firebaseapp.com",
  projectId: "kalavadykshetra",
  storageBucket: "kalavadykshetra.appspot.com",
  messagingSenderId: "14262369161",
  appId: "1:14262369161:web:7f606770cc598fc740bf58"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)   