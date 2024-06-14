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

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

    this.info = function() {
        let hasRead = "";
        if (this.read)
            hasRead = "I have read this one.";
        else
            hasRead = "I have not read this one yet.";
        return title + " by " + author + ". It has " + pages + " pages. " + hasRead; 
    };
}

function addBookToLibrary() {
    let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked, myLibrary.length);
    myLibrary.push(book);
    let div = document.createElement('div');
    div.innerText = myLibrary[myLibrary.length - 1].info();
    bookList.append(div);
    let button = document.createElement('button');
    button.setAttribute('id', 'removeBtn');
    button.innerHTML = 'Remove Book';
    div.appendChild(button);
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