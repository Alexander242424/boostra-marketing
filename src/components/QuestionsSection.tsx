import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";
import { LandingTexts } from "@/config/landing-texts";

interface QuestionsSectionProps {
  texts: LandingTexts['questions'];
}

export default function QuestionsSection({ texts }: QuestionsSectionProps) {
  return (
    <AnimateOnScrollGroup className="flex flex-col mt-[96px] mb-[48px] md:my-[64px] lg:mb-[88px] lg:mt-[104px] gap-8 md:gap-[40px] lg:gap-[48px] items-center" staggerDelay={0.15}>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
        <AnimateOnScrollItem index={0} animation="fadeInUp" duration="fast">
          <h2 className="matter-h3-reg text-center" dangerouslySetInnerHTML={{ __html: texts.title }} />
        </AnimateOnScrollItem>
        <AnimateOnScrollItem index={1} animation="fadeInUp" duration="fast">
          <p className="matter-p1-reg text-text-tertiary text-center xl:max-w-[634px]">
            {texts.subtitle}
          </p>
        </AnimateOnScrollItem>
      </div>
      <AnimateOnScrollItem index={2} animation="fadeInUp" duration="fast" className="w-full xl:max-w-[838px]">
        <Accordion type="single" collapsible>
          {texts.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="matter-p2-reg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="matter-p4-reg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimateOnScrollItem>
    </AnimateOnScrollGroup>
  );
}
