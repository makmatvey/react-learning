export const orders = [
  {
    id: 101,
    status: 'paid',
    customer: { firstName: 'Аня', lastName: 'Иванова', city: 'Минск' },
    items: [
      { title: 'Книга', price: 25, qty: 1 },
      { title: 'Кружка', price: 12, qty: 2 },
    ],
  },
  {
    id: 102,
    status: 'new',
    customer: { firstName: 'Борис', lastName: 'Петров', city: 'Гродно' },
    items: [{ title: 'Наушники', price: 80, qty: 1 }],
  },
  {
    id: 103,
    status: 'shipped',
    customer: { firstName: 'Света', lastName: 'Козлова', city: 'Брест' },
    items: [],
  },
];
