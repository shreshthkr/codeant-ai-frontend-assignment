import React from "react";
import styles from "./Sidebar.module.css";
import DesktopLogo from "../../Assets/Images/desktop-logo.png";
import {
  Home,
  CodeXml,
  Cloud,
  Settings,
  LogOut,
  BookText,
  Phone,
} from "lucide-react";
import { sideMenu } from "../../Assets/utils/data";

const Sidebar = () => {
  const iconMapping = {
    Home: <Home size={18} />,
    CodeXml: <CodeXml size={18} />,
    Cloud: <Cloud size={18} />,
    BookText: <BookText size={18} />,
    Settings: <Settings size={18} />,
  };
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sideTop}>
          <div className={styles.logo}>
            <img src={DesktopLogo} alt="CodeAnt AI" />
          </div>
          <div className={styles.userList}>
            <select>
              <option>UtkarshDhairyaPanwar</option>
            </select>
          </div>
          <nav className={styles.menuList}>
            {sideMenu &&
              sideMenu?.map((item, index) => (
                <div key={item.id}>
                  {iconMapping[item.Icon]} <span>{item.title}</span>
                </div>
              ))}
          </nav>
        </div>
        <div className={styles.sideBottom}>
          <div className={styles.menuList}>
            <div>
              <Phone size={18} />
              <span>Support</span>
            </div>
            <div>
              <LogOut size={18} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
