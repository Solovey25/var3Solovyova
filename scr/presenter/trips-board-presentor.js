import TripsListComponent from '../view/trips-list-component.js'; 
import TripComponent from '../view/trip-component.js';
import TripBoardComponent from '../view/trips-board-component.js'; 
import {render} from '../framework/render.js';

export default class TripsBoardPresenter { 
tripsBoardComponent = new TripBoardComponent() 
tripListComponent = new TripListComponent();

constructor({boardContainer}) { 
    this.boardContainer = boardContainer;
}

init() {
    render(this.tripsBoardComponent, this.boardContainer); 
    for (let i = 0; i < 4; i++) {
        const tripListComponent = new TripListComponent();
        render(tripListComponent, this.tripsBoardComponent.getElement());
        
        for (let j = 0; j < 4; j++) {
            const tripComponent = new TripComponent();
            render(tripComponent, tripListComponent.getElement());
        }
    }
}
}