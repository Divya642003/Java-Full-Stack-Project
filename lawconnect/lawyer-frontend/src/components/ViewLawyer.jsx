import React, { useEffect, useState } from 'react';
import { getLawyer } from '../services/LawyerService';
import { useNavigate , useParams } from 'react-router-dom';


const ViewLawyer = () => {

    const { id } = useParams();
    const [lawyer, setLawyer] = useState({});

    useEffect(() => {
        const fetchLawyer = () => {
            getLawyer(id)
                .then((response) => {
                    setLawyer(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching lawyer data:", error);
                });
        };

        if(id){
        fetchLawyer();
        }
    }, [id]);

    const navigator = useNavigate();

    function returnBack(){
        navigator('/lawyer');
      }

    return (
        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'
            style={{margin: '10px',
                padding:'10px',
                 border: '1px solid black'
            }}
            >
            <h2>Lawyer Details</h2>
            {lawyer && (
        <>
          <p>ID: {lawyer.id}</p>
          <p>Name: {lawyer.name}</p>
          <p>Email: {lawyer.email}</p>
          <p>Type: {lawyer.type}</p>
          <p>Mobile: {lawyer.phone}</p>
          <p>Address: {lawyer.address}</p>
        </>
      )}
       <button className="btn btn-warning" onClick={returnBack} style={{margin:'10px'}}>
                Cancel
              </button>
      </div>
        </div>
    );
};

export default ViewLawyer;
