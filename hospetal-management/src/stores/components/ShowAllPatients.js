import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PatientService from '../../services/PatientService';
import styles from './ShowAllPatients.module.css';


export default class ShowAllPatients extends Component {
    constructor(props){
        super(props);
        this.state={
            patients:[]
        }
    }
   componentDidMount(){
    PatientService.getPatients().then((res)=>{
        this.setState({patients:res.data})
    })
   }
   
    deletePatient=(id)=>{
                PatientService.deletePatient(id).then(res=>{
                  PatientService.getPatients().then(res=>{
                    this.setState({patients:res.data})
                  })

                }).catch(error=>{
                  console.log(error);
                })
    }
   render() {
      return (
        <div class={styles.showContainer}>
        <h2 className='text-center'>Patients Information</h2>
        <div className='row'>
        <Link to="/patient" className='btn btn-outline-primary mt-4 w-100'>Add Patient</Link>

        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
                <th>ID</th>
                <th>Patient Name</th>
                <th>disease Name</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.patients.map(patients=>{
                    return <tr>
                        <td>{patients.patientId}</td>
                        <td>{patients.patientName}</td>
                        <td>{patients.disease}</td>
                       <td>
                          <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=> 
                             this.deletePatient(patients.patientId)}>Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
        </div>
       <button className='btn btn-info'> <Link to='/'><a className={styles.homepage} href=''>Home Page</a></Link></button>
      </div>
    )
  }
}
