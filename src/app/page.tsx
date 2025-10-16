import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Coverage from '@/components/Coverage';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      <Header />
      <Hero
        title="Mantenimiento Industrial y Servicios Eléctricos en Colombia"
        subtitle="Mantenimiento preventivo, correctivo y servicios eléctricos especializados con tecnología predictiva que identifica fallas antes de que ocurran"
        showImage={true}
      />
      <Services />
      <Industries />
      <Coverage />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

