let myLibrary = [];

function Book(title, author, pages, iHaveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.iHaveRead = iHaveRead
    this.info = function() {
        if (iHaveRead) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`
        }
        else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
        }
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
const cosmos = new Book('Cosmos', 'Carl Sagan', 432, false);

console.log(theHobbit.info());
console.log(cosmos.info());

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

addBookToLibrary(theHobbit);
addBookToLibrary(cosmos);

console.log(myLibrary);