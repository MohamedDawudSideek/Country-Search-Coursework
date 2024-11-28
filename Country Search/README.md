Country Search Website
A simple and responsive web application that fetches and displays real-time country information using the Rest Countries API. The app allows users to search for countries and view details such as their flag, capital, region, population, and a Google Maps link.

Features
Search Functionality: Search for any country by name.
Real-time API Integration: Fetches data dynamically from the Rest Countries API.
Responsive Design: Optimized for desktop, tablet, and mobile devices.
Country Details: Displays information in a clean card layout, including:
Flag
Capital
Region
Population
Link to Google Maps
Modern Styling: Uses CSS Grid and Flexbox for layout and responsiveness.
Technology Stack
HTML5: Markup structure.
CSS3: Styling and responsive design.
JavaScript: For interactivity and API calls.
Rest Countries API: To retrieve country data.
Project Structure
bash
Copy code
project-root/
│
├── index.html               # Main HTML file
├── css/
│   └── style.css            # Main stylesheet
├── js/
│   └── script.js            # JavaScript for interactivity
├── images/                  # Folder for assets/icons (if any)
└── README.md                # Project documentation
Setup and Usage
Clone or Download the project files to your local machine.
Open the index.html file in any modern web browser.
Use the search bar to type in the name of a country and click "Search."
View country details displayed as cards.
API Reference
This project uses the Rest Countries API. Below is an example of the API call used:

javascript
Copy code
fetch(`https://restcountries.com/v3.1/name/{countryName}`)
  .then(response => response.json())
  .then(data => {
    // Process data
  });
Future Enhancements
Add a dark mode toggle for better accessibility.
Support advanced search options (e.g., by region, language, or population).
Display additional country data like currencies and languages.
Add animations for smoother transitions when loading content.
Screenshots
Feature	Screenshot
Search Functionality	
Country Details Display	
License
This project is open-source and free to use. Contributions are welcome!