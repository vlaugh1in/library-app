function Book(id, title, author, pages, description, shelfNum, genre, favorite, deleted){
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.shelfNum = shelfNum;
  this.genre = genre;
  this.favorite = favorite;
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
    if (headerArray[i] == 'deleted'){
      header = document.createElement("th");
    }else{
      header = document.createElement("th");
      const headerText = document.createTextNode(headerArray[i]);
      header.appendChild(headerText);
    }

    row.appendChild(header);
  }
  thead.appendChild(row);
  
  // List Books onto the table using 2 for loops. First loop adds book values into another array, the second lists out the new array (using addBookToLibrary)
  for (let j = 0; j < array.length; j++){
    addBookToLibrary(array[j]);
  }
}

function addBookToLibrary(book){
  const bookArray = Object.values(book);
  const tbody = document.getElementById("list-body");
  const deleteBtn = document.createElement("button");

  //grab the id of the book from the object in order to create button and row ids
  let bookID = "book-" + bookArray[0];
  let cell = document.createElement("td");
  let row = document.createElement("tr");
  deleteBtn.id = bookID;
  deleteBtn.className = "btn btn-danger";
  deleteBtn.onclick = function(){ delete_book(bookID)};
  deleteBtn.innerText = "DELETE";

  row.id = bookID;

  // List each column for book
  for(let k = 0; k < bookArray.length; k++){
    let cellText = document.createTextNode(bookArray[k]);
    cell = document.createElement("td");
    if (Object.keys(book)[k] == 'deleted'){
      cellText = document.createTextNode("");
    }
      cell.appendChild(cellText);
      row.appendChild(cell);
  }
  cell.appendChild(deleteBtn);
  row.appendChild(cell);
  tbody.appendChild(row);
}

function delete_book(id){
  //grab row
  const bookRow = document.getElementById(id);
  const bookName = bookRow.childNodes[1].textContent;
  bookRow.parentElement.removeChild(bookRow);
  alert(bookName+" was deleted.");
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
  let favorite = false;
  let updateMsg = document.getElementById("update-text");
  let errorMsg = document.getElementById("error-text");
  errorMsg.innerText = "";
  updateMsg.innerText = "";

  if(title.value == "" || author.value == "" ||  pages.value == "" || desc.value == "" || shelf.value == "" || genre.value == ""){
    errorMsg.innerText = "Fields need to have text to submit!";
  } else{
    let myModal = document.getElementById("bookModal");
    let book = new Book(array.length+1, title.value, author.value, pages.value, desc.value, shelf.value, genre.value, favorite);
    addBookToLibrary(book);
    array.push(book);
    addBookForm.reset();
    updateMsg.innerText = "New book "+book.title+" has been submitted!"; 
    //myModal.modal("hide");
  }

  event.preventDefault();
  
}

const myLibrary = [];
let addBookForm = document.getElementById('addBookForm');

// Just some example books
const book1 = new Book(1, "a","b",1,"awd","afaw","faaw", false, false);
const book2 = new Book(2, "sf","bsegs",2,"sgse","afaw","faaw", false, false);
const book3 = new Book(3, "ags","segesgb",3,"awsfsed","afsefsefaw","faawsefse", false, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

createTable(myLibrary);

// listens for submit on bootstrap modal and grabs field text

addBookForm.addEventListener("submit", add_book);

// creates the array param for the add_book function
addBookForm.myParam = myLibrary;











