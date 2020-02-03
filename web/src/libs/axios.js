import axios from 'axios';
import ApiService from './../services/api.service'
import { TokenService } from './../services/storage.service';
import api from './../config/api';

// Set the base URL of the API
ApiService.init(api.ROOT_URL_API);

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

export default axios;
