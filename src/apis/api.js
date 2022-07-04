import axios from "axios";

const apiServer = async (route) => {
  const response = await axios.create(`http://localhost:3001/${route}`);
  return response;
};

export default apiServer;
