import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { AnimateOnScrollGroup, AnimateOnScrollItem } from "./AnimateOnScroll";

export default function QuestionsSection() {
  return (
    <AnimateOnScrollGroup className="flex flex-col mt-[96px] md:mt-[160px] gap-8 md:gap-[48px] items-center" staggerDelay={0.15}>
      <div className="flex flex-col gap-3 md:gap-6">
        <AnimateOnScrollItem index={0} animation="fadeInUp" duration="fast">
          <h2 className="matter-h2-reg text-center">Have Questions?</h2>
        </AnimateOnScrollItem>
        <AnimateOnScrollItem index={1} animation="fadeInUp" duration="fast">
          <p className="matter-p1-reg text-text-tertiary text-center xl:max-w-[634px]">
            Still have questions? Ask us directly and get expert guidance
            tailored to your business.
          </p>
        </AnimateOnScrollItem>
      </div>
      <AnimateOnScrollItem index={2} animation="fadeInUp" duration="fast" className="w-full xl:max-w-[838px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="matter-p2-reg">
              What is the analysis and solutions based on?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Boostra&apos;s analysis combines multiple layers: your online and
              offline business context, customer personas, usability best
              practices, accessibility standards, and psychological factors.
              This holistic approach ensures recommendations are tailored to
              your goals and audience, not just generic benchmarks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="matter-p2-reg">
              Does Boostra work for mobile websites?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Yes. Mobile is where most drop-offs happen, so every analysis
              includes mobile-specific usability, performance, and accessibility
              checks to ensure your site converts across all devices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="matter-p2-reg">
              How fast can I see results?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Most businesses see measurable improvements within a first week
              after implementing Boostra&apos;s solutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="matter-p2-reg">
              What types of businesses use Boostra?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Boostra is trusted by eCommerce brands, SaaS companies, and
              enterprises looking to get more revenue from existing traffic.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="matter-p2-reg">
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Yes. All plans are flexible — you can cancel or upgrade at any
              time, no questions asked.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="matter-p2-reg">
              How is Boostra different from tools like Google Analytics or
              Hotjar?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Analytics tools show you data, but don&apos;t tell you what to
              fix. Boostra goes further by giving clear, actionable solutions to
              increase revenue directly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="matter-p2-reg">
              Is my data safe with Boostra?
            </AccordionTrigger>
            <AccordionContent className="matter-p4-reg">
              Absolutely. We only store the minimum information needed to
              generate your reports. Your data is never sold, shared, or reused
              for any purpose.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AnimateOnScrollItem>
    </AnimateOnScrollGroup>
  );
}
