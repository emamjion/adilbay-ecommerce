import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
