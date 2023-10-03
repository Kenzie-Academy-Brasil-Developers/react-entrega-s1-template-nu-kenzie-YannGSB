import styles from "./style.module.scss";

export const Total = ({ financeCardList, totalValue }) => {
  if (financeCardList.length === 0) {
    return <></>;
  }
  return (
    <aside>
      <div className={styles.divContainer}>
        <div className={styles.styleContainer}>
          <h3 className="title three">Valor total:</h3>
          <h3 className="title three colorPrimary">{totalValue()}</h3>
        </div>
        <small className="example">O valor se refere ao saldo</small>
      </div>
    </aside>
  );
};
