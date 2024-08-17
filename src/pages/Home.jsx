import React from "react";
import Navbar from "../components/common/Navbar";
import Particle from "../components/common/BgParticle";
import Hero from "../components/home/Hero";
import DemoPage from "../components/home/DemoPage";
import Features from "../components/home/Features";
import Workflow from "../components/home/Workflow";
import SampleBook from "../components/home/SampleBook";

const Home = () => {
    return (
        <div className=" relative md:w-11/12 bg-gray-500 max-w-[1300px] px-4 mx-auto ">
            <div className="absolute top-0 left-0 z-0 w-full ">
                <Particle />
            </div>
            <div className="relative z-10 ">
                <Navbar />
                <Hero />
                <DemoPage />
                <Features />
                <Workflow />
                <SampleBook />
            </div>
        </div>
    );
};

export default Home;
