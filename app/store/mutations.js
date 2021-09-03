export default {
  selectDate(state, date) {
    state.selectedDate = date
  },
  changeMonth(state, month) {
    state.currentMonth = month
  },
  changeYear(state, dir) {
    state.currentYear += dir
  }
}