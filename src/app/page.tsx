"use client"
import AboutUs from "@/Components/Home/AboutUs/AboutUs";
import Banner from "@/Components/Home/Banner/Banner";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import MyAchievement from "@/Components/Home/MyAchievement/MyAchievement";
import MyBlogs from "@/Components/Home/MyBlogs/MyBlogs";
import MyExpertise from "@/Components/Home/MyExpertise/MyExpertise";
import MyWorkStatus from "@/Components/Home/MyWorkStatus/MyWorkStatus";
import Projects from "@/Components/Home/Projects/Projects";
import Skills from "@/Components/Home/Skills/Skills";
import WorkExperience from "@/Components/Home/WorkExperience/WorkExperience";
import { scaleRotate as Menu } from "react-burger-menu";
import loading from '../assets/image/img/loading.gif'
import { Link } from 'react-scroll';
import { Suspense } from "react";
import Image from "next/image";
import Login from "@/Components/Home/Banner/Login";
export default function Home() {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#ffffff",
    },
    bmBurgerBarsHover: {
      background: "#c32865",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#1c1c1c",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <>
     <Suspense fallback={<Image width={1000} height={1000} className='min-w-full' src={loading} alt='loading image' />}>
   <section>
       <Menu
        styles={styles}
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Link to="home" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          Home
        </Link>
        <br />
        <Link to="Expertise" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          My Expertise
        </Link>
        <br />
        <Link to="about" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          About Me
        </Link>
        <br />
        <Link to="skills" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          My Skills
        </Link>
        <br />
        <Link to="project" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          My Project
        </Link>
        <Link to="achievement" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          My Achievement
        </Link>
        <Link to="contact" className="menu-item text-center text-[#c32865] font-bold mb-2" smooth={true} duration={500}>
          Contact Me
        </Link>
        <Login></Login>
       
   
      </Menu>
      <div id="outer-container">
     
      <div id="page-wrap">
      <Banner></Banner>
      <MyWorkStatus></MyWorkStatus>
      <MyExpertise></MyExpertise>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Projects></Projects>
      <WorkExperience></WorkExperience>
      <MyBlogs></MyBlogs>
      <MyAchievement></MyAchievement>
      <ContactUs></ContactUs>
      </div>
    </div>
    </section>
   </Suspense>
    </>
    
  );
}
