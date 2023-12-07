const form = document.querySelector(".cont-form")
const overlay = document.querySelector(".overlay");
let cards = document.querySelector(".cards")
overlay.addEventListener("click", () => {closeForm();})

//array to keep all of the books

const myLibrary = [];

//constructor

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.status;
    };
}

//adds book to library

function addBookToLibrary() {
    let title = document.getElementById("name").value;
    let author = document.getElementById("writter").value;
    let pages = document.getElementById("pages").value;
    let status = getReadValue();

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);

    closeForm();
    display(myLibrary.length - 1);
}    

//function to check f book is read or not

const getReadValue = () => {
    const checked = form.querySelector(`input[name="read"]`).checked;
    return checked;
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

function display(index){
 
        const book = myLibrary[index];
        
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
        readStatusButton.classList.add("button-status")
        cardDiv.appendChild(readStatusButton);
        readStatusButton.addEventListener("click", () => {
            if(book.status === true){
                book.status = false;
                readStatusButton.textContent = "Not Read";
            } 
            else{
                book.status = true;
                readStatusButton.textContent = "Read";
            }
        });

        const removeBookButton = document.createElement("button");
        removeBookButton.textContent = `Remove Book`
        removeBookButton.classList.add("button-remove")
        cardDiv.appendChild(removeBookButton);
        //for removing books
        removeBookButton.addEventListener("click", () => {

            const index = myLibrary.indexOf(book);

            myLibrary.splice(index, 1);

            cards.removeChild(cardDiv);

            display();
        });

        cards.appendChild(cardDiv);
         
}