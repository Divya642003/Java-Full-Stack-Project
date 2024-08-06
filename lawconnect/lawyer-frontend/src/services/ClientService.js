import axios from "axios";


const REST_API_BASE_URL = 'http://localhost:8080/api/client';


export const listClient = () =>  axios.get(REST_API_BASE_URL,{
    auth: {
        username: 'user',
        password: 'password'
      }
})
;

export const createClient = (client) => axios.post(REST_API_BASE_URL,client,{
  auth: {
    username: 'user',
    password: 'password'
     }
    
});                             

export const getClient = (clientId) =>
  axios.get(REST_API_BASE_URL + '/' + clientId,{
  auth: {
    username: 'user',
    password: 'password'
     }
});

export const updateClient = (clientId, client) => axios.put(REST_API_BASE_URL + '/' + clientId,client,{
  auth: {
    username: 'user',
    password: 'password'
     }
});

export const deleteClient = (clientId) => axios.delete(REST_API_BASE_URL + '/' + clientId,{
  auth: {
    username: 'user',
    password: 'password'
     }
});