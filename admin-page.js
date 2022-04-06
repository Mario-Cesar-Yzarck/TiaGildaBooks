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

let ableToRegisterBooks = false

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const collectionBooks = collection(db, "books")
const collectionUsers = collection(db, "users")

const btnSubmit = document.getElementById('btnSubmit')

const title = document.getElementById('title')
const author = document.getElementById('author')
const bookCode = document.getElementById('bookCode')

const nicknameField = document.getElementById('nickname');
const passwordField = document.getElementById('password');
const btnLogin = document.getElementById('login-btn');

btnSubmit.addEventListener('click', e => {
    e.preventDefault(); 
    if(ableToRegisterBooks == false) {
        alert('Faça login de administrador para registrar novos livros.')              
    } else {
        if(title.value && author.value && bookCode.value) {
            addDoc(collectionBooks, {
            title: title.value,
            author: author.value,
            code: bookCode.value,
        })
        .then(doc => alert('Livro Cadastrado com Sucesso!!'))
        .catch(console.log())    
        } else {
            alert('Preencha todos os campos com informações corretas.')
        }
        title.value = ''
        author.value = ''
        bookCode.value = '' 
    }  
})



btnLogin.addEventListener('click', e => { 
    e.preventDefault()   
    getDocs(collectionUsers)
    .then( querySnapshot => {
        querySnapshot.docs.forEach(doc => {
            const {nickname, password} = doc.data()

            if(nicknameField.value == nickname) {               
                if(passwordField.value == password) {
                    alert('Login realizado com sucesso.')
                    ableToRegisterBooks = true;
                }
            }
        })
        nicknameField.value = '';
        passwordField.value = '';
    })  
    .catch(console.log())      
})