// Existing content of api.js
// ...

// Update the search API call
export const searchBusRoutes = async (source, destination, date) => {
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
  return data;
};

// Existing content of api.js
// ...