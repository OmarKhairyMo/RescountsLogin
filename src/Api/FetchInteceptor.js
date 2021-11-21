import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { TOKEN_PAYLOAD_KEY } from "../constants/appConfigrations";

const service = axios.create({
  baseURL: "https://api-dev.rescounts.com/api/v1/users",
  timeout: 60000,
});
// API Request interceptor
service.interceptors.request.use((config) => {
  const getToken = async () => {
    try {
      const appToken = await AsyncStorage.getItem("@app_token");
      return appToken;
    } catch (error) {
      console.log(error);
    }
  };
  const jwtToken = getToken();
  if (jwtToken) {
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`;
  }
});
export default service;
