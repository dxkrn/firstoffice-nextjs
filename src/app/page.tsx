import BenefitsSection from "@/components/BenefitsSection";
import HeroHeader from "@/components/HeroHeader";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroHeader />

      <CitiesSection />

      <BenefitsSection />

      <FreshSpaceSection />
    </>

  );
}
