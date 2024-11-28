document.getElementById("searchButton").addEventListener("click", searchCountries);

function searchCountries() {
  const searchInput = document.getElementById("searchInput").value.trim();
  const container = document.getElementById("countryContainer");
  
  if (!searchInput) {
    alert("Please enter a country name!");
    return;
  }

  // Clear previous results
  container.innerHTML = "<p>Loading...</p>";

  // Fetch country data from Rest Countries API
  fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
    .then(response => {
      if (!response.ok) throw new Error("Country not found");
      return response.json();
    })
    .then(data => {
      container.innerHTML = ""; // Clear loading message
      data.forEach(country => {
        const countryCard = `
          <div class="country-card">
            <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
            <h2>${country.name.common}</h2>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <a href="https://www.google.com/maps?q=${country.latlng.join(',')}" target="_blank">View on Map</a>
          </div>
        `;
        container.insertAdjacentHTML("beforeend", countryCard);
      });
    })
    .catch(error => {
      container.innerHTML = `<p>${error.message}</p>`;
    });
}
