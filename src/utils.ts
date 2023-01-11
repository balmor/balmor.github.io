export const capitalize = (word: string): string =>
  word.toLowerCase().replace(/\w/, (firstLetter) => firstLetter.toUpperCase());

export enum FontFamilyTypes {
  raleway = 'Raleway',
}

export const emailRegex = /^[a-zA-Z]+[^@]*@[a-zA-Z]+[^@]*\.[a-zA-Z]{2,}[^@]*$/;
