import axios from 'axios';
import authHeader from './auth-header';


const API_URL = (window.location.hostname === "localhost") 
  ? "http://localhost:8080/api/test/"  // Local environment URL
  : "http://backend:8080/api/test/";  // Kubernetes service name (assuming "backend" is the name of your backend service in the cluster)


class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
