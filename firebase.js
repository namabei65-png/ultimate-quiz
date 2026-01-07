<script type="module">

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const app = initializeApp({
  apiKey: "AIzaSyBO9-mZ8L7G6gehMLVk3AzecCy94OuVamY",
  authDomain: "ultimate-quiz-e42ee.firebaseapp.com",
  databaseURL: "https://ultimate-quiz-e42ee-default-rtdb.firebaseio.com",
  projectId: "ultimate-quiz-e42ee"
});

export const db = getDatabase(app);
</script>


</script>
