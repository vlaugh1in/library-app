function Book(id, title, author, pages, description, shelfNum, genre, favorite){
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.shelfNum = shelfNum;
  this.genre = genre;
  this.favorite = favorite;
}

function createTable(array){
  const thead = document.getElementById("list-header");
  // creates a general book object to generate header names
  const headerBook = new Book();
  let row = document.createElement("tr");
  const headerArray = Object.keys(headerBook);
  
  // List Header names onto the table
  for(let i=0; i< headerArray.length; i++){
    const header = document.createElement("th");
    const headerText = document.createTextNode(headerArray[i]);
    header.appendChild(headerText);
    row.appendChild(header);
  }
  thead.appendChild(row);
  
  // List Books onto the table using 2 for loops. First loop adds book values into another array, the second lists out the new array (using addBookToLibrary)
  for (let j = 0; j < array.length; j++){
    //reset row element
    addBookToLibrary(array[j]);
  }
}

function addBookToLibrary(book){
  const bookArray = Object.values(book);
  const tbody = document.getElementById("list-body");
  let row = document.createElement("tr");
  // List each column for book
  for(let k = 0; k < bookArray.length; k++){
    const cell = document.createElement("td");
    const cellText = document.createTextNode(bookArray[k]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tbody.appendChild(row);
  
}

const myLibrary = [];
let addBookForm = document.getElementById('addBookForm');
createTable(myLibrary);

// listens for submit on bootstrap modal and grabs field text
addBookForm.addEventListener("submit", function(event){
  let addBookForm = document.getElementById('addBookForm');
  let title = document.getElementById("book-title");
  let author = document.getElementById("book-author");
  let pages = document.getElementById("book-pages");
  let desc = document.getElementById("book-desc");
  let shelf = document.getElementById("book-shelf");
  let genre = document.getElementById("book-genre"); 
  let favorite = false;

  if(title.value == "" || author.value == "" ||  pages.value == "" || desc.value == "" || shelf.value == "" || genre.value == ""){
    alert("Fields need to have text to submit!");
  } else{
    let book = new Book(myLibrary.length+1, title.value, author.value, pages.value, desc.value, shelf.value, genre.value, favorite);
    addBookToLibrary(book);
    myLibrary.push(book);
    addBookForm.reset();
    alert("New book "+title.value+" has been submitted!");    
  }
  event.preventDefault();
});






