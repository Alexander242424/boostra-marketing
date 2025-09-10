import Image from "next/image";
import Stars from "@/assets/stars";
import { useIsMobile } from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col md:flex-row md:gap-10 p-2 rounded-[32px] bg-bg-white-12 w-full h-full min-w-[343px] max-w-[343px] md:max-h-[496px] md:max-w-[1032px]">
      <Image
        className="w-full h-full max-w-[327px] max-h-[327px] md:max-w-[408px] md:max-h-[408px] rounded-[20px]"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <div className="flex flex-col md:mr-10 px-4 md:px-0 my-6 md:my-8">
        {!isMobile ? (
          <>
            <div className="flex flex-col gap-[21.33px] md:gap-[28px]">
              {logo}
              <h6 className="matter-h6-reg">{title}</h6>
            </div>
            <div className="flex gap-3 items-center mt-[64px] md:mt-auto">
              {author.avatar}
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
              <div className="self-start">
                <Stars />
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
            <div className="flex flex-col mt-10 gap-16">
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
