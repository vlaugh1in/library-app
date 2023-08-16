function Book(title, author, pages, description,is_read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.is_read = is_read;
  
}



function addBookToLibrary(library, book){
  library.push(book);
}

function createTable(array){
  const list = document.getElementById("list-books");
  
  for (let i = 0; i < array.length; i++){
    // Each row lists a book
    const row = document.createElement("tr");
    const bookArray = Object.values(array[i]);
    let cell = document.createElement("td");
    let cellText = document.createTextNode(i+1);
    cell.appendChild(cellText);
    row.appendChild(cell);
    
    // List each column
    for(let j = 0; j< bookArray.length; j++){
      cell = document.createElement("td");
      const cellText = document.createTextNode(bookArray[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    list.appendChild(row);
  }
}

Book.prototype = this.info = function(){
  return title+" by "+author+", "+pages+", "+description+", "+is_read;
}

const myLibrary = [];
const list = document.getElementById("list-books");
const book1 = new Book('Harry Potter', 'JK Rowling', '233', 'About witches and wizards...', false);
const book2 = new Book('Lord of the Rings', 'JRR Tolkien', '432', 'A hobbit brings the ring to Mordor...', true);

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);
  
for(i=0; i<myLibrary.length; i++){
  console.log(myLibrary[i]);
}

createTable(myLibrary);

