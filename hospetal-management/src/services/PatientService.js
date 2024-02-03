import axios from "axios";



const PATIENT_BASE_URL="http://localhost:6161/pd/patient";
class PatientService{

 getPatients(){
  return axios.get(PATIENT_BASE_URL);
 }
 createPatient(patient){
    return axios.post(PATIENT_BASE_URL,patient);
  }
  deletePatient(id){
    return axios.delete(PATIENT_BASE_URL+'/'+id);
  }
}
export default new PatientService();