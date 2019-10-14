class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookList(book){
        const list = document.getElementById('book-list');
        //Create Element
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td> <a href="#" class="delete">X</a></td>
        `;
        
        list.appendChild(row);
    }

    showAlert(message, className){
        // Create div
        const div =  document.createElement('div');
        //add classes
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(message));
        //Get parent 
        const container = document.querySelector('.container');
        //Get from
        const form = document.getElementById("book-form");
        //insert alert 
        container.insertBefore(div, form);

        //Timeout after 3sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event Listener
document.querySelector("#book-form").addEventListener('submit', function(e){
    e.preventDefault();

    // Get form Value
    const title = document.getElementById('title').value;
          author = document.getElementById("author").value;
          isbn = document.getElementById('isbn').value;

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    // Validate form
    if (title === '' || author === '' || isbn === '') {
    const ui = new UI();
        ui.showAlert("Please fill in all fields", 'error');
    } else{
    //Add book
    ui.addBookList(book);
    
    //Show alert
    ui.showAlert("Book added!", 'success');
    //Clear field
    ui.clearFields();
    }
    
});

// Event Listener
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();

    //Instantiate UI
    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);

    //show alert
    ui.showAlert('Book removed!', 'success')

});