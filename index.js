//import api_key from './env.js';


document.addEventListener('DOMContentLoaded', (e) => {
    // Fetch all book titles to display on Books Dropdown menu
    getAllBooks()

    // Fetch all movie title to dispaly on Movies Dropdown menu
    getAllMovies()

    // Displays book details once book title is clicked
    renderOneBook()

    // Displays movie details when movie title is clicked
    renderOneMovie()

    // Fetch afew characters to display on Characters Dropdown menu
    getSomeCharacters()

    // Displays character details when a character is clicked
    renderOneCharacter()

    //Allow posting of favourite quote from the book/movie series
    postFavouriteQuote()
})


/**
 * @name getAllBooks
 * @description Fetches books from database then adds them to the books dropdown menu on the navbar.
 */
function getAllBooks(){

    fetch('https://the-one-api.dev/v2/book/', {
        headers: {
            Authorization: "Bearer PeGIFj72HpLkCPmRuwHO"
        }
    })
    .then(res => res.json())
    .then(books => {
        books["docs"].forEach(book => {
            const bookId = book._id
            const title = book.name

            // Create a li item for each book to appear under the dropdwon menu
            const li = document.createElement('li')
            li.textContent = title
            li.id = bookId

            // Grab the dropdown menu and append
            let ul = document.querySelector('#books ul.sub-menu')
            ul.appendChild(li)
        })
    })
}

/**
 * @name renderOneBook
 * @description Displays details of one book when clicked
 */
