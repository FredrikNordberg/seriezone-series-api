

//Definiera en klass för TV-serier och deras egenskaper...
class TVSeries {
  constructor(
    id,
    poster_path,
    original_name,
    overview,
    vote_average,
    first_air_date,
    genres
  ) {
    this.id = id; 
    this.poster_path = poster_path;
    this.original_name = original_name;
    this.overview = overview;
    this.vote_average = vote_average;
    this.first_air_date = first_air_date;
    this.genres = genres;
  }
};

// Funktion för att visa en lista med TV-serier....
const displaySeries = (element, series) => {
  // Iterera över varje TV-serie i listan...
  series.forEach((tv) => {
    // Skapa en instans av TVSeries-klassen med informationen om TV-serien...
    const tvSeries = new TVSeries(
      tv.id,
      tv.poster_path,
      tv.original_name,
      tv.overview,
      tv.vote_average,
      tv.first_air_date,
      tv.genres
    );

    // Skapa en div som innehåller informationen om TV-serien...
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <a href="/series-details.html?id=${tvSeries.id}">
        <img src="https://image.tmdb.org/t/p/w500${tvSeries.poster_path}" alt="${tvSeries.original_name}"
      </a>
      <div class="card-body">
      <h5 class="card-title">${tvSeries.original_name}</h5>
      <p class="card-text"><small class="text.muted">Release date: ${tvSeries.first_air_date}</small></p>
      </div>
    `;

    // Lägg till div-elementet i det angivna elementet i dokumentet...
    document.querySelector(element).appendChild(div);
  });
};


// Funktion för att visa detaljer om en specifik TV-serie...
const displaySeriesDetails = (element, series) => {
  // Skapa en instans av TVSeries-klassen med informationen om TV-serien...
  const tvSeries = new TVSeries(
    series.id,
    series.poster_path,
    series.original_name,
    series.overview,
    series.vote_average,
    series.first_air_date,
    series.genres
  );

  // Skapa en div som innehåller detaljerad information om TV-serien....
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="details-top">
      <div>
        <img src="https://image.tmdb.org/t/p/w500${
          tvSeries.poster_path
        }" class="card-img-top" alt="${tvSeries.original_name}">
      </div>
      <div>
        <h2>${tvSeries.original_name}</h2>
        <p>${tvSeries.vote_average.toFixed(1)} / 10</p>
        <p class="text-muted">Release: ${tvSeries.first_air_date}</p>
        <p>${tvSeries.overview}</p>
        <h5>Genre</h5>
        <ul>
          ${tvSeries.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  // Lägg till div-elementet i det angivna elementet i dokumentet....
  document.querySelector(element).appendChild(div);
};

// Exportera de två funktionerna från modulen..
export { displaySeries, displaySeriesDetails, };




// I HTML-koden används template literals  ${}  för att sätta invärden..
// Metoden map() används för att skapa en ny array med alla genre namn från genres-arrayen...
// join("") för att slå ihop alla li-elementen till en enda sträng utan mellanrum eller andra tecken...