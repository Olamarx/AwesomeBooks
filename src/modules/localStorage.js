export default class Storage {
    static takingFromLibrary = () => {
        let library;
        if (localStorage.getItem('Awesome-Books')) {
            library = []
        } else {
            library = JSON.parse(localStorage.getItem('Awesome-Books'))
        }
        return library;
    }

static setLocalStorage = (book) => {
    const library = Storage.takingFromLibrary()
    library.push(book)
    localStorage.setItem('Awesome-Books', JSON.stringify(library)) 
}

static removeFromLocalStorage = (text) => {
    const library = Storage.takingFromLibrary()
    library.forEach((book) => {
        if (`"${book.title}" by ${book.author}`.trim() === text.trim()) {
            library.splice(library.indexOf(book), 1)
        }
    })
    localStorage.setItem('Awesome-Books', JSON.stringify(library))
}
}