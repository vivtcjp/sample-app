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
