import axios from 'axios';
const axiosInstance = axios.create();
// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status === 202){
      if(response.data.responseDescription.includes("Asset"))
        return Promise.resolve(response);
      const customError = new Error('LONG_RUNNING_ASYNC_ERROR');
      customError.response = {
        data: {
            "timestamp": "",
            "responseStatus": "ERROR",
            "responseDescription": "Server is taking too long to respond",
            "status": "LONG_RUNNING_ASYNC_ERROR",
            "message": "Server is taking too long to respond"
        }
    };
      return Promise.reject(customError);
    }
    return response
  }, function (error) {
      console.log(error);
        let errorResp = {
            response: {
                data: {
                    "timestamp": "",
                    "responseStatus": "ERROR",
                    "responseDescription": "Facing Network Issues, There was no response received",
                    "status": "NETWORK_ERROR"
                }
            }
        };
      
    return Promise.reject(errorResp); 
  });

  export default axiosInstance;