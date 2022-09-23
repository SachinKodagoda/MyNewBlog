export interface IRoom {
  dateValue: {
    date: number;
    month: string;
    year: number;
  };
  title: string;
  subtitle: string;
}
export const eventData: IRoom[] = [
  {
    dateValue: {
      date: 12,
      month: 'January',
      year: 2019,
    },
    subtitle:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    title: 'Big summer meetups',
  },
  {
    dateValue: {
      date: 12,
      month: 'January',
      year: 2019,
    },
    subtitle:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    title: 'Big summer meetups',
  },
];
