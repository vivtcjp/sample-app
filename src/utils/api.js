import axios from 'axios';

export const searchBusRoutes = async (origin, destination, weekday) => {
  try {
    const response = await axios.get(`/search?origin=${origin}&destination=${destination}&weekday=${weekday}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bus routes:', error);
    throw error;
  }
};
