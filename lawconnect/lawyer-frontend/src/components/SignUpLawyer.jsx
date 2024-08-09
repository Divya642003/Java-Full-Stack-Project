import React, { useState } from 'react'
import { createLawyer } from '../services/LawyerService'
import { useNavigate } from 'react-router-dom'

const SignUpLawyer = () => {

    // console.log("signup");
   const navigator = useNavigate();

    const[ name , setName ] = useState('')
    const[ email , setEmail ] = useState('')
    const [address, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')

    const [errors , setErrors] = useState({
        name:'',
        email:'',
        address:'',
        phone:'',
        type:''
      })  

      function saveLawyer(e)
      {
        e.preventDefault();
    
        if(validateform())
       {
    
          const lawyer = {name,email,address,phone,type}
          console.log(lawyer)
    
            createLawyer(lawyer).then((response) => {
              console.log(response.data);
              navigator('/lawyer');
            }).catch(error => {
              console.error(error);
            })
           
      }
      }
      function validateform()
      {
        let valid = true;
    
        const errorsCopy = {... errors}
    
        if(name.trim())
        {
          errorsCopy.name='';
        } else {
          errorsCopy.name='Lawyer name is required';
          valid = false;
        }
    
        if(email.trim())
          {
            errorsCopy.email='';
          } else {
            errorsCopy.email='E-mail Id is required';
            valid = false;
          }
    
          if(address.trim())
            {
              errorsCopy.address='';
            } else {
              errorsCopy.address='Address is required';
              valid = false;
            }
    
            if(phone.trim())
              {
                errorsCopy.phone='';
              } else {
                errorsCopy.phone='Mobile Number is required';
                valid = false;
              }
    
              if(type.trim())
                {
                  errorsCopy.type='';
                } else {
                  errorsCopy.type='select the type';
                  valid = false;
                }
    
                setErrors(errorsCopy);
                return valid;
      }
    
    
      function returnBack(){
        navigator('/Home');
      }
     
      return (
        <div className='container'>
          
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:'10px'}}>
            <h2 className='text-center'>Signup As Lawyer</h2>
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Name:</label>
                    <input
                       type='text'
                        placeholder='Enter Lawyer Name'
                        name='name'
                        value={name}
                        className={`form-control ${errors.name ? 'is-invalid':''}`}
                        onChange={(e) => setName(e.target.value)}
                        required
                      >
                    </input>
                    {errors.name && <div className='invalid feedback'> { errors.name }</div>}
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Email-Id:</label>
                    <input
                       type='email'
                        placeholder='abc@gmail.com'
                        name='email'
                        value={email}
                        className={`form-control ${errors.email ? 'is-invalid':''}`}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      >
                    </input>
                    {errors.email && <div className='invalid feedback'> { errors.email }</div>}
                  </div>
                  <div class="col-auto">
        <span id="emailHelpInline" class="form-text">
          Must include @.
        </span>
      </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Adress:</label>
                    <input
                       type='text'
                        placeholder='address'
                        name='address'
                        value={address}
                       className={`form-control ${errors.address ? 'is-invalid':''}`}
                        onChange={(e) => setAdress(e.target.value)}
                        required
                      >
                    </input>
                     {errors.address && <div className='invalid feedback'> { errors.address}</div>}
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Phone-Number:</label>
                    <input
                       type='tel'
                        placeholder='mobile number'
                        name='phone'
                        value={phone}
                       className={`form-control ${errors.phone ? 'is-invalid':''}`}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      >
                    </input>
                     {errors.phone && <div className='invalid feedback'> { errors.phone }</div>}
                  </div>
                  <div class="col-auto">
        <span id="phoneHelpInline" class="form-text">
          Must be 10 digits long.
        </span>
      </div>
                  <div className='form-group mb-2'>
                  <label for="type">Type</label>
                        <select class="form-control" id="type" required onChange={(e) => setType(e.target.value)}>
                            <option value="">Select type</option>
                            <option value="Civil">Civil</option>
                            <option value="Criminal">Criminal</option>
                           
                        </select>
                  </div>
    
                  <button className='btn btn-success' onClick={saveLawyer}>Submit</button>
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

export default SignUpLawyer