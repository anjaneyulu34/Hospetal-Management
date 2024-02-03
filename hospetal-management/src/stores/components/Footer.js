import React from 'react'
import styles from './Footer.module.css';

const Footer=()=>{
  return (
    <>
     <div>
        <footer className={styles.footer}>
          <div className={styles.footContainer}>
            <div className={styles.footContent}>
            <h3>About Us</h3>
             <p>hahhh ahhhh<br/>
              ahhhahhhhad d<br/>
              asdasddsadsad<br/>
             </p>
             </div>
             <div className={styles.footContent} id='contact'>
            <h3>Contact Us</h3>
             <p>hahhh ahhhh<br/>
              ahhhahhhhad d<br/>
              asdasddsadsad<br/>
             </p>
             </div>
             <div className={styles.footContent} id='about'>
            <h3>About Us</h3>
             <p>hahhh ahhhh<br/>
              ahhhahhhhad d<br/>
              asdasddsadsad<br/>
             </p>
             </div>
          </div>
            <span>All Right Reserved @2023</span>
        </footer>
      </div>
    
    
    </>
  )
}
export default Footer

