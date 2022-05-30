/* eslint-disable import/prefer-default-export */
import { DateTime } from './Luxon.js';

export default class ClockClass {
    static clock = () => {
      const date = document.querySelector('.date');
      date.innerHTML = DateTime.now().toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      });
    }
}