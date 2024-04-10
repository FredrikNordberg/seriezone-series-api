import fetchData from "./http.js";
import { displaySeries,displaySeriesDetails } from "./dom.js";

const PopularSeries = async () => {
  // Hämtar en array med objekt som representerar de populäraste TV-serierna från apie...
    const { results } = await fetchData("tv/popular");
    // Visar TV-serierna i HTML-dokumentet under elementet med id #top-series...
    displaySeries("#top-series", results);
  };
  
  const shoWSeriesDetails = async () => {
    // Hämtar id för TV-serien från URL:en....
    const seriesId = window.location.search.split("=")[1];
    // Hämtar objektet som representerar TV-serien från api...
    const series = await fetchData(`tv/${seriesId}`);
    // Visar detaljerna för TV-serien i HTML-dokumentet under elementet med id #series-details...
    displaySeriesDetails("#series-details", series);
  };

export {PopularSeries, shoWSeriesDetails};