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

function addBookToLibrary(library, book){
  library.push(book);
}

function createTable(array){
  const thead = document.getElementById("list-header");
  const tbody = document.getElementById("list-body");
  let row = document.createElement("tr");
  const headerArray = Object.keys(array[0]);

  // List Header onto the table
  for(let i=0; i< headerArray.length; i++){
    const header = document.createElement("th");
    const headerText = document.createTextNode(headerArray[i]);
    header.appendChild(headerText);
    row.appendChild(header);
  }
  thead.appendChild(row);
 
  // List Books onto the table using 2 for loops. First adds book values into another array, the second lists out the new array
  for (let j = 0; j < array.length; j++){
     const bookArray = Object.values(array[j]);
     //reset row element
     row = document.createElement("tr");
    // List each column
    for(let k = 0; k < bookArray.length; k++){
      const cell = document.createElement("td");
      const cellText = document.createTextNode(bookArray[k]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

Book.prototype = this.info = function(){
  return title+" by "+author+", "+pages+", "+description+", "+is_read;
}

const myLibrary = [];
const list = document.getElementById("list-books");
const book1 = new Book(1, "Harry Potter and the Philosopher's Stone", 'JK Rowling', '233', 'About witches and wizards...', '000.0 AA00 2005', "Children's Fantasy", false);
const book2 = new Book(2, 'Lord of the Rings', 'JRR Tolkien', '432', 'A hobbit brings the ring to Mordor...', '000.0 AA00 2005','Science Fiction/Fantasy', true);

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);
  
createTable(myLibrary);

