import React from 'react'
import styles from "./Dashboard.module.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

const Dashboard = () => {
  return (
    <>
     <div className={styles.MainContainer}>
     <div className={styles.sidebar}>
       <Sidebar />
     </div>
     <div className={styles.dashboard}>
        <Header />
        </div>     
     </div>
    
    </>
  )
}

export default Dashboard;