import { FunctionComponent } from "react";
import styles from "./Logo.module.css";
const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.circleGorup11}
        alt=""
        src="/circle-gorup-1-1@2x.png"
      />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default Logo;
