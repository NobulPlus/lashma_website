import axios from "axios";

const API_URL = "https://lashma-server.onrender.com/api/blogs"; // Update to your backend URL

const getAllBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const getRecentBlogs = async (limit = 3) => {
  const response = await axios.get(`${API_URL}?limit=${limit}`);
  return response.data;
};

export { getAllBlogs, getBlogById, getRecentBlogs };