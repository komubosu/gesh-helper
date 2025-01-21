export const SECTORS_DATA = {
  sector: [
    {
      type: 'sector',
      value: {
        name_sector: 'Сектор А',
        lifts: [{ name: 'Кресельная КД «Фристайл»', is_work: true }],
      },
      id: '37bdc96c-032b-413e-adb1-f04a78fe13d1',
    },
    {
      type: 'sector',
      value: {
        name_sector: 'Сектор В',
        lifts: [{ name: 'Кресельная КД «Булочка»', is_work: false }],
      },
      id: 'be51d88b-fa87-4db5-8fa7-b2176d9dbfb1',
    },
  ],
};

export const BARS_DATA = [
  { id: '1', name: 'Снежный бар', openFrom: '12:00', openTo: '23:00', averageCheck: 1500, rating: 4.5 },
  { id: '2', name: 'Горячий глинтвейн', openFrom: '10:00', openTo: '22:00', averageCheck: 1200, rating: 4 },
  { id: '3', name: 'Высотный', openFrom: '11:00', openTo: '21:00', averageCheck: 2000, rating: 5 },
  { id: '4', name: 'У камина', openFrom: '16:00', openTo: '02:00', averageCheck: 2500, rating: 4.7 },
  { id: '5', name: 'Ледяной', openFrom: '14:00', openTo: '23:00', averageCheck: 1800, rating: 3.2 },
];
