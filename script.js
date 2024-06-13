const textBox = document.getElementById('textBox');
const bookList = document.getElementById('bookList');
const newBookBtn = document.getElementById('newBook');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

// submitBtn.addEventListener("click", (e) => {
//     let book = new Book(title, author, pages, read);
//     myLibrary.push(book);
//     e.preventDefault();
//     dialog.close;
// });

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

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
    //myLibrary.push(textBox.value);
    //textBox.value = null;
    let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(book);
    let div = document.createElement('div');
    div.innerText = myLibrary[myLibrary.length - 1].info();
    bookList.append(div);
    //displayBooks();
    return false;
}

// function displayBooks() {
//     bookList.innerHTML = '';

//     for (let i = 0; i < myLibrary.length; i++) {
//         let div = document.createElement('div');
//         div.innerText = myLibrary[i];
//         bookList.append(div);
//     }
// }