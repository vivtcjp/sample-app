// JavaScript code to call the existing search API when the search button is clicked

// Function to call the search API
function callSearchAPI() {
  fetch('/search')
    .then(response => response.json())
    .then(data => {
      console.log('Search results:', data);
      // Handle the search results here
    })
    .catch(error => {
      console.error('Error calling search API:', error);
    });
}

// Add event listener to the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', callSearchAPI);
