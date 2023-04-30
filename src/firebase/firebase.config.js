// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiQXRwSLoWXr7fJrNNNOpLina8z6ykfgA",
  authDomain: "the-news-dragon-88154.firebaseapp.com",
  projectId: "the-news-dragon-88154",
  storageBucket: "the-news-dragon-88154.appspot.com",
  messagingSenderId: "354833204902",
  appId: "1:354833204902:web:18135505f535ff63395667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app