import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/Lawyer";


export const listLawyers = () =>  axios.get(REST_API_BASE_URL,{
    auth: {
        username: 'user',
        password: 'password'
      }
    }
);

export const createLawyer = (lawyer) => axios.post(REST_API_BASE_URL,lawyer,{
  auth: {
    username: 'user',
    password: 'password'
     }
    
});                             

export const getLawyer = (lawyerId) => axios.get(REST_API_BASE_URL + '/' + lawyerId,{
  auth: {
    username: 'user',
    password: 'password'
     }
});

export const updateLawyer = (lawyerId, lawyer) => axios.put(REST_API_BASE_URL + '/' + lawyerId,lawyer,{
  auth: {
    username: 'user',
    password: 'password'
     }
});

export const deleteLawyer = (lawyerId) => axios.delete(REST_API_BASE_URL + '/' + lawyerId,{
  auth: {
    username: 'user',
    password: 'password'
     }
});