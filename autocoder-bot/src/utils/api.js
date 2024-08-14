const API_URL = 'https://api.example.com';

const fetchData = async (endpoint) => {
  const response = await fetch(`${API_URL}/${endpoint}`);
  const data = await response.json();
  return data;
};

export { fetchData };
