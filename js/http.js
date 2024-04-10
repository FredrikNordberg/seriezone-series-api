import state from "./state.js";

// Skapa en funktion med en parameter endpoint..
const fetchData = async (endpoint) => {
   // Hämta API nyckel och bas URL från `state`...
  const API_KEY = state.api.key;
  const API_URL = state.api.baseUrl;

  // Använd fetch API:et för att hämta data från API med hjälp av URL och API nyckel...
  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}`);

  // Konvertera svaret till JSON...
  const data = await response.json();
  // Returnera data från API-anropet..
  return data;
};

export default fetchData;