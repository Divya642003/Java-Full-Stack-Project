import React, { useEffect, useState } from 'react';
import { deleteLawyer, listLawyers } from '../services/LawyerService';
import { useNavigate } from 'react-router-dom';

const ListLawyers = () => {
  const [lawyers, setLawyers] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
   getAllLawyers();
  }, []);

 function getAllLawyers()
{
  listLawyers() .then((response) => {
           setLawyers(response.data);
      })
        .catch((error) => {
              console.error(error);
         });
}

    function addNewLawyer(){
        navigator('/add-lawyer')
    }

    function updateLawyer(id){
      console.log(id);
      navigator(`/edit-lawyer/${id}`)
    }

    function removeLawyer(id){
      console.log(id);
     
      deleteLawyer(id).then((response) => {getAllLawyers();}
                           ).catch(error =>{console.error(error);})
    }

    function viewLawyer(id){
      navigator(`/view-lawyer/${id}`)
    }

  return (
    <div className='container'>
      <h2 className='text-center mb-6'style={{marginTop:'10px'}}>List of Lawyers</h2>
      <button className="btn btn-primary mb-2" onClick={addNewLawyer}>Add Lawyer</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Lawyer-Id</th>
            <th>Lawyer Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lawyers.map((lawyer) => (
            <tr key={lawyer.id}>
              <td>{lawyer.id}</td>
              <td>{lawyer.name}</td>
              
              <td>
                <button className='btn btn-info' onClick={() => updateLawyer(lawyer.id)}>Update</button>
                <button className='btn btn-danger' onClick={() => removeLawyer(lawyer.id)}
                  style={{marginLeft: '10px'}}
                  >Delete</button>

                <button className='btn btn-warning' onClick={() => viewLawyer(lawyer.id)}
                  style={{marginLeft: '10px'}}
                  >View</button>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListLawyers;
