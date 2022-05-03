import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyBO6Te1V2jm-JU5NZ8V4af4pkZkuq36m4I",
    authDomain: "node-demo-a4591.firebaseapp.com",
    projectId: "node-demo-a4591",
    storageBucket: "node-demo-a4591.appspot.com",
    messagingSenderId: "546704669469",
    appId: "1:546704669469:web:0cdee922a8098097567ff4",
    measurementId: "G-VQ6SJJJKVZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const collectionUsers = collection(db, "users")
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const btnRegister = document.getElementById('btnRegister');
const nicknameHtml = document.getElementById('nickname');
const password = document.getElementById('password');
const email = document.getElementById('email')

signInWithPopup(auth, provider)
    .then(console.log)
    .catch(error => console.log('error:', error))

const login = async () => {   
    try {
        const result = await signInWithPopup(auth, provider)
        console.log(result)       
    } catch (error) {
        console.log('error:', error)
    }
}

btnRegister.addEventListener('click', login)
