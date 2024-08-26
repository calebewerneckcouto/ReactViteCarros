import './styles.css';
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import SectionCars from '../../components/SectionCars';


export default function Catalog() {
  return (
    <>
      <Header />
      <main className="ct-catalog-main">
        <section id="ct-catalog-section" className="ct-container">
          <div className="ct-search-bar-container">
            <SearchBar />
          </div>

          <div className="ct-catalog-cards-container">
            {/* Render multiple Card components */}
            {Array(10).fill(null).map((_, index) => (
              <Card key={index} />
            ))}
          </div>    

          
        </section>
       
       
      </main>
      
      <Footer />
    </>
  );
}
