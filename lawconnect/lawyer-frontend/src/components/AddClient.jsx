import React, { useEffect, useState } from 'react';
import { createClient, getClient, updateClient } from '../services/ClientService';
import { useNavigate, useParams } from 'react-router-dom';

const AddClient = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phone, setPhone] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [address, setAddress] = useState('');


  const { id } = useParams();

  const [errors, setErrors] = useState({
    name: '',
    emailId: '',
    phone: '',
    aadharNumber: '',
    address: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id){
      getClient(id)
        .then((response) => {
          setName(response.data.name);
          setEmailId(response.data.emailId);
          setPhone(response.data.phone);
          setAadharNumber(response.data.aadharNumber);
          setAddress(response.data.address);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const saveOrUpdateClient = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const client = { name, emailId, phone, aadharNumber, address };
      console.log(client);

      if (id) {
        updateClient(id, client)
          .then((response) => {
            console.log(response.data);
            navigate('/client');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createClient(client)
          .then((response) => {
            console.log(response.data);
            navigate('/client');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'Client name is required';
      valid = false;
    }

    if (emailId.trim()) {
      errorsCopy.emailId = '';
    } else {
      errorsCopy.emailId = 'E-mail Id is required';
      valid = false;
    }

    if (phone.trim()) {
      errorsCopy.phone = '';
    } else {
      errorsCopy.phone = 'Mobile Number is required';
      valid = false;
    }

    if (aadharNumber.trim()) {
      errorsCopy.aadharNumber = '';
    } else {
      errorsCopy.aadharNumber = 'Aadhar Card Number is required';
      valid = false;
    }

    if (address.trim()) {
      errorsCopy.address = '';
    } else {
      errorsCopy.address = 'Address is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const pageTitle = () => {
    if(id){
      return <h2 className="text-center">Update Client</h2>;
    } else {
      return <h2 className="text-center">Add Client</h2>;
    }
  };

  function returnBack(){
    navigate('/client');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3" style={{ marginTop: '10px' }}>
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  placeholder="Enter Client Name"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <div className="invalid-feedback"> {errors.name} </div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email-Id:</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={emailId}
                  className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
                {errors.emailId && <div className="invalid-feedback"> {errors.emailId} </div>}
              </div>
              <div className="col-auto">
                <span id="emailHelpInline" className="form-text">
                  Must include @.
                </span>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Phone-Number:</label>
                <input
                  type="tel"
                  placeholder="mobile number"
                  name="phone"
                  value={phone}
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {errors.phone && <div className="invalid-feedback"> {errors.phone} </div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">AadharCard-Number:</label>
                <input
                  type="text"
                  placeholder="aadharNumber"
                  name="aadharNumber"
                  value={aadharNumber}
                  className={`form-control ${errors.aadharNumber ? 'is-invalid' : ''}`}
                  onChange={(e) => setAadharNumber(e.target.value)}
                  required
                />
                {errors.aadharNumber && <div className="invalid-feedback"> {errors.aadharNumber} </div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Address:</label>
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  value={address}
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                {errors.address && <div className="invalid-feedback"> {errors.address} </div>}
              </div>

              <div className="col-auto">
                <span id="phoneHelpInline" className="form-text">
                  Must be 10 digits long.
                </span>
              </div>

              <button className="btn btn-success" onClick={saveOrUpdateClient}>
                Submit
              </button>

              <button className="btn btn-warning" onClick={returnBack} style={{margin:'10px'}}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
