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
let arrayBooks = []



btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    
    addDoc(collectionBooks, {
        title: title.value,
        author: author.value,
        code: bookCode.value,
    })
    .then(doc => console.log('Doc com ID:', doc.id))
    .catch(console.log())
    
    /*
    let objBook = {
        title: "",
        author: "",
        code: ""
    }
    if(title.value && author.value && bookCode.value) {
        objBook.title = title.value;
        objBook.author = author.value;
        objBook.code = bookCode.value
        arrayBooks.push(objBook)
       
        alert('Livro Cadastrado com Sucesso!!')
    }
    title.value = "";
    author.value = "";
    bookCode.value = "";
*/
})

btnSearch.addEventListener('click', e => {
    e.preventDefault();

    getDocs(collectionBooks)
    .then( querySnapshot => {
        
        const book = querySnapshot.docs.reduce((acc, doc) => {
            const { title, author, code } = doc.data()
           
            acc += `<ul>
            <li>Título: ${title}</li>
            <li>Autor: ${author}</li>
            <li>Código: ${code}</li></ul>`

            return acc;
        }, '')
        
        const listBooks = document.querySelector('#info');
        listBooks.innerHTML = book;
    })
    .catch(console.log()
    )
/*
    let html = ""     
    for(let i = 0; i < arrayBooks.length; i++) {
        if(arrayBooks[i].title === searchTitle.value || arrayBooks[i].author === searchAuthor.value || arrayBooks[i].code === searchCode.value) {            
            html += `<ul><li>Título: ${arrayBooks[i].title}</li>`
            html += `<li>Autor: ${arrayBooks[i].author}</li>`
            html += `<li>Código: ${arrayBooks[i].code}</li></ul><br>`
        } else {
            alert('Informações não encontradas.')
        }
    }
    let listaBooks = document.getElementById('info')
    listaBooks.innerHTML = html
    searchTitle.value = "";
    searchAuthor.value = "";
    searchCode.value = "";
    */
})


