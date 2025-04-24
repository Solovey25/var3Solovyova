import {createElement} from '../render.js';

function createTripFilterComponentTemplate() {
    return (`
        <div class="trip-filter">
            <label for="date-filter">Фильтр по дате:</label>
            <input type="date" id="date-filter" />
            
            <label><input type="checkbox" id="completed-filter" /> Показывать только завершенные поездки</label>
        </div> `);
}

export default class TripFilterComponent {
    getTemplate() {
        return createAddTripComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
         this.element = null;
    }
}