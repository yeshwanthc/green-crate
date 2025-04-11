
import { HeroComponent } from "../components/home/Hero";
import { TestimonialsSection } from "../components/home/Testimonials";
import { Contact } from "../components/home/Contact";
import Products from "../components/product/Products";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroComponent />
      <Products />
      <TestimonialsSection />
      <Contact />
    </div>
  );
}
