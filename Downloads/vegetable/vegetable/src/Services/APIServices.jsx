import axios from 'axios'; // Import the axios library

const baseUrl = "http://10.81.4.89:2022/api/admin/getonecategory?catName=vegetables"; 


const instance = axios.create({
  baseURL: 'http://10.81.4.89:2022', // Set your base URL here
});

// Add a response interceptor to the Axios instance
instance.interceptors.response.use(
  (response) => {
    return response.data; // You may want to return just the data part of the response
  },
  (error) => {
    if (error.response) {
      
      console.error('HTTP error:', error.response.status);

      if (error.response.status === 404) {
        console.error('Resource not found');
      }
    } else if (error.request) {
      console.error('Request made but no response received');
    } else {
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

function getProductsByCatg() {
  return instance.get('/api/admin/getonecategory?catName=vegetables'); // Use the instance to make the request
}


export default new (class ApiService {

    getProductsByCatg(data) {
   
        return axios.get(`${baseUrl}`);
    
  }
}
)
