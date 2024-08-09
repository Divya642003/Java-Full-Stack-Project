import React, {useEffect, useState}from 'react';
import { listClient, deleteClient } from '../services/ClientService';
import { useNavigate } from 'react-router-dom';


const ListClient = () => {

       const [client , setClient] = useState([]);

       const navigator = useNavigate();

       useEffect(()=> {
        getAllClients();
       }, []);

       function getAllClients()
       {
        listClient() .then((response) => {
                setClient(response.data);
             })
             .catch((error) => {
            console.error(error);
            });
       }

    function addNewClient(){
        navigator('/add-client')
    }

    function updateClient(id){
      console.log(id);
      navigator(`/edit-client/${id}`)
    }

    function removeClient(id){
      console.log(id);
     
      deleteClient(id).then((response) => {getAllClients();}
                           ).catch(error =>{console.error(error);})
    }

    function viewClient(id){
      navigator(`/view-client/${id}`)
    }


  return (
    <div className='container'>
      <h2 className='text-center text-light' style={{marginTop:'10px'}}>List of Clients</h2>
      <button className="btn btn-primary mb-2" onClick={addNewClient}>Add Client</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
     
          <tbody>
            { 
                client.map((obj) =>  (
                    <tr key ={obj.id}>
                       <td> {obj.id} </td>
                       <td>{obj.name}</td>
                     
                       <td>
                       <a className='btn btn-info' onClick={() => updateClient(obj.id)}>Update</a>
                       <button className='btn btn-danger' onClick={() => removeClient(obj.id)} style={{marginLeft: '10px'}}>Delete</button>
                       <button className='btn btn-warning' onClick={() => viewClient(obj.id)} style={{marginLeft: '10px'}}>View</button>  
                       </td>
                    </tr>
                )) 
            }
          </tbody>
      </table>
    </div>
  );
};

export default ListClient;
