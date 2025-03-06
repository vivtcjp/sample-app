document.addEventListener('DOMContentLoaded', function() {
  const originDropdown = document.getElementById('origin-dropdown');

  fetch('/cities')
    .then(response => response.json())
    .then(cities => {
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = city.name;
        originDropdown.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching cities:', error));
});
