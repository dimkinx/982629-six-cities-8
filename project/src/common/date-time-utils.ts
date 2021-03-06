import {Review} from '../types/review';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDateForHuman = (date: string): string => `${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;

const addLeadingZero = (number: number): string => (number < 10) ? `0${number}` : `${number}`;

const getDateForRobot = (date: string): string => `${new Date(date).getFullYear()}-${addLeadingZero(new Date(date).getMonth() + 1)}-${addLeadingZero(new Date(date).getDate())}`;

const compareReviewsByDate = (first: Review, second: Review): number => Number(new Date(second.date)) - Number(new Date(first.date));

export {getDateForHuman, getDateForRobot, compareReviewsByDate};
