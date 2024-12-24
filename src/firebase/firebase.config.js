// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8TrVDYNl2JuKDPV9KUfJFHQ-9fT2x00w",
  authDomain: "final-exam-10-client.firebaseapp.com",
  projectId: "final-exam-10-client",
  storageBucket: "final-exam-10-client.firebasestorage.app",
  messagingSenderId: "851396722426",
  appId: "1:851396722426:web:5e152ef8a25afbfa315343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;