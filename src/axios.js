import axios, { Axios } from 'axios'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    if(error.response){
      res.data = error.response.data;
      res.status = error.response.status;
      res.header = error.response.headers;
    }else if(error.request){
      console.log(error.request);
    }else{
      console.log("Error", error.message);
    }
    return res;
    // return Promise.reject(error);
});

export default axios