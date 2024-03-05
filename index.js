
let library = [] 

function Book(title, author, num_pages, IsRead){
    this.title = title;
    this.author = author; 
    this.num_pages = num_pages; 
    this.IsRead = IsRead; 
    this.index = get_unique_id();

}

function get_unique_id(){

    return Math.random().toString(36); 
    
}

function changeReadStatus(e){
    let id = e.target.parentElement.parentElement.id; 

    for(let i = 0; i < library.length; i++){
        if(library[i].index == id){
            library[i].IsRead = true; 
        }
    }
}

function make_book_element(Book){
    let book_element = document.createElement('div') 
    book_element.setAttribute('class', 'book')
    book_element.setAttribute('id', Book.index)
    let title_element = document.createElement('h1') 
    let author_element = document.createElement('h2') 
    let num_pages_element = document.createElement('h3') 

    let check_box_div = document.createElement('div') 
    let read_checkbox = document.createElement('input')
    read_checkbox.setAttribute('type', 'checkbox') 
    read_checkbox.setAttribute('name', 'checkbox') 
    read_checkbox.addEventListener('change', changeReadStatus)
    
    let read_checkbox_label = document.createElement('h3') 
    read_checkbox_label.textContent = "Already read"; 
    read_checkbox_label.setAttribute('for', 'checkbox') 

    check_box_div.appendChild(read_checkbox_label) 
    check_box_div.appendChild(read_checkbox) 

    let remove_button = document.createElement('button') 
    remove_button.textContent = "Remove"
    remove_button.setAttribute('class', 'remove-button') 
    remove_button.addEventListener('click', removeBook) 

    title_element.textContent = Book.title; 
    author_element.textContent = Book.author; 
    num_pages_element.textContent = Book.num_pages; 

    book_element.appendChild(title_element) 
    book_element.appendChild(author_element) 
    book_element.appendChild(num_pages_element) 
    book_element.appendChild(check_box_div) 
    book_element.appendChild(remove_button) 

    return book_element
}

function parseLibrary(library){
    
    const bookshelf = document.querySelector("#bookshelf") 

    bookshelf.textContent = "" 
    library.forEach(Book => {

        bookshelf.appendChild(make_book_element(Book)) 
    });

}

function removeBook(e){

    let book_id = e.target.parentElement.id; 

    for(let i = 0; i<library.length; i++){
        if(library[i].index === book_id){
            library.splice(i, 1) 
        }
    }

    parseLibrary(library) 
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
    parseLibrary(library) 

    const add_book = document.querySelector("#book-add")
    add_book.addEventListener("click", addBook) 

}  

main() 