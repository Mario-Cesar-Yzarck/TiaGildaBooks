import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";


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

const btnRegister = document.getElementById('btnRegister');
const nicknameHtml = document.getElementById('nickname');
const password = document.getElementById('password');
const email = document.getElementById('email')

btnRegister.addEventListener('click', e => {
    e.preventDefault();
    
    if(nicknameHtml.value && password.value) {
        addDoc(collectionUsers, {
            nickname: nicknameHtml.value,
            password: password.value,
        })          
        .then(doc => {
            alert('Usuário cadastrado com sucesso!')
            nicknameHtml.value = ''
            password.value = ''
            email.value = ''
            return                         
        })
        .catch(console.log())
    } else {
        alert('Preencha corretamente os campos de Apelido e Senha.')
    }
    
})
