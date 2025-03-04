document.getElementById('submitBtn').addEventListener('click', function() {
  var route = document.getElementById('routeInput').value;
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ route: route })
  })
  .then(response => response.json())
  .then(data => {
    var list = document.getElementById('busList');
    list.innerHTML = '';
    data.forEach(bus => {
      var listItem = document.createElement('li');
      listItem.textContent = bus;
      list.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
