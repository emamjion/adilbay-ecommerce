import DeliveryBanner from "@/components/Home/DeliveryBanner";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import HeroSection from "@/components/Home/HeroSection";
import PopularProducts from "@/components/Home/PopularProducts";

const Homepage = () => {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <FeaturedCategories />
      <PopularProducts />
      <DeliveryBanner />
    </section>
  );
};

export default Homepage;
