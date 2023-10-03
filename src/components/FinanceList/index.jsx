import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({ financeCardList, removeCard }) => {
  if (financeCardList.length === 0) {
    return (
      <section className={styles.sectionContainer}>
        <h3 className="title three">Resumo financeiro</h3>
        <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
      </section>
    );
  }

  return (
    <section className={styles.sectionContainer}>
      <h3 className={`title three ${styles.title}`}>Resumo financeiro</h3>
      <ul className={styles.listContainer}>
        {financeCardList.map((card) => {
          const { description, value, select, id } = card;
          return (
            <>
              <FinanceCard
                description={description}
                value={value}
                select={select}
                key={id}
                id={id}
                removeCard={removeCard}
              />
            </>
          );
        })}
      </ul>
    </section>
  );
};
