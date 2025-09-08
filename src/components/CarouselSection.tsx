"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Embla/EmblaCarousel";
import CaruselCard from "./CaruselCard";
import FadeInUp from "./FadeInUp";
import RoyalQueenSeeds from "@/assets/royal-queen-seeds.svg";
import Avatar from "@/assets/Ellipse 29.svg";

const OPTIONS: EmblaOptionsType = { loop: true };

type Category = "eCommerce" | "SaaS" | "Startups" | "Enterprises";

const categoriesData = {
  eCommerce: [
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "ecommerce-card-1",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "+38% Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis",
      author: {
        name: "John Doe",
        position: "CEO",
        website: "royalqueenseeds.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "ecommerce-card-2",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "+45% Revenue Growth in 2 Months with Getboostra Marketing Strategy",
      author: {
        name: "Jane Smith",
        position: "CMO",
        website: "example.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "ecommerce-card-3",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "Tripled Our Conversion Rate Using Getboostra Analytics Dashboard",
      author: {
        name: "Mike Johnson",
        position: "CTO",
        website: "techstartup.com",
        avatar: <Avatar />,
      },
    },
  ],
  SaaS: [
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "saas-card-1",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "50% Increase in User Engagement with Getboostra Personalization",
      author: {
        name: "Sarah Wilson",
        position: "Product Manager",
        website: "productco.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "saas-card-2",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "Reduced Customer Acquisition Cost by 60% with Getboostra Optimization",
      author: {
        name: "David Brown",
        position: "Growth Lead",
        website: "growthhack.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "saas-card-3",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "+120% MRR Growth in 6 Months with Getboostra Analytics",
      author: {
        name: "Alex Chen",
        position: "Founder",
        website: "saasstartup.io",
        avatar: <Avatar />,
      },
    },
  ],
  Startups: [
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "startup-card-1",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "From 0 to 10K Users in 3 Months with Getboostra Growth Strategy",
      author: {
        name: "Emma Davis",
        position: "Co-founder",
        website: "startupx.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "startup-card-2",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "Secured Series A Funding After Getboostra Market Analysis",
      author: {
        name: "Ryan Miller",
        position: "CEO",
        website: "innovate.tech",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "startup-card-3",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "200% Increase in Product-Market Fit Score with Getboostra",
      author: {
        name: "Lisa Park",
        position: "Head of Product",
        website: "nextgen.app",
        avatar: <Avatar />,
      },
    },
  ],
  Enterprises: [
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "enterprise-card-1",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "Transformed Enterprise Sales Process with Getboostra Analytics",
      author: {
        name: "Michael Thompson",
        position: "VP of Sales",
        website: "enterprisecorp.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "enterprise-card-2",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "Optimized Enterprise Customer Journey with Getboostra Insights",
      author: {
        name: "Jennifer Lee",
        position: "Director of Marketing",
        website: "globalenterprise.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/carusel/Frame 2147229334.png",
        alt: "enterprise-card-3",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title: "Scaled Enterprise Operations 5x with Getboostra Automation",
      author: {
        name: "Robert Garcia",
        position: "COO",
        website: "megaenterprise.com",
        avatar: <Avatar />,
      },
    },
  ],
};

export default function CarouselSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("eCommerce");

  const currentData = categoriesData[activeCategory];
  const slides = currentData.map((data, index) => (
    <CaruselCard
      key={`${activeCategory}-${index}`}
      image={data.image}
      logo={data.logo}
      title={data.title}
      author={data.author}
    />
  ));

  const categories: Category[] = ["eCommerce", "SaaS", "Startups", "Enterprises"];

  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[96px] md:py-[160px]"
      style={{
        backgroundImage:
          'url("/Gradients/Desktop/Gradient Background  02.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3 md:gap-5 mb-[48px]">
          <p className="matter-p2-med text-gradient-blue">Case Studies</p>
          <h2 className="matter-h2-reg">Verified by big Ol famous brands</h2>
        </div>
        {/* Tabs with categories */}
        <div className="flex max-w-fit mx-auto bg-bg-white-12 border border-bg-white-12 p-2 rounded-[30px] matter-p4-reg mb-[40px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex rounded-[30px] px-[12px] py-[8px] transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-bg-white-12 text-white"
                  : "hover:text-white hover:bg-bg-white-6"
              }`}
            >
              <p>{category}</p>
            </button>
          ))}
        </div>
      </div>
      <FadeInUp 
        key={activeCategory} 
        duration={0.5} 
        delay={0.1}
        yOffset={30}
      >
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </FadeInUp>
    </div>
  );
}
