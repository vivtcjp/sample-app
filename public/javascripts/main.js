document.addEventListener('DOMContentLoaded', function() {
  const originDropdown = document.getElementById('origin-dropdown');
  const destinationDropdown = document.getElementById('destination-dropdown'); // Add this line

  fetch('/cities')
    .then(response => response.json())
    .then(cities => {
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = city.name;
        originDropdown.appendChild(option);
        destinationDropdown.appendChild(option.cloneNode(true)); // Add this line
      });
    })
    .catch(error => console.error('Error fetching cities:', error));
});
