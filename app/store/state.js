export default () => ({
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentDate: new Date().getDate(),
  selectedDate: new Date(),
  dates: [],
  weeks: [],

  events: [{
      id: 1,
      title: "Туда сюда",
      date: new Date()
    },
    {
      id: 2,
      title: "Пятое десятое",
      date: new Date()
    }
  ],
})
