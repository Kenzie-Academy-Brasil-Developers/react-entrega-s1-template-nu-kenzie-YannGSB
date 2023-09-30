import { FinanceForm } from "../../components/FinanceForm";
import { FinanceList } from "../../components/FinanceList";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <FinanceForm />
      <Total />
      <FinanceList />
    </>
  );
};
