import React from 'react';
import { Search, RefreshCw, Plus } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
        <h1>Repositories</h1>
        <span className={styles.repoCount}>33 total repositories</span>
      </div>
      
      <div className={styles.searchBar}>
        <Search size={20} className={styles.searchIcon} />
        <input type="text" placeholder="Search Repositories" />
      </div>
      
      <div className={styles.actions}>
        <button className={styles.refreshButton}>
          <RefreshCw size={18} />
          <span>Refresh All</span>
        </button>
        <button className={styles.addButton}>
          <Plus size={18} />
          <span>Add Repository</span>
        </button>
      </div>
    </div>
  );
};

export default Header;