function renderOneBook(){
    setTimeout(() => {
        const li_items = document.querySelectorAll('#books ul.sub-menu li')
        li_items.forEach(li=> {
        li.addEventListener('click', e => {
            console.log(e)
            const bookId = li.id
            fetch(`https://the-one-api.dev/v2/book/${bookId}`, {
            headers: {
                Authorization: "Bearer PeGIFj72HpLkCPmRuwHO"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const id = data["docs"][0]._id
            const title= data["docs"][0].name

            //Selct Div to Append to on DOM
            // Clear any previous content and append
            const div = document.querySelector('li div.title')
            div.innerHTML = ""
            const h1 = document.createElement('h1')
            h1.textContent = `Book: ${title}`
            div.appendChild(h1)

        })
        })
    })
    }, 4000)
}

/**
 * @name getAllMovies
 * @description Fetches movies from database then adds them to the movies dropdown menu on the navbar.
 */
function getAllMovies(){
    fetch('https://the-one-api.dev/v2/movie/', {
        headers: {
           Authorization: "Bearer PeGIFj72HpLkCPmRuwHO"
        }
    })
    .then(res => res.json())
    .then(movies => {
        movies["docs"].forEach(movie => {
            const movieId = movie._id
            const title = movie.name

            // Create a li item for each book to appear under the dropdwon menu
            const li = document.createElement('li')
            li.textContent = title
            li.id = movieId

            // Grab the dropdown menu and append
            let ul = document.querySelector('#movies ul.sub-menu')
            ul.appendChild(li)
        })
    })
}


/**
 * @name renderOneMovie
 * @description Displays details of one movie when clicked
 */
function renderOneMovie(){
    setTimeout(() => {
        const li_items = document.querySelectorAll('#movies ul.sub-menu li')
        li_items.forEach(li => {
        li.addEventListener('click', e => {
            console.log(e)
            const movieId = li.id
            fetch(`https://the-one-api.dev/v2/movie/${movieId}`, {
            headers: {
                Authorization: "Bearer PeGIFj72HpLkCPmRuwHO"
            }
        })
        .then(res => res.json())
        .then(data => {
            const id = data["docs"][0]._id
            const title= data["docs"][0].name
            const awardNominations = data["docs"][0].academyAwardNominations
            const academyAwards = data["docs"][0].academyAwardWins
            const revenue = data["docs"][0].boxOfficeRevenueInMillions
            const budget = data["docs"][0].budgetInMillions
            const rating = data["docs"][0].rottenTomatoesScore
            const length = data["docs"][0].runtimeInMinutes 

            // Selct Div to Append to on DOM
            // Clear any previous content and append
            const div = document.querySelector('li div.title')
            div.innerHTML=""

            const h1 = document.createElement('h1')
            h1.textContent = `Movie: ${title}`
            div.appendChild(h1)

            const p2 = document.createElement('p')
            p2.textContent = `Academy Award Nominations: ${awardNominations}`
            div.appendChild(p2)

            const p3 = document.createElement('p')
            p3.textContent = `Academy Awards: ${academyAwards}`
            div.appendChild(p3)

            const p4 = document.createElement('p')
            p4.textContent = `Revenue: $${revenue} million`
            div.appendChild(p4)

            const p5 = document.createElement('p')
            p5.textContent = `Budget: $${budget} million`
            div.appendChild(p5)

            const p6 = document.createElement('p')
            p6.textContent = `Rotten Tomatoes Score: ${rating} `
            div.appendChild(p6)

            const p7 = document.createElement('p')
            p7.textContent = `Runtime: ${length} minutes`
            div.appendChild(p7)

        })
        })
    })
    }, 4000)
}


/**
 * @name getSomeCharacters
 * @description Fetches a few characters from the database then adds them to the characters dropdown menu on the navbar.
 */
function getSomeCharacters(){
    fetch('https://the-one-api.dev/v2/character?name=Gandalf,Frodo Baggins,Aragorn II Elessar,Gollum,Legolas,Sauron,Samwise Gamgee', {
        headers: {
            Authorization: "Bearer PeGIFj72HpLkCPmRuwHO"
        }
    })
    .then(res => res.json())
    .then(characters => {
        characters["docs"].forEach(character => {
            const name = character.name
            const id = character._id

            // Create a li item for each character to appear under the dropdwon menu
            const li = document.createElement('li')
            li.textContent = name
            li.id = id

            // Grab the dropdown menu and append
            let ul = document.querySelector('#characters ul.sub-menu')
            ul.appendChild(li)
        })
    })
}

/**
 * @name renderOneCharacter
 * @description Displays details of one movie when clicked
 */
function renderOneCharacter(){
    setTimeout(() => {
        const li_items = document.querySelectorAll('#characters ul.sub-menu li')
        li_items.forEach(li => {
        li.addEventListener('click', e => {
            const id = li.id
            fetch(`https://the-one-api.dev/v2/character/${id}`, {
            headers: {
                Authorization: "Bearer PeGIFj72HpLkCPmRuwHO"
            }
        })
        .then(res => res.json())
        .then(characters => {
        characters["docs"].forEach(character => {
            const name = character.name
            const race = character.race
            const birth = character.birth
            const death = character.death
            const realm = character.realm

            // Selct Div to Append to on DOM
            // Clear any previous content and append

            const div = document.querySelector('li div.title')
            div.innerHTML=""

            const h1 = document.createElement('h1')
            h1.textContent = name
            div.appendChild(h1)

            const p1 = document.createElement('p')
            p1.textContent = `Race: ${race}`
            div.appendChild(p1)

            const p2 = document.createElement('p')
            p2.textContent = `Birth: ${birth}`
            div.appendChild(p2)

            const p3 = document.createElement('p')
            p3.textContent = `Death: ${death}`
            div.appendChild(p3)

            const p4 = document.createElement('p')
            p4.textContent = `Realm: ${realm}`
            div.appendChild(p1)


        })
    })
        })
    })
}, 4000)
}

/**
 * @name postFavouriteQuote
 * @desription Grabs value from submitted form and appends to DOM asynchronously
 */
function postFavouriteQuote(){
    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let userName = form.querySelectorAll('input')[2].value
        let favouriteQuote = form.querySelectorAll('input')[0].value
        let quoteBy = form.querySelectorAll('input')[1].value

        let commentSection = document.querySelector('#comments')

        let li = document.createElement('li')
        li.textContent = `${userName}: "${favouriteQuote}." -${quoteBy}`

        commentSection.appendChild(li)

        document.querySelector('form').reset()
    })
}
