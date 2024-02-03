import React, { Component } from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
     <>

     <div className={styles.nav}>
      <div className={styles.navItems}>
        <h2>Health Care System</h2>
      <div className={styles.submenu}>
         
          <div className={styles.aa}>
          <a href='#services' className='aa'>Our Services</a>
         
         
          <a href='#contact' className='aa'>Contact</a>
          
          
          <a href='#about' className='aa'>Help</a>
          </div>
          <Link to='patient'>
            <a href=''>Register Patient</a>
          </Link>
          <Link to='doctor'>
            <a href=''>Register Doctor</a>
          </Link>
          <Link to='getpatients'>
            <a href=''>Registered Patients</a>
          </Link>
          
      </div>
      </div>
      </div>
    
     </>
    )
  }
}
