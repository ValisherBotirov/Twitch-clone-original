import axios from "axios";

const apiServer = async (route) => {
  return await axios.create(`http://localhost:3001/${route}`);
};

export default apiServer;
