import {createElement} from '../render.js';

function createAddTripComponentTemplate() {
    return (`
        <div class="trip-form">
            <h2>Добавить новую поездку</h2>
            <form id="trip-form">
                <label for="trip-destination">Путешествие:</label>
                <input type="text" id="trip-destination" placeholder="Destination" required />
                <label for="trip-date">Дата:</label>
                <input type="date" id="trip-date" required />
                <label for="trip-notes">Заметки:</label>
                <textarea id="trip-notes" placeholder="Notes" rows="3"></textarea>

                <fieldset>
                    <legend>Статус поездки:</legend>
                    <label><input type="radio" name="trip-status" value="Planned" required /> Запланировано</label>
                    <label><input type="radio" name="trip-status" value="Completed" required /> Выполнено</label>
                </fieldset>

                <button type="submit">Добавить поездку</button>
            </form>
        </div> `);
}

export default class AddTripComponent {
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