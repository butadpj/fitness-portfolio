import { clsx, type ClassValue } from "clsx";
import { warn } from "node_modules/astro/dist/core/logger/core";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateReadingTime(text: string) {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}

export function formatDate(date: Date) {
  const options = { year: "numeric", month: "long", day: "numeric" };

  //@ts-ignore
  return date.toLocaleDateString("en-US", options);
}
