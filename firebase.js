<script type="module">

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO9-mZ8L7G6gehMLVk3AzecCy94OuVamY",
  authDomain: "ultimate-quiz-e42ee.firebaseapp.com",
  databaseURL: "https://ultimate-quiz-e42ee-default-rtdb.firebaseio.com",
  projectId: "ultimate-quiz-e42ee",
  storageBucket: "ultimate-quiz-e42ee.firebasestorage.app",
  messagingSenderId: "252962417614",
  appId: "1:252962417614:web:37649ddf0ad1e2e997599f",
  measurementId: "G-0BL3MXZWTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

</script>
