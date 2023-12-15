const form = document.querySelector(".cont-form");
const overlay = document.querySelector(".overlay");
let cards = document.querySelector(".cards");
overlay.addEventListener("click", () => {
  closeForm();
});
const addBookBtn = document.querySelector(".btn");
addBookBtn.addEventListener("click", () => {
  library.addBookToLibrary();
});

//declare the Book class first
class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = isRead
  }
}

//declare the Library class
class Library {
  constructor() {
    this.myLibrary = []; //the array
    this.form = document.querySelector(".cont-form");
  }

  addBookToLibrary() {
    let title = document.getElementById("name").value;
    let author = document.getElementById("writter").value;
    let pages = document.getElementById("pages").value;
    let status = this.getReadValue();

    let newBook = new Book(title, author, pages, status);
    this.myLibrary.push(newBook);

    closeForm();
    display();
  }

  getReadValue() {
    const checked = this.form.querySelector(`input[name="read"]`).checked;
    return checked;
  }

  removeBook(index) {
    this.myLibrary.splice(index, 1);
    display();
  }
}

const library = new Library();

function openForm() {
  form.classList.add("active");
  overlay.classList.add("active");
}

function closeForm() {
  form.classList.remove("active");
  overlay.classList.remove("active");
}

function display() {
  //clear the cards container
  cards.innerHTML = "";

  //loop through the library and display each book
  library.myLibrary.forEach((book, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = ` "${book.title}" `;
    cardDiv.appendChild(titleParagraph);

    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = `${book.author}`;
    cardDiv.appendChild(authorParagraph);

    const pagesParagraph = document.createElement("p");
    pagesParagraph.textContent = `${book.pages} pages`;
    cardDiv.appendChild(pagesParagraph);

    const readStatusButton = document.createElement("button");
    readStatusButton.textContent = `${book.status ? 'Read' : 'Not Read'}`;
    readStatusButton.classList.add("button-status");
    cardDiv.appendChild(readStatusButton);
    readStatusButton.addEventListener("click", () => {
      if (book.status === true) {
        book.status = false;
        readStatusButton.textContent = "Not Read";
      } else {
        book.status = true;
        readStatusButton.textContent = "Read";
      }
      display(); //update the display after changing the read status
    });

    const removeBookButton = document.createElement("button");
    removeBookButton.textContent = `Remove Book`;
    removeBookButton.classList.add("button-remove");
    cardDiv.appendChild(removeBookButton);
    //for removing books
    removeBookButton.addEventListener("click", () => {
      const index = library.myLibrary.indexOf(book);
      library.removeBook(index);

      if (cards.contains(cardDiv)) {
        cards.removeChild(cardDiv);
      }
    
      display();
    });

    cards.appendChild(cardDiv);
  });
}