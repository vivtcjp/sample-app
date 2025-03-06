document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    const response = await fetch(`/search?origin=${origin}&destination=${destination}&date=${date}`);
    const results = await response.json();

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    results.forEach(route => {
        const li = document.createElement('li');
        li.textContent = `${route.origin} to ${route.destination} - Departure: ${new Date(route.departureTime).toLocaleString()} - Arrival: ${new Date(route.arrivalTime).toLocaleString()} - Price: $${route.price}`;
        resultsList.appendChild(li);
    });
});
