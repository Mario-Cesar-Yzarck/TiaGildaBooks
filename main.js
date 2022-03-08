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
       
        //alert('Livro Cadastrado com Sucesso!!')
    }
})

btnSearch.addEventListener('click', e => {
    e.preventDefault();
    for(let elements of arrayBooks) {
        if(elements.title === searchTitle.value || elements.author === searchAuthor.value || elements.code === searchCode.value) {
            console.log('oi')
        }
    }
})