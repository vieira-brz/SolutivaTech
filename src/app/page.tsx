import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
  return (
    <div className='flex flex-col gap-0'>
      <Header />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;