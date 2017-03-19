import { Chat } from './chat.model';
import * as moment from 'moment';

export const CHATS: Chat[] = [
  {
    id: 1,
    name: 'Peter Parker',
    status: 'Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics.',
    image: 'assets/images/users/peter_parker.png',
    attendees: [1, 2],
    creator: 1,
    createdAt: moment().subtract(10, 'minutes').toDate(),
  },
  {
    id: 2,
    name: 'Tony Stark',
    status: 'Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics, as well as its associated media.',
    image: 'assets/images/users/iron_man.png',
    attendees: [3, 4],
    creator: 2,
    createdAt: moment().subtract(15, 'minutes').toDate()
  },
  {
    id: 3,
    name: 'Dr. Bennet',
    status: 'The Hulk is a fictional superhero created by writer Stan Lee.',
    image: 'assets/images/users/hulk.png',
    attendees: [1, 3],
    creator: 3,
    createdAt: moment().subtract(20, 'minutes').toDate()
  },
  {
    id: 4,
    name: 'Captain America',
    status: 'Captain America is a fictional superhero appearing in American comic books published by Marvel Comics.',
    image: 'assets/images/users/captain_america.png',
    attendees: [1, 4],
    creator: 4,
    createdAt: moment().subtract(25, 'minutes').toDate()
  },
  {
    id: 5,
    name: 'Ant Man',
    status: 'Ant-Man is the name of several fictional superheroes appearing in books published by Marvel Comics.',
    image: 'assets/images/users/ant-man.png',
    attendees: [2, 3],
    creator: 5,
    createdAt: moment().subtract(30, 'minutes').toDate()
  },
  {
    id: 6,
    name: 'Thor',
    status: 'In Norse mythology, Thor is a hammer-wielding god associated with thunder, lightning, storms, oak trees, strength, the protection of mankind, and also hallowing and fertility.',
    image: 'assets/images/users/thor.png',
    attendees: [2, 4],
    creator: 6,
    createdAt: moment().subtract(35, 'minutes').toDate()
  },
  {
    id: 7,
    name: 'Captain Marvel',
    status: 'Captain Marvel, also known as Shazam, is a fictional superhero appearing in American comic books published by DC Comics.',
    image: 'assets/images/users/captain_marvel.png',
    attendees: [3, 2],
    creator: 7,
    createdAt: moment().subtract(40, 'minutes').toDate()
  },
  {
    id: 8,
    name: 'Doctor Strange',
    status: 'Dr. Stephen Vincent Strange is a fictional superhero appearing in American comic books published by Marvel Comics.',
    image: 'assets/images/users/doctor_strange.png',
    attendees: [4, 3],
    creator: 8,
    createdAt: moment().subtract(45, 'minutes').toDate()
  },
  {
    id: 9,
    name: 'Deadpool',
    status: 'Initially Deadpool was depicted as a supervillain when he made his first appearance in The New Mutants and later in issues of X-Force.',
    image: 'assets/images/users/deadpool.png',
    attendees: [5, 2],
    creator: 9,
    createdAt: moment().subtract(50, 'minutes').toDate()
  },
  {
    id: 10,
    name: 'Daredevil',
    status: 'Daredevil is a fictional character, an American comic book superhero that starred in comics from Lev Gleason Publications during the 1930s–1940s period historians and fans call the Golden Age of comic books.',
    image: 'assets/images/users/daredevil.png',
    attendees: [6, 8],
    creator: 10,
    createdAt: moment().subtract(55, 'minutes').toDate()
  },
];
