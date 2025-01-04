import Title from "antd/es/typography/Title";
import Footer from "./components/Footer";
import RentForm from "./modules/Rent-Form";
import Divider from "antd/es/divider";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-8 row-start-2 sm:items-start">
        <Title className="justify-self-center">Rent Calculator</Title>
        <Divider style={{ borderColor: "#7cb305" }}>Calculate the rent split over different incomes</Divider>
        <RentForm />
      </main>
      <Footer />
    </div>
  );
}
