import React, { useEffect, useState } from 'react';
import { getClient } from '../services/ClientService';
import { useNavigate, useParams } from 'react-router-dom';


const ViewClient = () => {

    const { id } = useParams();

    const [client, setClient] = useState({});

    useEffect(() => {
        const fetchClient= () => {
            getClient(id)
                .then((response) => {
                    setClient(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching Client data:", error);
                });
        };

        if(id){
        fetchClient();
        }
    }, [id]);

    const navigate = useNavigate();

    function returnBack(){
        navigate('/client');
    }

    return (
        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'
            style={{margin: '10px',
                padding:'10px',
                 border: '1px solid black'
            }}
            >
            <h2>Clients Details</h2>
            {client && (
        <>
          <p>ID: {client.id}</p>
          <p>Name: {client.name}</p>
          <p>Email: {client.emailId}</p>
          <p>Mobile: {client.phone}</p>
          <p>AadharCard: {client.aadharNumber}</p>
          <p>Address: {client.address}</p>
        </>
        
      )}
      <button className="btn btn-warning" onClick={returnBack}>
                Cancel
              </button>
       
      </div>
        </div>
    );
};

export default ViewClient;
