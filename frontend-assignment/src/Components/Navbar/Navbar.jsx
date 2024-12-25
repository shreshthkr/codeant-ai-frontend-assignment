import React, { useState } from "react";
import styles from "./Navbar.module.css";
import DesktopLogo from "../../Assets/Images/desktop-logo.png";
import {
  Menu,
  X,
  Code2,
  Shield,
  HelpCircle,
  Settings,
  Headphones,
  LogOut,
  Home,
} from "lucide-react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={DesktopLogo} alt="CodeAnt AI" />
        </div>
        <div className={styles.menu}>
          {!showMenu ? (
            <Menu size={30} onClick={handleMenu} />
          ) : (
            <X size={25} onClick={handleMenu} />
          )}
        </div>
        {showMenu && (
          <div className={styles.mobileMenu}>
            <select className={styles.userSelect}>
              <option>UtkarshDhairyaPanwar</option>
            </select>

            <div className={styles.menuItems}>
              <div className={styles.menuItem}>
                <Home size={20} />
                <span>Repositories</span>
              </div>

              <div className={styles.menuItem}>
                <Code2 size={20} />
                <span>AI Code Review</span>
              </div>

              <div className={styles.menuItem}>
                <Shield size={20} />
                <span>Cloud Security</span>
              </div>

              <div className={styles.menuItem}>
                <HelpCircle size={20} />
                <span>How to Use</span>
              </div>

              <div className={styles.menuItem}>
                <Settings size={20} />
                <span>Settings</span>
              </div>

              <div className={styles.menuItem}>
                <Headphones size={20} />
                <span>Support</span>
              </div>

              <div className={styles.menuItem}>
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
