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
          result.forEach(bus => {
            const busDiv = document.createElement('div');
            busDiv.textContent = `Bus from ${bus.origin} to ${bus.destination} on ${bus.date}`;
            searchResultsDiv.appendChild(busDiv);
          });
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
});