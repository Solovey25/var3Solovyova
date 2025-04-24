import {createElement} from '../render.js';

function createTaskListComponentTemplate() {
  return (
    `<div class="trip-list">
            <h2>Поездки</h2>
            <ul id="trip-list">
                
            </ul>
        </div>`
  );
}

export default class TaskListComponent {
  getTemplate() {
    return createTaskListComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}