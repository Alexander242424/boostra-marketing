"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import PlusIcon from "@/assets/PlusIcon.svg";
import MinusIcon from "@/assets/MinusIcon.svg";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("mb-6 last:mb-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 bg-bg-white-10 p-5 md:p-6 text-left outline-none hover:bg-bg-white-12 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
          "rounded-[24px]", // default закрито: всі кути 24px
          "[&[data-state=open]]:rounded-t-[24px] [&[data-state=open]]:rounded-b-[0px]",
          "[&[data-state=open]>.plus]:hidden",
          "[&[data-state=open]>.minus]:block",
          className
        )}
        {...props}
      >
        {children}

        <div className="block plus hover:bg-bg-gray rounded-full cursor-pointer">
          <PlusIcon />
        </div>
        <div className="hidden minus hover:bg-bg-gray rounded-full cursor-pointer">
          <MinusIcon />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "rounded-bl-[24px] rounded-br-[24px] bg-bg-white-10 p-6",
          className
        )}
      >
        <p className="matter-p4-reg text-text-tertiary leading-relaxed">
          {children}
        </p>
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
