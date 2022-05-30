const bookStorage = document.querySelector('.book-list__book-storage');
const form = document.querySelector('form');
const title = form.elements[0];
const author = form.elements[1];
const addButton = form.elements[2];
const div = document.createElement('div');
const p = document.createElement('p');
const btn = document.createElement('button');

// Section pages declaration
const navLinks = document.querySelector('.nav__links');
const list = document.querySelector('.book-list');
const add = document.querySelector('.add-book');
const contact = document.querySelector('.contact');
export {
  bookStorage, form, title, author, addButton, div, p, btn, navLinks, list, add, contact,
};