const bookList = document.getElementById('bookList');
const newBookBtn = document.getElementById('newBook');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancelBtn');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

cancelBtn.addEventListener("click", () => {
    clearInput();
})

const myLibrary = [];
let lastIndex = 0;

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index

    this.info = function() {
        let hasRead = "";
        if (this.read)
            hasRead = "Read";
        else
            hasRead = "Not read";
        return title + " by " + author + ". It has " + pages + " pages. " + hasRead; 
    };
}

function addBookToLibrary() {
    let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked, lastIndex++);
    myLibrary.push(book);
    let div = document.createElement('div');
    div.setAttribute('id', book.index);
    let text = document.createElement('p');
    text.innerHTML = book.info();
    div.appendChild(text);
    bookList.append(div);
    let readBtn = document.createElement('button');
    readBtn.setAttribute('id', 'read');
    readBtn.innerHTML = 'Has Read?';
    div.appendChild(readBtn);
    readBtn.addEventListener("click", () => {
        book.read = !book.read;
        text.innerHTML = book.info();
    })
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', 'removeBtn');
    removeBtn.innerHTML = 'Remove Book';
    div.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => {
        document.getElementById(removeBtn.parentNode.id).remove();
        myLibrary.splice(removeBtn.parentNode.id, removeBtn.parentNode.id);
    })
    clearInput();
    return false;
}

function clearInput() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    dialog.close();
}