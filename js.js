let form = document.querySelector(".form-popup")

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
    const title = document.getElementById("name").value;
    const author = document.getElementById("writter").value;
    const pages = document.getElementById("pages").value;
    const status = getReadValue();

    const newBook = new Book(title,author,pages,status);
    myLibrary.push(newBook);
    closeForm();
}   

//function to check f book is read or not

const getReadValue = () => {
    if(form.querySelector('input[name="read"]:checked').value == 'yes') return true;
    else return false;
}

//fuctions for opening and closing the form

function openForm() {
   form.style.display = "block";
}
  
function closeForm() {
    form.style.display = "none";
}

