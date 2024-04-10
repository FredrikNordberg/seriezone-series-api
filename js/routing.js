import state from "./state.js";
import { PopularSeries, shoWSeriesDetails, } from "./series.js";


// Routing funktion.. 
const route = () => {
  switch (state.currentPage) { // Switch sats för att välja vilken sida som ska renderas baserat på state.currentPage...
    // Om state.currentPage är "/index.html" eller bara "/", anropa funktionen PopularSeries()...
    case "/":
    case "/index.html":
      PopularSeries(); // anrop..
      break;
      // Om state.currentPage är "/series-details.html", anropa funktionen shoWSeriesDetails()...
    case "/series-details.html":
      shoWSeriesDetails(); // Anrop...
      break;
  }
};


export default route;


