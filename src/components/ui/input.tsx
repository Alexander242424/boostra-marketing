"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  onBtnClick?: () => void;
  btnText?: string;
  isError?: boolean;
  isDisabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      iconLeft,
      onBtnClick,
      btnText = "Analyze",
      isError = false,
      isDisabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative flex items-center h-[72px] max-w-[343px] sm:max-w-none">
        <div
          className={cn(
            "relative shadow-[0px_0px_0px_6px_#FFFFFF08] flex items-center w-full h-full bg-bg-white-10 border rounded-[59px] px-6 py-2 transition-all duration-200 backdrop-blur-[98.9px]",
            isError
              ? "border-red-500 hover:border-red-500 focus-within:border-red-500"
              : "border-line-white-16 hover:border-line-white-24 focus-within:border-brand-blue focus-within:bg-bg-white-12 focus-within:hover:border-brand-blue"
          )}
        >
          {iconLeft && (
            <div className="flex items-center justify-center mr-3 text-text-secondary">
              {iconLeft}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex-1 h-full bg-transparent text-text-primary placeholder:text-text-tertiary matter-p3-reg outline-none border-none focus:outline-none not-sm:text-[16px]!",
              onBtnClick ? "pr-32" : "",
              className
            )}
            ref={ref}
            {...props}
          />
          {onBtnClick && (
            <div className="absolute right-2">
              <Button size="lg" onClick={onBtnClick} disabled={isDisabled}>
                {btnText}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
