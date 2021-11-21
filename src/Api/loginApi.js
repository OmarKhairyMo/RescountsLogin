import axios from "axios";

export default axios.create({
  baseURL: "https://api-dev.rescounts.com/api/v1/users",
  timeout: 60000,
});
