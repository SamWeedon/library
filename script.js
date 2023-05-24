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
    this.getTitle = function() {
        return this.title;
    }
    this.getAuthor = function() {
        return this.author;
    }
    this.getPages = function() {
        return this.pages;
    }
    this.getReadStatus = function() {
        return this.iHaveRead;
    }
}

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

const tableBody = document.querySelector('tbody');

function displayBookList(bookList) {

    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    
    let myLibraryIndex = 0;
    bookList.forEach(element => {
        const row = document.createElement('tr');
        tableBody.appendChild(row);

        const tableData = document.createElement('td');
        row.appendChild(tableData);
        tableData.textContent = element.getTitle();

        const tableData2 = document.createElement('td');
        row.appendChild(tableData2);
        tableData2.textContent = element.getAuthor();

        const tableData3 = document.createElement('td');
        row.appendChild(tableData3);
        tableData3.textContent = element.getPages();

        const tableData4 = document.createElement('td');
        row.appendChild(tableData4);
        tableData4.textContent = element.getReadStatus();

        const removeButton = document.createElement('button');
        removeButton.dataset.index = myLibraryIndex;
        myLibraryIndex++;
        removeButton.textContent = 'Remove';
        row.appendChild(removeButton);

        removeButton.addEventListener('click', (event) => {
            myLibrary.splice(removeButton.dataset.index, 1);
            displayBookList(myLibrary);
        })
    });
}

const titleInput = document.querySelector('#title');
const authorInput= document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readStatusInput = document.querySelector('#read-status');
const submitButton = document.querySelector('.submit-button')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatusInput.value);
    addBookToLibrary(newBook);
    displayBookList(myLibrary);
})