import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import RepoList from "../../Components/RepoList/RepoList";
import Navbar from "../../Components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.MainContainer}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.dashboard}>
          <div className={styles.headerTab}>
            <Header />
          </div>
          <div className={styles.repoTab}>
            <RepoList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
