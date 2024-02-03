import React from 'react'
import { useState } from 'react'
import { Navigate ,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import styles from './RegisterPatient.module.css';
import PatientService from '../../services/PatientService';

function RegisterPatient() {

let navigate= useNavigate();

const [patient,setPatient]=useState({

 patientName:"",
 disease:""

});

const saveHandler=(e)=>{
  e.preventDefault();
  console.log("patient =>"+JSON.stringify(patient));
  PatientService.createPatient(patient).then(res=>{
    navigate('/getpatients')
  });
}



const handleClick=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setPatient({... patient,[name]:value});
}

return (
    <div className={styles.container}>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             <h1 className='text-center'>Register Patient</h1>
             <div className='card-body'>
                <div class="form-group">
                    <label className='my-3'>Patient Name:</label>
                    <input type="text" name="patientName" className='form-control' value={patient.patientName} onChange={handleClick} required/>
                </div>
                <div class="form-group">
                    <label className='my-3'>Enter desease name:</label>
                    <input type="text" name="disease" className='form-control' value={patient.disease}
                    autoComplete='off' placeholder='Enter patient problem'  onChange={handleClick} required/>
                </div>
                <button className='btn btn-success' onClick={saveHandler}>Register</button>
                
             </div>
            </div>

        </div>
        <button className='btn btn-info'><Link to='/'><a className={styles.patientHome} href=''>Home page</a></Link></button>
    </div>
  )
}

export default RegisterPatient;
