import axios from "axios";

// You might want to set a base URL if you have many API requests
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "", // Use environment variable for base URL
});

export default instance;
