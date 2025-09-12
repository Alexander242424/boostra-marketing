"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Embla/EmblaCarousel";
import CaruselCard from "./CaruselCard";
import { FadeInUpGroup, FadeInUpItem } from "./FadeInUpGroup";
import RoyalQueenSeeds from "@/assets/royal-queen-seeds.svg";
import Avatar from "@/assets/Ellipse 29.svg";
import ArchiveLogo from "@/assets/logo Case Studies/archive.svg";
import CalendlyLogo from "@/assets/logo Case Studies/calendly.svg";
import DeliverooLogo from "@/assets/logo Case Studies/deliveroo.svg";
import DiamondCbdLogo from "@/assets/logo Case Studies/diamond cbd.svg";
import ForbesLogo from "@/assets/logo Case Studies/forbes.svg";
import GymsharkLogo from "@/assets/logo Case Studies/gymshark.svg";
import LoomLogo from "@/assets/logo Case Studies/loom.svg";
import MarioCapasaLogo from "@/assets/logo Case Studies/mario capasa.svg";
import MdisruptLogo from "@/assets/logo Case Studies/mdisrupt.svg";
import NespressoLogo from "@/assets/logo Case Studies/nespresso.svg";
import PaydeskLogo from "@/assets/logo Case Studies/paydesk.svg";
import RedBullLogo from "@/assets/logo Case Studies/red bull.svg";
import SchneiderLogo from "@/assets/logo Case Studies/schneider.svg";
import TeamexLogo from "@/assets/logo Case Studies/teamex.svg";
import TrudyLogo from "@/assets/logo Case Studies/trudy.svg";
import WellowLogo from "@/assets/logo Case Studies/wellow.svg";
import ZaraLogo from "@/assets/logo Case Studies/zara.svg";
import { useIsMobile } from "@/hooks/useIsMobile";

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
      logo: <NespressoLogo />,
      title: "+17% Subscription Orders in 4 Weeks After a 5-Minute Getboostra Analysis of Nespresso",
      author: {
        name: "Claire Dubois",
        position: "Global eCommerce Director",
        website: "Nespresso",
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
      logo: <ZaraLogo />,
      title:
        "+22% Mobile Checkout Rate in 3 Weeks After a 5-Minute Getboostra Analysis of Zara US",
      author: {
        name: "Michael Torres",
        position: "Head of Digital Growth US",
        website: "Zara US",
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
      logo: <GymsharkLogo />,
      title: "+28% Account Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis of Gymshark.com",
      author: {
        name: "Sophie Bennett",
        position: "Performance Marketing Manager",
        website: "Gymshark.com",
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
      title: "+19% Repeat Purchases in 1 Month After a 5-Minute Getboostra Analysis of RoyalQueenSeeds.com",
      author: {
        name: "Jonas Vermeer",
        position: "Head of Online Sales",
        website: "RoyalQueenSeeds.com",
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
      logo: <DiamondCbdLogo />,
      title: "+26% Add-to-Cart Rate in 3 Weeks After a 5-Minute Getboostra Analysis of DiamondCBD.com",
      author: {
        name: "Rachel Kim",
        position: "Director of Conversion Optimization",
        website: "DiamondCBD.com",
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
      logo: <WellowLogo />,
      title: "+31% First-Time Orders in 1 Month After a 5-Minute Getboostra Analysis of WearWellow.com",
      author: {
        name: "David Lam",
        position: "VP of Growth & Retention",
        website: "WearWellow.com",
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
      logo: <MarioCapasaLogo />,
      title: "+24% Returning Customers in 4 Weeks After a 5-Minute Getboostra Analysis of MarioCasapa.com",
      author: {
        name: "Lucia Romano",
        position: "Head of eCommerce",
        website: "MarioCasapa.com",
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
      logo: <ArchiveLogo />,
      title: "+34% Demo Requests in 3 Weeks After a 5-Minute Getboostra Analysis of Archive.com",
      author: {
        name: "Alex Chen",
        position: "Chief Marketing Officer",
        website: "Archive.com",
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
      logo: <PaydeskLogo />,
      title: "+38% Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis of Journalist.net",
      author: {
        name: "Emily Harper",
        position: "VP of Product Growth",
        website: "Journalist.net",
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
      logo: <TeamexLogo />,
      title: "+23% Trial Activations in 2 Weeks After a 5-Minute Getboostra Analysis of Teamex.io",
      author: {
        name: "Martin Keller",
        position: "Head of Customer Acquisition",
        website: "Teamex.io",
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
      logo: <LoomLogo />,
      title: "+18% User Retention in 1 Month After a 5-Minute Getboostra Analysis of Loom.com",
      author: {
        name: "Priya Patel",
        position: "Director of User Growth",
        website: "Loom.com",
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
      logo: <MdisruptLogo />,
      title: "+27% Qualified Leads in 3 Weeks After a 5-Minute Getboostra Analysis of mDisrupt.com",
      author: {
        name: "Daniel Ortiz",
        position: "VP of Business Development",
        website: "mDisrupt.com",
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
      logo: <CalendlyLogo />,
      title: "+32% Paid Upgrades in 1 Month After a 5-Minute Getboostra Analysis of Calendly.com",
      author: {
        name: "Hannah Lee",
        position: "Senior Growth Marketing Manager",
        website: "Calendly.com",
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
      logo: <TrudyLogo />,
      title: "+25% Active Daily Users in 3 Weeks After a 5-Minute Getboostra Analysis of Trudy.app",
      author: {
        name: "Victor Alvarez",
        position: "CEO & Co-Founder",
        website: "Trudy.app",
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
      logo: <NespressoLogo />,
      title: "+17% Subscription Orders in 4 Weeks After a 5-Minute Getboostra Analysis of Nespresso",
      author: {
        name: "Claire Dubois",
        position: "Global eCommerce Director",
        website: "Nespresso",
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
      logo: <RedBullLogo />,
      title: "+19% Event Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis of RedBull.com",
      author: {
        name: "Laura Stein",
        position: "Global Head of Digital Marketing",
        website: "RedBull.com",
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
      logo: <ZaraLogo />,
      title:
        "+22% Mobile Checkout Rate in 3 Weeks After a 5-Minute Getboostra Analysis of Zara US",
      author: {
        name: "Michael Torres",
        position: "Head of Digital Growth US",
        website: "Zara US",
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
      logo: <SchneiderLogo />,
      title:
        "+27% Lead Conversions in 1 Month After a 5-Minute Getboostra Analysis of Schneider-Electric.com",
      author: {
        name: "Andreas Müller",
        position: "VP of Digital Sales Transformation",
        website: "Schneider-Electric.com",
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
      logo: <DeliverooLogo />,
      title:
        "+23% New Customer Orders in 2 Weeks After a 5-Minute Getboostra Analysis of Deliveroo.com",
      author: {
        name: "Emma Clarke",
        position: "Director of Growth Marketing",
        website: "Deliveroo.com",
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
      logo: <ForbesLogo />,
      title:
        "+29% Newsletter Sign-Ups in 1 Month After a 5-Minute Getboostra Analysis of Forbes.com",
      author: {
        name: "Jane Smith",
        position: "James Whitman, Chief Digital Officer",
        website: "Forbes.com",
        avatar: <Avatar />,
      },
    },
  ],
};

export default function CarouselSection() {
  const isMobile = useIsMobile();
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
        backgroundImage: isMobile
        ? 'url("/Backgrounds boostra/mobile/Background Case Studies-min.jpg")'
        : 'url("/Backgrounds boostra/desktop/Background Case Studies-min.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <FadeInUpGroup className="mx-auto px-4" staggerDelay={0.1}>
        <FadeInUpItem index={0} className="flex flex-col items-center text-center gap-3 md:gap-5 mb-[48px]">
          <p className="matter-p2-med text-gradient-blue">Case Studies</p>
          <h2 className="matter-h2-reg max-w-[978px]">
            Proven conversion lifts for enterprises and online businesses
          </h2>
        </FadeInUpItem>
        {/* Tabs with categories */}
        <FadeInUpItem index={1} className="flex max-w-fit mx-auto bg-bg-white-12 border border-bg-white-12 p-2 rounded-[30px] matter-p4-reg mb-[40px] overflow-x-scroll no-scrollbar gap-1">
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
        </FadeInUpItem>
        <FadeInUpItem key={activeCategory} index={2} duration={0.5} yOffset={30}>
          <EmblaCarousel slides={slides} options={OPTIONS} />
        </FadeInUpItem>
      </FadeInUpGroup>
    </div>
  );
}
