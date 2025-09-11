"use client";
import Image from "next/image";
import Stars from "@/assets/stars.tsx";
import { useState, useLayoutEffect } from "react";

interface CaruselCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  logo: React.ReactNode;
  title: string;
  author: {
    name: string;
    position: string;
    website: string;
    avatar: React.ReactNode;
  };
}

export default function CaruselCard({
  image,
  logo,
  title,
  author,
}: CaruselCardProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      const newIsSmallScreen = window.innerWidth < 1280;
      setIsSmallScreen(newIsSmallScreen);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row xl:gap-10 p-2 rounded-[32px] bg-bg-white-12 w-full h-full min-w-[343px] max-w-[343px] xl:max-h-[496px] xl:max-w-[1032px]">
      <Image
        className="w-full h-full max-w-[327px] xl:max-w-[408px] xl:max-h-[408px] rounded-[20px]"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <div className="flex flex-col xl:mr-10 px-4 xl:px-0 my-6 xl:my-8">
        {!isSmallScreen ? (
          <>
            <div className="flex flex-col gap-[21.33px] md:gap-[28px]">
              <div className="flex items-center">
                {logo}
                <div className="ml-auto">
                  <Stars />
                </div>
              </div>
              <h6 className="matter-h6-reg">{title}</h6>
            </div>
            <div className="flex gap-3 items-center mt-[64px] md:mt-auto">
              <div className="flex items-center">{author.avatar}</div>
              <div className="flex flex-col gap-[5px]">
                <p className="matter-p3-reg">
                  {author.name}{" "}
                  <span className="text-text-tertiary">
                    · {author.position}
                  </span>
                </p>
                <a href="#" className="matter-p4-reg text-gradient-blue">
                  {author.website}
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <h6 className="matter-h6-reg">{title}</h6>
              <p className="matter-p3-reg">
                {author.name}{" "}
                <span className="text-text-tertiary">· {author.position}</span>
              </p>
            </div>
            <div className="flex flex-col mt-10 gap-4">
              <div className="flex -ml-[34px] scale-[0.8]">{logo}</div>
              <div className="flex justify-between items-center">
                <a href="#" className="matter-p4-reg text-gradient-blue">
                  {author.website}
                </a>
                <div className="flex scale-[0.8]">
                  <Stars />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
