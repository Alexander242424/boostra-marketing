"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Embla/EmblaCarousel";
import CaruselCard from "./CaruselCard";
import FadeInUp from "./FadeInUp";
import RoyalQueenSeeds from "@/assets/royal-queen-seeds.svg";
import Avatar from "@/assets/Ellipse 29.svg";

const OPTIONS: EmblaOptionsType = { loop: true };

type Category = "eCommerce" | "SaaS" | "Enterprises";

const categoriesData = {
  eCommerce: [
    {
      image: {
        src: "/boostra-cases/nespresso.webp",
        alt: "nespresso",
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
        src: "/boostra-cases/zara.webp",
        alt: "zara",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title:
        "+45% Revenue Growth in 2 Months with Getboostra Marketing Strategy",
      author: {
        name: "Jane Smith",
        position: "CMO",
        website: "example.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/boostra-cases/gymshark.webp",
        alt: "gymshark",
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
    {
      image: {
        src: "/boostra-cases/royal-queen.webp",
        alt: "royal-queen",
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
    {
      image: {
        src: "/boostra-cases/cbd.webp",
        alt: "cbd",
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
    {
      image: {
        src: "/boostra-cases/wellow.webp",
        alt: "wellow",
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
    {
      image: {
        src: "/boostra-cases/mario-capasa.webp",
        alt: "mario-capasa",
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
        src: "/boostra-cases/archive.webp",
        alt: "archive",
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
        src: "/boostra-cases/paydesk.webp",
        alt: "paydesk",
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
        src: "/boostra-cases/teamex.webp",
        alt: "teamex",
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
        src: "/boostra-cases/loom.webp",
        alt: "loom",
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
        src: "/boostra-cases/mdisrupt.webp",
        alt: "mdisrupt",
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
        src: "/boostra-cases/calendly.webp",
        alt: "calendly",
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
        src: "/boostra-cases/trudy.webp",
        alt: "trudy",
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
  ],
  Enterprises: [
    {
      image: {
        src: "/boostra-cases/nespresso.webp",
        alt: "nespresso",
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
        src: "/boostra-cases/red-bull.webp",
        alt: "red-bull",
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
        src: "/boostra-cases/zara.webp",
        alt: "zara",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title:
        "+45% Revenue Growth in 2 Months with Getboostra Marketing Strategy",
      author: {
        name: "Jane Smith",
        position: "CMO",
        website: "example.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/boostra-cases/schneider.webp",
        alt: "schneider",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title:
        "+45% Revenue Growth in 2 Months with Getboostra Marketing Strategy",
      author: {
        name: "Jane Smith",
        position: "CMO",
        website: "example.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/boostra-cases/deliveroo.webp",
        alt: "deliveroo",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title:
        "+45% Revenue Growth in 2 Months with Getboostra Marketing Strategy",
      author: {
        name: "Jane Smith",
        position: "CMO",
        website: "example.com",
        avatar: <Avatar />,
      },
    },
    {
      image: {
        src: "/boostra-cases/forbes.webp",
        alt: "forbes",
        width: 408,
        height: 408,
      },
      logo: <RoyalQueenSeeds />,
      title:
        "+45% Revenue Growth in 2 Months with Getboostra Marketing Strategy",
      author: {
        name: "Jane Smith",
        position: "CMO",
        website: "example.com",
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

  const categories: Category[] = ["eCommerce", "SaaS", "Enterprises"];

  return (
    <div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[96px] md:py-[160px]"
      style={{
        backgroundImage: 'url("/boostra-updated/Gradient Background 02.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3 md:gap-5 mb-[48px]">
          <p className="matter-p2-med text-gradient-blue">Case Studies</p>
          <h2 className="matter-h2-reg max-w-[978px]">
            Proven conversion lifts for enterprises and online businesses
          </h2>
        </div>
        {/* Tabs with categories */}
        <div className="flex max-w-fit mx-auto bg-bg-white-12 border border-bg-white-12 p-2 rounded-[30px] matter-p4-reg mb-[40px] overflow-x-scroll no-scrollbar">
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
      <FadeInUp key={activeCategory} duration={0.5} delay={0.1} yOffset={30}>
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </FadeInUp>
    </div>
  );
}
