// Let all page functionalities be called within this function
document.addEventListener('DOMContentLoaded', (e) => {

})

function get_all_books(){
    fetch('https://the-one-api.dev/v2/book/', {
        headers: {
            Authorization: PeGIFj72HpLkCPmwHO
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
            li.className = "drop-down"

            // Grad the dropdown menu and append
            let ul = document.querySelector('#books ul')

        })
    })
}