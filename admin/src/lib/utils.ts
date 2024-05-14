import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFileUrl(url: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}/files/${url}`;
}

export function formatNumbers(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
