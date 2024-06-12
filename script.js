const textBox = document.getElementById('textBox');
const bookList = document.getElementById('bookList');

const myLibrary = [];

function Book() {
    //The constructor

}

function addBookToLibrary() {
    myLibrary.push(textBox.value);
    textBox.value = null;
    let div = document.createElement('div');
    div.innerText = myLibrary[myLibrary.length - 1];
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