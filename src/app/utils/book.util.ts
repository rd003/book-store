import { BOOKS_DATA } from '../book.data';

export function getBookLanguages(): string[] {
  const languages = BOOKS_DATA.map((a) => a.Language);
  const uniqueLanguageSet = new Set(languages);
  return Array.from(uniqueLanguageSet);
}
