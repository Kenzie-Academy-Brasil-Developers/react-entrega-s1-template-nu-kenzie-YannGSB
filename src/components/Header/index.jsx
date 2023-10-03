import styles from "./style.module.scss";
import nukenzieLogo from "../../assets/nukenzie.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={nukenzieLogo} alt="Logo NuKenzie" />
      </div>
    </header>
  );
};
