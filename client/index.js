function Book(id, title, author, pages, description, shelfNum, genre, read, deleted){
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.shelfNum = shelfNum;
  this.genre = genre;
  this.read = "Not Read";
  this.deleted = false;
}

function createTable(array){
  const thead = document.getElementById("list-header");
  // creates a general book object to generate header names
  const headerBook = new Book();
  let row = document.createElement("tr");
  const headerArray = Object.keys(headerBook);
  let header = document.createElement("th");
  
  // List Header names onto the table
  for(let i=0; i< headerArray.length; i++){
    if (headerArray[i] == 'deleted' || headerArray[i] == 'read' ){
      header = document.createElement("th");
    }else{
      header = document.createElement("th");
      const headerText = document.createTextNode(headerArray[i]);
      header.appendChild(headerText);
    }

    row.appendChild(header);
  }
  thead.appendChild(row);
  
  for (let j = 0; j < array.length; j++){
    //lists out each book in the library array
    listBook(array[j]);
  }
}

function listBook(book){
  const bookArray = Object.values(book);
  const tbody = document.getElementById("list-body");
  const deleteBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  //grab the id of the book from the object in order to create button and row ids
  let deleteBtnID = "delete-btn-" + book.id;
  let readBtnID = "read-btn-" + book.id;
  let cell = document.createElement("td");
  let row = document.createElement("tr");

  // create delete btn
  deleteBtn.id = deleteBtnID;
  deleteBtn.className = "btn btn-danger";
  deleteBtn.onclick = function(){ delete_book(book)};
  deleteBtn.innerText = "Delete";

  //create initial read btn
  readBtn.id = readBtnID;
  readBtn.className = "btn btn-secondary text-nowrap";
  readBtn.onclick = function(){ read_book(book)};
  readBtn.read = "Not Read";
  readBtn.innerText = readBtn.read;

  row.id = "row-"+ bookArray[0];

  // List each column for book
  for(let k = 0; k < bookArray.length; k++){
    let cellText = document.createTextNode(bookArray[k]);
    cell = document.createElement("td");
    if (Object.keys(book)[k] == 'deleted'){
      cell.appendChild(deleteBtn);
      cellText = document.createTextNode("");
    } else if (Object.keys(book)[k] == 'read'){
      cell.appendChild(readBtn);
      book.read = "Not Read";
      cellText = document.createTextNode("");
    } 
      cell.appendChild(cellText);
      row.appendChild(cell);
  }
  
  row.appendChild(cell);
  tbody.appendChild(row);
}

function delete_book(book){
  let updateMsg = document.getElementById("update-text");
  //grab row
  const bookRow = document.getElementById("row-"+book.id);
  const bookName = bookRow.childNodes[1].textContent;
  bookRow.parentElement.removeChild(bookRow);
  updateMsg.innerText = bookName+" was deleted.";
}

function add_book(event){
  
  // Parameters
  let array = event.currentTarget.myParam;

  // Fields
  let addBookForm = document.getElementById('addBookForm');
  let title = document.getElementById("book-title");
  let author = document.getElementById("book-author");
  let pages = document.getElementById("book-pages");
  let desc = document.getElementById("book-desc");
  let shelf = document.getElementById("book-shelf");
  let genre = document.getElementById("book-genre"); 
  let updateMsg = document.getElementById("update-text");
  let errorMsg = document.getElementById("error-text");
  errorMsg.innerText = "";
  updateMsg.innerText = "";

  if(title.value == "" || author.value == "" ||  pages.value == "" || desc.value == "" || shelf.value == "" || genre.value == ""){
    errorMsg.innerText = "Fields need to have text to submit!";
  } else{
    let myModal = document.getElementById("bookModal");
    
    let book = new Book(array.length+1, title.value, author.value, pages.value, desc.value, shelf.value, genre.value, read.value);
    listBook(book);
    array.push(book);
    addBookForm.reset();
    updateMsg.innerText = "New book "+book.title+" has been submitted!"; 
    //myModal.modal("hide");
  }

  event.preventDefault();
  
}


function read_book(book){
  let updateMsg = document.getElementById("update-text");
  //grab row
  const bookRow = document.getElementById("row-"+book.id);
  const readBtn = document.getElementById("read-btn-"+book.id);
  const bookName = bookRow.childNodes[1].textContent;

  if (book.read == "Not Read"){
    book.read = "Read"; 
    readBtn.className = "btn btn-primary text-nowrap";
  } else{
    book.read = "Not Read";
    readBtn.className = "btn btn-secondary text-nowrap";
  }
    
  
  updateMsg.innerText = book.title +" "+book.read;
  readBtn.innerText = book.read;
  

}

const myLibrary = [];
let addBookForm = document.getElementById('addBookForm');

// Just some example books
const book1 = new Book(1, "Harry Potter","JK Rowling",200,"The boy who lived...","1111","Children's Lit/Fantasy", false, false);
const book2 = new Book(2, "Lord of the Rings","JRR Tolkien",400,"A hobbit brings the One Ring to Mordor.","2222","Fantasy", false, false);
const book3 = new Book(3, "Game of Thrones","George RR Martin",800,"Winter is coming...","4444","Fantasy", false, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

createTable(myLibrary);

// listens for submit on bootstrap modal and grabs field text

addBookForm.addEventListener("submit", add_book);

// creates the array param for the add_book function
addBookForm.myParam = myLibrary;











