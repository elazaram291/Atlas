import { doApi } from "./MaAtlas.js";
import { declareEvents } from "./ListeEvents.js"


const init = () => {
  doApi("israel");
  declareEvents(doApi);
}



init();