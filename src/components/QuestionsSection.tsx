import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import SplitText from "./SplitText";
import FadeInUp from "./FadeInUp";

export default function QuestionsSection() {
  return (
    <div className="flex flex-col mt-[96px] md:mt-[160px] gap-8 md:gap-[48px] items-center">
      <div className="flex flex-col gap-3 md:gap-6">
        <FadeInUp>
        <h2 className="matter-h2-reg text-center">
          Have Questions?
        </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
        <p className="matter-p1-reg text-text-tertiary text-center">
          If you can&apos;t find what you&apos;re looking for, feel free to
          reach out!
        </p>
        </FadeInUp>
      </div>
      <FadeInUp className="w-full max-w-[838px]" delay={0.4}>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Deep analysis of your business & web page
            </AccordionTrigger>
            <AccordionContent>
              Boostra explore your niche best practices in usability and
              conversions can turn missed opportunities into growth. Boostra
              explore your niche best practices in usability and conversions can
              turn missed opportunities into growth. Boostra explore your niche
              best practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Deep analysis of your business & web page
            </AccordionTrigger>
            <AccordionContent>
              Boostra explore your niche best practices in usability and
              conversions can turn missed opportunities into growth. Boostra
              explore your niche best practices in usability and conversions can
              turn missed opportunities into growth. Boostra explore your niche
              best practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Deep analysis of your business & web page
            </AccordionTrigger>
            <AccordionContent>
              Boostra explore your niche best practices in usability and
              conversions can turn missed opportunities into growth. Boostra
              explore your niche best practices in usability and conversions can
              turn missed opportunities into growth. Boostra explore your niche
              best practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Deep analysis of your business & web page
            </AccordionTrigger>
            <AccordionContent>
              Boostra explore your niche best practices in usability and
              conversions can turn missed opportunities into growth. Boostra
              explore your niche best practices in usability and conversions can
              turn missed opportunities into growth. Boostra explore your niche
              best practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Deep analysis of your business & web page
            </AccordionTrigger>
            <AccordionContent>
              Boostra explore your niche best practices in usability and
              conversions can turn missed opportunities into growth. Boostra
              explore your niche best practices in usability and conversions can
              turn missed opportunities into growth. Boostra explore your niche
              best practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.Boostra explore your niche best
              practices in usability and conversions can turn missed
              opportunities into growth.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
 
      </FadeInUp>
    </div>
  );
}
