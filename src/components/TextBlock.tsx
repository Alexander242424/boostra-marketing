import { AnimateOnScroll } from "./AnimateOnScroll";

export default function TextBlock() {
  return (
    <AnimateOnScroll
      className="flex py-[128px] md:pt-[130px] md:pb-[65px] justify-center"
      animation="fadeInUp"
      duration="fast"
    >
      <p className="matter-h4-reg xl:max-w-[877px] text-center text-gradient-blue-block">
        Boostra is like having a UX & CRO expert who spots issues, learns user
        behavior, and delivers instant solutions to boost conversions
        for every page of your business
      </p>
    </AnimateOnScroll>
  );
}
