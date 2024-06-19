import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Services from '@/components/Services';

const Home = () => {
  return (
    <div className='flex flex-col gap-0'>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;