import "./globals.css";

import About from "@/app/components/sections/About";
import SectionHome from "@/app/components/sections/Home";
import SectionExperience from "@/app/components/sections/Experience";
import SectionSkills from "@/app/components/sections/Skills";
import SectionProjects from "@/app/components/sections/Projects";
import SectionContact from "@/app/components/sections/Contact";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

export default async function Home() {
  return (
    <>
      <main className="bg-black lg:bg-white lg:bg-[url('/images/home-bg-black.svg')] bg-cover bg-no-repeat">
        <NavBar></NavBar>
        <SectionHome></SectionHome>
        <About></About>
      </main>
      <main className="lg:bg-[url('/images/experience-bg.svg')] bg-right bg-cover bg-no-repeat">
        <SectionExperience></SectionExperience>
        <SectionSkills></SectionSkills>
      </main>
      <SectionProjects />
      <SectionContact />
      <Footer />
    </>
  );
}
