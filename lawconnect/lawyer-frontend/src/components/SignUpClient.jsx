import React, { useState } from 'react'
import { createClient } from '../services/ClientService'
import { useNavigate } from 'react-router-dom'

const SignUpClient = () => {

    // console.log("signup");
   const navigator = useNavigate();

   const [name, setName] = useState('');
   const [emailId, setEmailId] = useState('');
   const [phone, setPhone] = useState('');
   const [aadharNumber, setAadharNumber] = useState('');
   const [address, setAddress] = useState('');
 

    const [errors , setErrors] = useState({
        name:'',
        emailId:'',
        address:'',
        phone:'',
        type:''
      })  

      function save(e)
      {
        e.preventDefault();
    
        if(validateForm())
       {
        
        const client = { name, emailId, phone, aadharNumber, address };
      console.log(client);

        createClient(client)
        .then((response) => {
          console.log(response.data);
          navigator('/client');
        })
        .catch((error) => {
          console.error(error);
        })
           
      }
    }
      
    function validateForm()
    {
        let valid = true;
        const errorsCopy = { ...errors }
    
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
      }
    
      
      function returnBack(){
        navigator('/Home');
      }
     
      return (
        <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3" style={{ marginTop: '10px' }}>
        <h2 className='text-center'>Signup As Client</h2>
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

              <button className="btn btn-success" onClick={save}>
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
  )
}

export default SignUpClient