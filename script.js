const textBox = document.getElementById('textBox');

const myLibrary = [];

function Book() {
    //The constructor

}

function addBookToLibrary() {
    myLibrary.push(textBox.value);
    textBox.value = null;
    console.log(myLibrary);
    return false;
}