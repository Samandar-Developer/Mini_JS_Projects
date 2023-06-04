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
  <td><a href='#' class="delete">X</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.delete = function(target){
  if(target.className == "delete"){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.showAlert = function(text, type){
  const message = document.getElementById("alert");
  message.textContent = text;
  message.classList.add(`alert-${type}`);
  message.style.display = "block";
  setTimeout(function(){
    const message = document.getElementById("alert");
    message.style.display = "none";
  }, 3000);
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

  if(name === '' || author === '' || code === ''){
    ui.showAlert("You can't submit empty field", "danger");
  }else{
    ui.addBookToList(book);
    ui.showAlert(`${name} is Add To list`, "success");
    ui.clearFields();
  }

  e.preventDefault();
});


document.getElementById("book-list").addEventListener("click", (e)=>{
  const ui = new UI();

  ui.delete(e.target);

  ui.showAlert("Book removed from list", "success");

  e.preventDefault();
});