document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    if (origin && destination && date) {
      window.location.href = `/results?origin=${origin}&destination=${destination}&date=${date}`;
    } else {
      alert('All fields are mandatory');
    }
  });
});