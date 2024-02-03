import axios from "axios";



const DOCTOR_BASE_URL="http://localhost:7171/ihub/doctor";
class DoctorService{

 createDoctor(doctor){
    return axios.post(DOCTOR_BASE_URL,doctor);
  }
}
export default new DoctorService();