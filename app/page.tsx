import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import CatalogSection from '@/components/home/CatalogSection';
import WhyUs from '@/components/home/WhyUs';
import ProjectsSection from '@/components/home/ProjectsSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CatalogSection />
      <WhyUs />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
