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
})

btnSearch.addEventListener('click', e => {
    e.preventDefault();
    let html = ""     
    for(let i = 0; i < arrayBooks.length; i++) {
        if(arrayBooks[i].title === searchTitle.value || arrayBooks[i].author === searchAuthor.value || arrayBooks[i].code === searchCode.value) {            
            html += `<ul><li>Título: ${arrayBooks[i].title}</li>`
            html += `<li>Autor: ${arrayBooks[i].author}</li>`
            html += `<li>Código: ${arrayBooks[i].code}</li></ul><br>`
        }
    }
    let listaBooks = document.getElementById('info')
    listaBooks.innerHTML = html
})