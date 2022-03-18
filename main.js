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
const collectionBooks = collection(db, "books")

const btnSubmit = document.getElementById('btnSubmit')
const btnSearch = document.getElementById('btnSearch')

const title = document.getElementById('title')
const author = document.getElementById('author')
const bookCode = document.getElementById('bookCode')

const searchTitle = document.getElementById('searchTitle')
const searchAuthor = document.getElementById('searchAuthor')
const searchCode = document.getElementById('searchCode')

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    
    if(title.value && author.value && bookCode.value) {
        addDoc(collectionBooks, {
        title: title.value,
        author: author.value,
        code: bookCode.value,
    })
    .then(doc => alert('Livro Cadastrado com Sucesso!!'))
    .catch(console.log())
    
     title.value = ''
     author.value = ''
     bookCode.value = ''  
    } else {
        alert('Preencha todos os campos com informações corretas.')
    }
     
    
})

btnSearch.addEventListener('click', e => {
    e.preventDefault();    
    const listBooks = document.querySelector('#info');
    listBooks.innerHTML = ''

    getDocs(collectionBooks)
    .then( querySnapshot => {
        querySnapshot.docs.forEach(doc => {
            const {title, author, code } = doc.data()   
            let html = ''

            let someTitle = title.toUpperCase() === searchTitle.value.toUpperCase();
            let someAuthor = author.toUpperCase() === searchAuthor.value.toUpperCase();
            let someCode = code.toUpperCase() === searchCode.value.toUpperCase();                          
            
            if(someTitle || someAuthor || someCode) {                
                html += `<ul>
                <li>Título: ${title}</li>
                <li>Autor: ${author}</li>
                <li>Código: ${code}</li>
                </ul>`            
            }   

            listBooks.innerHTML += html;            
        })               
        searchAuthor.value = '';
        searchCode.value = '';
        searchTitle.value = '';
    })
    .catch(console.log())  
})


