import { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { options } from "../../data/options";
import styles from "./style.module.scss";

export const FinanceForm = ({ addCard }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("Entrada");

  const submit = (e) => {
    e.preventDefault();

    addCard(description, value, select);

    setDescription("");
    setValue("");
  };

  const handleChangeSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.formContainer}>
          <Input
            label="Descrição"
            id="description"
            type="text"
            placeholder="Digite aqui sua descrição"
            value={description}
            setValue={setDescription}
            small={true}
            SmallText="Ex: Compra de roupas"
          />

          <Input
            label="Valor (R$)"
            id="value"
            type="number"
            placeholder="1"
            value={value}
            setValue={setValue}
            small={false}
          />

          <Select
            name="valueType"
            id="valueType"
            text="Tipo de valor"
            options={options}
            value={select}
            onChange={handleChangeSelect}
          />

          <button type="submit" className="button">
            Inserir Valor
          </button>
        </div>
      </form>
    </>
  );
};
