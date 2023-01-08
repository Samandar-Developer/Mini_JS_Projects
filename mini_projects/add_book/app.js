function Book(name, author, isbn) {
  this.name = name;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById("book-list");

  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#'>X</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById("name").value = '';
  document.getElementById("author").value = '';
  document.getElementById("code").value = '';
}

const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
  const name = document.getElementById("name").value,
        author = document.getElementById("author").value,
        code = document.getElementById("code").value;

  const book = new Book(name, author, code);

  const ui = new UI();

  ui.addBookToList(book);

  ui.clearFields();

  e.preventDefault();
});