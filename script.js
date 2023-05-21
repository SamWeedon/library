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

const tableBody = document.querySelector('tbody');

function displayBookList(bookList) {
    bookList.forEach(element => {
        const row = document.createElement('tr');
        tableBody.appendChild(row);

        const tableData = document.createElement('td');
        row.appendChild(tableData);
        tableData.textContent = element.title;

        const tableData2 = document.createElement('td');
        row.appendChild(tableData2);
        tableData2.textContent = element.author;

        const tableData3 = document.createElement('td');
        row.appendChild(tableData3);
        tableData3.textContent = element.pages;

        const tableData4 = document.createElement('td');
        row.appendChild(tableData4);
        tableData4.textContent = element.iHaveRead;
    });
}

displayBookList(myLibrary);