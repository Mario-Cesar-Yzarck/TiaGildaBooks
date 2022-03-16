import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";


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



getDocs(collection(db, "books"))
    .then( querySnapshot => {
        
        const book = querySnapshot.docs.reduce((acc, doc) => {
            const { title, author, code } = doc.data()
            console.log(title)
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

