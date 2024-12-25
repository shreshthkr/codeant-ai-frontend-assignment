import React from "react";
import { ReposList } from "../../Assets/utils/data";
import styles from "./RepoList.module.css";
import RepoCard from "../RepoCard/RepoCard";

const RepoList = () => {
  return (
    <div className={styles.grid_wrapper}>
      <div className={styles.grid}>
        {ReposList &&
          ReposList.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default RepoList;
