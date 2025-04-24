import {createElement} from '../render.js';

function createTripListComponentTemplate() {
  return (
    `<section class="trips__column">
       <p class="p1">Test Trip List</p>
       <ul class="trips__list"></ul>
     </section>`
  );
}

export default class TripListComponent {
  getTemplate() {
    return createTripListComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}