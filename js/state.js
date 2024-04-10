const state = {
  // Anger den nuvarande sidan som användaren är på..
  currentPage: window.location.pathname,
  // Definierar API-nyckeln och bas-URL:en som används för att anropa api...
  api: {
    key: "feeb061e82e6b7189c68fa22f86dc596",
    baseUrl: "https://api.themoviedb.org/3/",
  },
};

export default state;