import React, { useState } from 'react'
import DoctorService from '../../services/DoctorService';
import styles from './RegisterDoctor.module.css';
import { Link, Navigate,useNavigate } from 'react-router-dom';


function RegisterDoctor() {

  let navigate=useNavigate;

const [doctor,setDoctor]=useState({
    docterName:"",
    specialist:""
})


const handleClick=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setDoctor({... doctor,[name]:value});
}
const saveHandler=(e)=>{
  e.preventDefault();
  console.log("patient =>"+JSON.stringify(doctor));
  DoctorService.createDoctor(doctor).then(res=>{
   navigate('/doctor')
  });

}

 return (
    <div className={styles.container}>
    <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
         <h1 className='text-center'>Register Doctor</h1>
         <div className='card-body'>
            <div class="form-group">
                <label className='my-3'>Doctor Name:</label>
                <input type="text" name="docterName" className='form-control' value={doctor.docterName} onChange={handleClick}/>
            </div>
            <div class="form-group">
                <label className='my-3'>Enter specialist name:</label>
                <input type="text" name="specialist" className='form-control' value={doctor.specialist} onChange={handleClick}/>
            </div>
            <button className='btn btn-success' onClick={saveHandler}>Register Doctor</button>
            
         </div>
        </div>

    </div>
    <button className='btn btn-info'><Link to=''><a  className={styles.doctorHome}   href=''>Home Page</a></Link></button>
  
</div>
  )
}

export default RegisterDoctor;
