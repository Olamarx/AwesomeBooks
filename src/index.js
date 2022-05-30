/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Library from './modules/library.js';
import ActionBtn from './modules/actionBtn.js';

window.addEventListener('load', Library.displayLibrary());
ActionBtn.addbtn();
ActionBtn.bookStore();
ActionBtn.navigate();
ActionBtn.time();
