// book objects will be stored here. 
var library = [] 

function Book(title, author, num_pages, IsRead){
    this.title = title;
    this.author = author; 
    this.num_pages = num_pages; 
    this.IsRead = IsRead; 

    this.info = function(){
        return `${this.title} ${this.author} ${this.num_pages}.`
    }

}

function make_book_element(Book){
    var book_element = document.createElement('div') 
    book_element.setAttribute('class', 'book')
    var title_element = document.createElement('h1') 
    var author_element = document.createElement('h2') 
    var num_pages_element = document.createElement('h3') 

    var remove_button = document.createElement('button') 
    remove_button.textContent = "Remove"
    remove_button.setAttribute('class', 'remove-button') 
    remove_button.addEventListener('click', removeBook) 

    title_element.textContent = Book.title; 
    author_element.textContent = Book.author; 
    num_pages_element.textContent = Book.num_pages; 

    book_element.appendChild(title_element) 
    book_element.appendChild(author_element) 
    book_element.appendChild(num_pages_element) 
    book_element.appendChild(remove_button) 

    return book_element
}

function parseLibrary(library){
    // parse the library and construct the book element for each book object. 
    
    const bookshelf = document.querySelector("#bookshelf") 

    bookshelf.textContent = "" 
    library.forEach(element => {
        let book_element = make_book_element(element) 

        bookshelf.appendChild(book_element) 
    });

}


function removeBook(e){
    //remove the parent element of the button from the dom. 
    e.target.parentElement.remove()
}

function addBook(){
    const title = document.querySelector('#title') 
    const author = document.querySelector('#author')
    const num_pages = document.querySelector('#num-pages') 

    let book = new Book(title.value, author.value, num_pages.value, false) 

    library.push(book) 
    parseLibrary(library)
}

function main(){
    addBook()
    parseLibrary(library) 

    const add_book = document.querySelector(".book-add")
    add_book.addEventListener("click", addBook) 

}  

main() 