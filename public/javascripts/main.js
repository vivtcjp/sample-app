document.addEventListener('DOMContentLoaded', function() {
  const originDropdown = document.getElementById('origin-dropdown');
  const destinationDropdown = document.getElementById('destination-dropdown');

  fetch('/cities')
    .then(response => response.json())
    .then(cities => {
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = city.name;
        originDropdown.appendChild(option);
        destinationDropdown.appendChild(option.cloneNode(true));
      });
    })
    .catch(error => console.error('Error fetching cities:', error));

  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const origin = originDropdown.value;
    const destination = destinationDropdown.value;
    const date = document.getElementById('date').value;

    fetch(`/api/bus-routes?origin=${origin}&destination=${destination}&date=${date}`)
      .then(response => response.json())
      .then(routes => {
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = '';

        routes.forEach(route => {
          const listItem = document.createElement('li');
          listItem.textContent = `Bus from ${route.source} to ${route.destination} on ${route.weekday} costs ${route.cost}`;
          resultsList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching bus routes:', error));
  });
});