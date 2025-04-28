import { ClientsSection } from "../components/ClientsSection";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { MainBanner } from "../components/MainBanner";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
    <Navbar />
    <MainBanner />
    <Main />
    <ClientsSection />
    <Footer />
    </>
  );
}