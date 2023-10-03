import { useState } from "react";
import { FinanceForm } from "../../components/FinanceForm";
import { FinanceList } from "../../components/FinanceList";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import styles from "./style.module.scss";

export const LandingPage = () => {
  const [financeCardList, setFinanceCardList] = useState([]);

  const addCard = (description, value, select) => {
    const id = crypto.randomUUID();
    const newCard = { description, value, select, id };
    setFinanceCardList([...financeCardList, newCard]);
  };

  const removeCard = (id) => {
    const filteredList = financeCardList.filter((card) => {
      return card.id !== id ? card : null;
    });

    setFinanceCardList(filteredList);
  };

  const totalValue = () => {
    const finalBalance = financeCardList.reduce((prevValue, currentValue) => {
      const value = parseFloat(currentValue.value);
      return currentValue.select === "Entrada"
        ? prevValue + value
        : prevValue - value;
    }, 0);

    return finalBalance.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Header />
      <main>
        <section className="mainSection">
          <FinanceForm addCard={addCard} />
          <Total financeCardList={financeCardList} totalValue={totalValue} />
        </section>
        <FinanceList
          financeCardList={financeCardList}
          removeCard={removeCard}
        />
      </main>
    </>
  );
};
