import { FadeInUpGroup, FadeInUpItem } from "./FadeInUpGroup";

export default function TextBlock() {
  return (
    <FadeInUpGroup className="flex py-[128px] md:pt-[130px] md:pb-[65px] justify-center">
      <FadeInUpItem index={0}>
        <p className="matter-h4-reg xl:max-w-[877px] text-center text-gradient-blue-block">
          Boostra grows your revenue by combining advanced CRO insights with
          in-depth UX analytics tailored to your business.
        </p>
      </FadeInUpItem>
    </FadeInUpGroup>
  );
}
