import ConteinerComponent from './framework/view/conteiner.js';
import {render} from './framework/render.js';
import AddTripComponent from './framework/view/addTrip-component.js';
import TripListComponent from './framework/view/tripList-component.js';
import TripComponent from './framework/view/trip-component.js';

const ConteinerContainer = document.querySelector('.conteiner');
const addTripContainer = document.querySelector('.add-trip');
const tripsBoardContainer = document.querySelector('.tripboard');

const tripsBoardPresenter = new TripsBoardPresenter({boardContainer: tripsBoardContainer});


render(new ConteinerComponent(), bodyContainer, RenderPosition. BEFOREBEGIN);
render(new FormAddTripComponent(), formContainer);

tripsBoardPresenter.init();