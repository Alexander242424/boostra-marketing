"use client";
import { useState } from "react";
import { Input } from "./ui/input";

// Простий SVG іконка для демонстрації
const LinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function InputDemo() {
  const [inputValue, setInputValue] = useState("attio.com");

  return (
    <div className="flex flex-col gap-6 p-8 bg-bg-dark min-h-screen">
      <h2 className="text-text-primary text-2xl font-medium mb-4">
        Input States
      </h2>

      {/* Default State */}
      <div>
        <h3 className="text-text-secondary text-sm mb-2">Default State</h3>
        <Input
          placeholder="Paste your page URL..."
          iconLeft={<LinkIcon />}
          onBtnClick={() => console.log("Analyze clicked")}
        />
      </div>

      {/* Hover State - використовуємо CSS hover */}
      <div>
        <h3 className="text-text-secondary text-sm mb-2">
          Hover State (hover over the input)
        </h3>
        <Input
          placeholder="Paste your page URL..."
          iconLeft={<LinkIcon />}
          onBtnClick={() => console.log("Analyze clicked")}
        />
      </div>

      {/* Focused State */}
      <div>
        <h3 className="text-text-secondary text-sm mb-2">Focused State</h3>
        <Input
          placeholder="Paste your page URL..."
          iconLeft={<LinkIcon />}
          onBtnClick={() => console.log("Analyze clicked")}
          autoFocus
        />
      </div>

      {/* Filled State */}
      <div>
        <h3 className="text-text-secondary text-sm mb-2">Filled State</h3>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          iconLeft={<LinkIcon />}
          onBtnClick={() => console.log("Analyze clicked")}
        />
      </div>

      {/* Without Icon */}
      <div>
        <h3 className="text-text-secondary text-sm mb-2">Without Icon</h3>
        <Input
          placeholder="Paste your page URL..."
          onBtnClick={() => console.log("Analyze clicked")}
        />
      </div>
    </div>
  );
}
