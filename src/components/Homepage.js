// Existing content of Homepage.js
// ...

// Update the search button click handler
const handleSearchClick = async () => {
  const response = await fetch('/search', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source: source,
      destination: destination,
      date: date,
    }),
  });
  const data = await response.json();
  // Handle the response data
};

// Existing content of Homepage.js
// ...