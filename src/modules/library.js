import {
  bookStorage, title, author, div, p, btn,
} from './declaration.js';

export default class Library {
  static displayLibrary() {
    const library = Storage.takingFromStorage();
    library.forEach((book) => Library.createBook(book));
  }

  static createBook(book) {
    const bookContainer = div.cloneNode(true);
    const bookText = p.cloneNode(true);
    const bookButton = btn.cloneNode(true);

    bookStorage.append(bookContainer);
    bookContainer.classList.add('book');
    bookContainer.append(bookText, bookButton);

    bookText.innerText = `"${book.title}" by ${book.author}`;
    bookButton.innerText = 'Remove';
    bookButton.classList.add('remove-btn');
  }

  static removeBook(element) {
    if (element.classList.contains('remove-btn')) {
      element.parentNode.remove();
    }
  }

  static clearInputs() {
    title.value = '';
    author.value = '';
  }
}