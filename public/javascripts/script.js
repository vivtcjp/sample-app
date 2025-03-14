document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    if (origin && destination && date) {
      try {
        const response = await fetch(`/search?origin=${origin}&destination=${destination}&date=${date}`);
        if (response.ok) {
          const result = await response.json();
          const searchResultsDiv = document.getElementById('search-results');
          searchResultsDiv.innerHTML = '';
          const table = document.createElement('table');
          table.classList.add('material-table');
          const thead = document.createElement('thead');
          const headerRow = document.createElement('tr');
          ['Origin', 'Destination', 'Cost', 'Travel Time', 'Book'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
          });
          thead.appendChild(headerRow);
          table.appendChild(thead);
          const tbody = document.createElement('tbody');
          result.forEach(bus => {
            const row = document.createElement('tr');
            ['origin', 'destination', 'cost', 'travelTime'].forEach(key => {
              const td = document.createElement('td');
              td.textContent = bus[key];
              row.appendChild(td);
            });
            const bookTd = document.createElement('td');
            const bookButton = document.createElement('button');
            bookButton.textContent = 'Book';
            bookButton.addEventListener('click', function() {
              // Handle booking logic here
              alert(`Booking bus from ${bus.origin} to ${bus.destination}`);
            });
            bookTd.appendChild(bookButton);
            row.appendChild(bookTd);
            tbody.appendChild(row);
          });
          table.appendChild(tbody);
          searchResultsDiv.appendChild(table);
        } else {
          alert('Search failed. Please try again.');
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('All fields are mandatory');
    }
  });

  // Material Design enhancements for dropdowns
  const dropdowns = document.querySelectorAll('select');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    dropdown.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });

  // New logic for horizontal seat layout
  const seatSelection = document.querySelector('.seat-selection');
  if (seatSelection) {
    seatSelection.style.flexDirection = 'row';
    const seats = seatSelection.querySelectorAll('.seat');
    seats.forEach(seat => {
      seat.addEventListener('click', function() {
        this.classList.toggle('selected');
      });
    });
  }
});