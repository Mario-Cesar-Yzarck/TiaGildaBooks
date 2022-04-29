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
const btnSearch = document.getElementById('btnSearch')
const searchTitle = document.getElementById('searchTitle')
const searchAuthor = document.getElementById('searchAuthor')


btnSearch.addEventListener('click', e => {
    e.preventDefault();    
    const listBooks = document.querySelector('#infos');
    listBooks.innerHTML = ''

    getDocs(collectionBooks)
    .then( querySnapshot => {
        querySnapshot.docs.forEach(doc => {
            const {title, author, code } = doc.data()   
            let html = ''
            
            let someTitle = title.toUpperCase() === searchTitle.value.toUpperCase();
            let someAuthor = author.toUpperCase() === searchAuthor.value.toUpperCase();                                      
            
            if(someTitle || someAuthor) {                
                html += `<ul id='about-list'>
                <li class='li-search'><i class="fas fa-check"></i>Título: ${title}</li>
                <li class='li-search'><i class="fas fa-check"></i>Autor: ${author}</li>
                <li class='li-search'><i class="fas fa-check"></i>Código: ${code}</li>
                </ul>`            
            }   

            listBooks.innerHTML += html;            
        })               
        searchAuthor.value = '';        
        searchTitle.value = '';
    })
    .catch(console.log())  
})
