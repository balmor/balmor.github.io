import { createBreakpoint } from "styled-components-breakpoint";

export const GITHUB_FRONTQUIZ_LINK =  'https://github.com/balmor/frontend-quiz';
export const FRONTQUIZ_LINK =  'https://frontquiz.vercel.app';
export const GITHUB_EXCHANGE_LINK =  'https://github.com/balmor/exchange-rate';
export const EXCHANGE_LINK =  'https://balmor.github.io/exchange-rate';
export const GITHUB_MOVIE_LINK =  'https://github.com/balmor/movie_db';
export const MOVIE_LINK =  'https://balmor.github.io/movie_db';

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const capitalize = (word: string): string =>
  word.toLowerCase().replace(/\w/, (firstLetter) => firstLetter.toUpperCase());

export enum FontFamilyTypes {
  raleway = 'Raleway',
}

export const emailRegex: RegExp = /^[a-zA-Z]+[^@]*@[a-zA-Z]+[^@]*\.[a-zA-Z]{2,}[^@]*$/;

export const isBrowser = typeof window !== 'undefined';

const breakpoints = {
  xs: 0,
  sm: 440,
  md: 815,
  lg: 992,
  xl: 1200,
};

export const breakpoint = createBreakpoint(breakpoints);