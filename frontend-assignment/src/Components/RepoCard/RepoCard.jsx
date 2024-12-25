import React from "react";
import { FileCode, Lock, Globe } from "lucide-react";
import styles from "./RepoCard.module.css";

const RepoCard = ({ repo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <FileCode size={20} className={styles.icon} />
          <h3 className={styles.title}>{repo.name}</h3>
        </div>
        <div
          className={`${styles.visibility} ${
            styles[repo.visibility.toLowerCase()]
          }`}
        >
          {repo.visibility === "Private" ? (
            <Lock size={14} />
          ) : (
            <Globe size={14} />
          )}
          {repo.visibility}
        </div>
      </div>

      <p className={styles.description}>{repo.description}</p>

      <div className={styles.footer}>
        <div className={styles.language}>
          {repo.language}
          <span
            className={`${styles.languageDot} ${
              styles[repo.language.toLowerCase()]
            }`}
          />
        </div>
        <div className={styles.meta}>
          <span>{repo.size}</span>
          <span>Updated {repo.updatedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
