// Let all page functionalities be called within this function
document.addEventListener('DOMContentLoaded', (e) => {
    // Fetch all book titles to display on Books Dropdown menu
    get_all_books()
})


/**
 * @name get_all_books
 * @description Fetches books from database then adds them to the books dropdown menu on the navbar.
 */
function get_all_books(){

    fetch('https://the-one-api.dev/v2/book/', {
        headers: {
            Authorization: "PeGIFj72HpLkCPmwHO"
        }
    })
    .then(res => res.json())
    .then(books => {
        books["docs"].forEach(book => {
            const book_id = book._id
            const title = book.name

            // Create a li item for each book to appear under the dropdwon menu
            const li = document.createElement('li')
            li.textContent = title
            li.id = book_id

            // Grab the dropdown menu and append
            let ul = document.querySelector('#books ul.sub-menu')
            ul.appendChild(li)
        })
    })
}

function render_one_book(){
    const li = document.querySelectorAll('ul.sub-menu li')
    li.addEventListener('click', e => {
        const book_id = li.id
        fetch(`https://the-one-api.dev/v2/book/${book_id}`, {
        headers: {
            Authorization: "PeGIFj72HpLkCPmwHO"
        }
    })
    .then(res => res.json())
    })
    
}