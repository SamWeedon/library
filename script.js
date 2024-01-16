let myLibrary = [];

class Book {
  constructor(title, author, pages, iHaveRead) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._iHaveRead = iHaveRead;
  }
  info() {
    if (iHaveRead) {
      return `${this._title} by ${this._author}, ${this._pages} pages, read`;
    } else {
      return `${this._title} by ${this._author}, ${this._pages} pages, not read yet`;
    }
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  get readStatus() {
    return this._iHaveRead ? "Yes" : "No";
  }
  toggleReadStatus() {
    this._iHaveRead = !this._iHaveRead;
  }
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

function displayBookList(bookList) {
  while (tableHead.hasChildNodes()) {
    tableHead.removeChild(tableHead.firstChild);
  }

  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }

  const headerRow = document.createElement("tr");
  tableHead.appendChild(headerRow);

  const title = document.createElement("th");
  headerRow.appendChild(title);
  title.textContent = "Title";

  const author = document.createElement("th");
  headerRow.appendChild(author);
  author.textContent = "Author";

  const pages = document.createElement("th");
  headerRow.appendChild(pages);
  pages.textContent = "Pages";

  const completed = document.createElement("th");
  headerRow.appendChild(completed);
  completed.textContent = "Completed";

  let myLibraryIndex = 0;
  bookList.forEach((element) => {
    const row = document.createElement("tr");
    tableBody.appendChild(row);

    const tableData = document.createElement("td");
    row.appendChild(tableData);
    tableData.textContent = element.title;

    const tableData2 = document.createElement("td");
    row.appendChild(tableData2);
    tableData2.textContent = element.author;

    const tableData3 = document.createElement("td");
    row.appendChild(tableData3);
    tableData3.textContent = element.pages;

    const tableData4 = document.createElement("td");
    row.appendChild(tableData4);
    tableData4.textContent = element.readStatus;

    const removeButton = document.createElement("button");
    removeButton.dataset.index = myLibraryIndex;
    removeButton.textContent = "Remove";
    row.appendChild(removeButton);

    removeButton.addEventListener("click", (event) => {
      myLibrary.splice(removeButton.dataset.index, 1);
      displayBookList(myLibrary);
    });

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read Status";
    row.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
      element.toggleReadStatus();
      displayBookList(myLibrary);
    });
    myLibraryIndex++;
  });
}

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readStatusInput = document.querySelector("#read-status");
const submitButton = document.querySelector(".submit-button");

const inputs = [titleInput, authorInput, pagesInput, readStatusInput];

const isInvalid = function (inputElement) {
  if (!inputElement.checkValidity()) {
    return true;
  } else {
    return false;
  }
};

const printErrors = function () {
  inputs.forEach((input) => {
    printError(input);
  });
};

const printError = function (inputElement) {
  inputElement.nextSibling.remove();
  const errorSpan = document.createElement("span");
  errorSpan.textContent = inputElement.validationMessage;
  inputElement.insertAdjacentElement("afterend", errorSpan);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => printError(e.target));
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    isInvalid(pagesInput) ||
    isInvalid(titleInput) ||
    isInvalid(authorInput)
  ) {
    printErrors();
  } else {
    printErrors();

    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readStatusInput.checked
    );
    addBookToLibrary(newBook);
    displayBookList(myLibrary);
  }
});
