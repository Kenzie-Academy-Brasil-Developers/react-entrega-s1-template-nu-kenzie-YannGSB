import styles from "./style.module.scss";

export const FinanceCard = ({ description, value, select, id, removeCard }) => {
  const convertedValue = Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <li
      className={`${styles.listContainer} ${
        select === "Entrada" ? styles.green : styles.grey
      }`}
    >
      <div className={styles.liContainer}>
        <div>
          <h3 className="title three">{description}</h3>
          <p className="body">{select}</p>
        </div>
        <div>
          <span className="body">{convertedValue}</span>
          <button onClick={() => removeCard(id)} className="buttonDelete">
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
