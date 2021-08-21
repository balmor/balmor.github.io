export const capitalize = (word: string): string =>
  word.toLowerCase().replace(/\w/, (firstLetter) => firstLetter.toUpperCase());

export enum FontFamilyTypes {
  ralewayLight = 'Raleway Light',
  ralewayRegular = 'Raleway Regular',
}

export const emailRegex = /^[a-zA-Z]+[^@]*@[a-zA-Z]+[^@]*\.[a-zA-Z]{2,}[^@]*$/;
