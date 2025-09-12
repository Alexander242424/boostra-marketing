import { AnimateOnScroll } from "./AnimateOnScroll";

export default function TextBlock() {
  return (
    <AnimateOnScroll 
      className="flex py-[128px] md:pt-[130px] md:pb-[65px] justify-center"
      animation="animate__fadeInUp"
      duration="animate__fast"
    >
      <p className="matter-h4-reg xl:max-w-[877px] text-center text-gradient-blue-block">
        Boostra grows your revenue by combining advanced CRO insights with
        in-depth UX analytics tailored to your business.
      </p>
    </AnimateOnScroll>
  );
}
