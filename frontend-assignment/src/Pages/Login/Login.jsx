import React, { useState } from "react";
import styles from "./Login.module.css";
import DesktopLogo from "../../Assets/Images/desktop-logo.png";
import StaticLogo from "../../Assets/Images/static-logo.png";
import MobLogo from "../../Assets/Images/mob-logo.png";
import Chart from "../../Assets/Images/pie-chart.png";
import { ArrowUp } from "lucide-react";
import { SAASLogin } from "../../Assets/utils/data";
import { SelfLogin } from "../../Assets/utils/data";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.staticContainer}>
          <div className={styles.staticBox}>
            <div>
              <div className={styles.firstBox}>
                <div className={styles.topBox}>
                  <img src={MobLogo} alt="CodeAnt AI" />
                  <p>AI to Detect & Autofix Bad Code</p>
                </div>
                <div className={styles.listBox}>
                  <div className={styles.list}>
                    <p>30+</p>
                    <p>Language Support</p>
                  </div>
                  <div className={styles.list}>
                    <p>10K+</p>
                    <p>Developers</p>
                  </div>
                  <div className={styles.list}>
                    <p>100K+</p>
                    <p>Hours Saved</p>
                  </div>
                </div>
              </div>
              <div className={styles.secondBox}>
                <div className={styles.chartBox}>
                  <img src={Chart} alt="CodeAnt AI" />
                  <div className={styles.arrowBox}>
                    <p>
                      <ArrowUp size={12} /> <span>14%</span>
                    </p>
                    <p>This Week</p>
                  </div>
                </div>
                <div className={styles.issuesBox}>
                  <p>Issues Fixed</p>
                  <p>500K+</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logoBox}>
            <img src={StaticLogo} alt="CodeAnt AI" />
          </div>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <div className={styles.loginBox1}>
              <div className={styles.box1}>
                <img src={DesktopLogo} alt="CodeAnt AI" />
              </div>
              <div className={styles.box2}>
                <h1>Welcome to CodeAnt AI</h1>
              </div>
              <div className={styles.box3}>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    borderRadius: selected === 1 ? "10px" : "5px",
                    backgroundColor: selected === 1 ? "blue" : "transparent",
                    color: selected === 1 ? "#fff" : "#000",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  onClick={() => setSelected(1)}
                >
                  <p>SAAS</p>
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    borderRadius: selected === 2 ? "10px" : "5px",
                    backgroundColor: selected === 2 ? "blue" : "transparent",
                    color: selected === 2 ? "#fff" : "#000",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  onClick={() => setSelected(2)}
                >
                  <p>Self Hosted</p>
                </div>
              </div>
            </div>
            <div className={styles.loginBox2}>
              {selected === 1 &&
                SAASLogin.map((el, index) => (
                  <div
                    className={styles.loginList}
                    onClick={() => navigate("/")}
                  >
                    <img src={el?.image} alt={el?.title} />
                    <p>{el?.title}</p>
                  </div>
                ))}
              {selected === 2 &&
                SelfLogin.map((el, index) => (
                  <div
                    className={styles.loginList}
                    onClick={() => navigate("/")}
                  >
                    <img src={el?.image} alt={el?.title} />
                    <p>{el?.title}</p>
                  </div>
                ))}
            </div>
            <div className={styles.loginBox3}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
