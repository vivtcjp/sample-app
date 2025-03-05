document.addEventListener('DOMContentLoaded', function() {
  fetch('/locations')
    .then(response => response.json())
    .then(data => {
      var sourceDropdown = document.getElementById('source');
      var destinationDropdown = document.getElementById('destination');
      data.forEach(location => {
        var sourceOption = document.createElement('option');
        sourceOption.value = location.name;
        sourceOption.textContent = location.name;
        sourceDropdown.appendChild(sourceOption);

        var destinationOption = document.createElement('option');
        destinationOption.value = location.name;
        destinationOption.textContent = location.name;
        destinationDropdown.appendChild(destinationOption);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.getElementById('submit').addEventListener('click', function() {
  var route = document.getElementById('route').value;
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ route: route })
  })
  .then(response => response.json())
  .then(data => {
    var busesList = document.getElementById('buses-list');
    busesList.innerHTML = '';
    data.forEach(bus => {
      var listItem = document.createElement('li');
      listItem.textContent = bus;
      busesList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
