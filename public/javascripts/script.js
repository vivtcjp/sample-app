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
        if (response.status === 200) {
          window.location.href = `/results?origin=${origin}&destination=${destination}&date=${date}`;
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
});