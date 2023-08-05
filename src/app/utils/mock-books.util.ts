import { Book } from '@book-store/shared-models';

export const mockBooks: Book[] = [
  {
    Id: '8ef9f86b-cdc4-49ab-88de-f641e8d0ab73',
    Author: 'Chinua Achebe',
    Country: 'Nigeria',
    ImageLink: 'assets/images/things-fall-apart.jpg',
    Language: 'English',
    Link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
    Pages: 209,
    Title: 'Things Fall Apart',
    Year: 1958,
    Price: 243,
  },
  {
    Id: 'ab38cb7b-f4de-4c3f-9463-dcba1bd62f36',
    Author: 'Hans Christian Andersen',
    Country: 'Denmark',
    ImageLink: 'assets/images/fairy-tales.jpg',
    Language: 'Danish',
    Link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
    Pages: 784,
    Title: 'Fairy tales',
    Year: 1836,
    Price: 101,
  },
];
