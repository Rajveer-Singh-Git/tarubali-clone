import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Ritual from './components/Ritual';
import NaturalIngredients from './components/NaturalIngredients';
import Products from './components/Products';
import Producttwo from './components/Producttwo';
import Principles from './components/Principles';
import SacredNumber from './components/SacredNumber';
import MoreThanNumber from './components/MoreThanNumber';
import DailyBodyCare from './components/DailyBodyCare';
import Testimonial from './components/Testimonial';
import ResellerOpportunity from './components/ResellerOpportunity';
import PartnershipForm from './components/PartnershipForm';
import BotanicalJournal from './components/BotanicalJournal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Ritual />
      <NaturalIngredients></NaturalIngredients>
      <Products></Products>
      <Producttwo></Producttwo>
      <Principles></Principles>
      <SacredNumber></SacredNumber>
      <MoreThanNumber></MoreThanNumber>
      <DailyBodyCare></DailyBodyCare>
      <Testimonial></Testimonial>
      <ResellerOpportunity></ResellerOpportunity>
      <PartnershipForm></PartnershipForm>
      <BotanicalJournal></BotanicalJournal>
      <FAQ></FAQ>
      <Footer></Footer>

      <div className="h-[20vh]"></div>
    </main>
  );
}