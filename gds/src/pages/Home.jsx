import { Budget } from "../components/Budget";
import { ClientsSection } from "../components/ClientsSection";
import { Footer } from "../components/Footer";
import { LocationSection } from "../components/LocationSection";
import { Main } from "../components/Main";
import { MainBanner } from "../components/MainBanner";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

export function Home() {
  return (
    <>
    <Navbar />
    <MainBanner />
    <Main />
    <Products />
    <Budget />
    <LocationSection />
    <ClientsSection />
    <Footer />
    </>
  );
}