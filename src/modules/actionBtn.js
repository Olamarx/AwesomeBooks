import {
  bookStorage, title, author, addButton, navLinks, list, add, contact,
} from './declaration.js';
import Book from './book.js';
import Storage from './localStorage.js';
import Library from './library.js';
import ClockClass from './date.js';

export default class ActionBtn {
static addbtn = () => {
  addButton.addEventListener('click', () => {
    const book = new Book(title.value, author.value);
    Library.createBook(book);
    Storage.setLocalStorage(book);
    // Storage.takingFromStorage()
    Library.clearInputs();
  });
}

static bookStore = () => {
  bookStorage.addEventListener('click', (e) => {
    const text = e.target.parentNode.children[0].textContent;
    Library.removeBook(e.target);
    Storage.removeFromLocalStorage(text);
  });
}

// Section pages
static navigate = () => {
  navLinks.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('List')) {
      add.classList.remove('active');
      contact.classList.remove('active');
      list.classList.add('active');
    } else if (e.target.classList.contains('New')) {
      contact.classList.remove('active');
      list.classList.remove('active');
      add.classList.add('active');
    } else {
      list.classList.remove('active');
      add.classList.remove('active');
      contact.classList.add('active');
    }
  });
}
// Date

static time = () => {
  setInterval(ClockClass.clock, 1000);
}
}