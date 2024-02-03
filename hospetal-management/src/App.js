
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage';
import Footer from './stores/components/Footer';
import Container from './stores/components/Container';
import RegisterPatient from './stores/components/RegisterPatient';
import RegisterDoctor from './stores/components/RegisterDoctor';
import ShowAllPatients from './stores/components/ShowAllPatients';


const App=()=> {
  return (
    <>
    
    <Container>
    
    <div className='bc'>
      <Router>
      <Routes>
        <Route path='/'  element={<LandingPage/>}></Route>
        <Route path='/patient' element={<RegisterPatient/>}></Route>
        <Route path='/doctor' element={<RegisterDoctor/>}></Route>
        <Route path='/getpatients' element={<ShowAllPatients/>}></Route>
      </Routes>
      </Router>
    </div>
    </Container>
     
   
     

    <Footer/>
    
    

    </>
  );
}

export default App;
