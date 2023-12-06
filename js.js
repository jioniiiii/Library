const form = document.querySelector(".cont-form")
const overlay = document.querySelector(".overlay");
let cards = document.querySelector(".cards")
overlay.addEventListener("click", () => {closeForm();})

//array to keep all of the books

const myLibrary = [
    {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: false
  }
];

//constructor

function Book(name, writer, pages, status) {
    this.name = name;
    this.writer = writer;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return this.name + " by " + this.writer + ", " + this.pages + " pages, " + this.status;
    };
}

//adds book to library

function addBookToLibrary() {
    let title = document.getElementById("name").value;
    let author = document.getElementById("writter").value;
    let pages = document.getElementById("pages").value;
    let status = getReadValue();

    let newBook = new Book(title,author,pages,status);
    myLibrary.push(newBook);

    closeForm();
    display();
}   

//function to check f book is read or not

const getReadValue = () => {
    if(form.querySelector('input[name="read"]:checked').value == 'yes') return true;
    else return false;
}

//fuctions for opening and closing the form

function openForm() {
    form.classList.add("active");
    overlay.classList.add("active");
}
  
function closeForm() {
    form.classList.remove("active");
    overlay.classList.remove("active");
}

//for displaying on cards

function display(){
    for(let i = 0; i<myLibrary.length; i++){
        const book = myLibrary[];
        
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const titleParagraph = document.createElement("p");
        titleParagraph.textContent = `Title: ${Book.title}`;
        cardDiv.appendChild(titleParagraph);

        const authorParagraph = document.createElement("p");
        authorParagraph.textContent = `Author: ${Book.author}`;
        cardDiv.appendChild(authorParagraph);

        const pagesParagraph = document.createElement("p");
        pagesParagraph.textContent = `Pages: ${Book.pages}`;
        cardDiv.appendChild(pagesParagraph);

        const readStatusParagraph = document.createElement("p");
        readStatusParagraph.textContent = `Status: ${Book.read ? 'Read' : 'Not Read'}`;
        cardDiv.appendChild(readStatusParagraph);

        cards.appendChild(cardDiv);
    }
}