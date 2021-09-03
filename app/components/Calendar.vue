<template>
  <FlexboxLayout flexDirection="column">
    <FlexboxLayout
      justifyContent="space-between"
      class="gap10 uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"
    >
      <FlexboxLayout
        v-for="day in dayNames"
        :key="day"
        justifyContent="center"
        alignItems="center"
        class="uk-width-expand "
        :text="day"
      >
        <label :text="day"></label>
      </FlexboxLayout>
    </FlexboxLayout>
    <FlexboxLayout
      v-for="(week, i) in weeks"
      justifyContent="space-between"
      :key="`week-${i}`"
      class="gap10 uk-width-1-1"
      @swipe="swipe($event)"
      ref="calendar"
    >
      <FlexboxLayout
        v-for="(date, j) in week"
        :key="`date-${j}`"
        justifyContent="center"
        alignItems="center"
        class="date-button"
        :class="{
          'other-month-day': date.getMonth() != currentMonth,
          'today-date': isToday(date),
          'selected-date': isEqualDates(selectedDate, date)
        }"
        @tap="selectDateFunc(date)"
      >
        <label :text="date.getDate()"></label>
      </FlexboxLayout>
    </FlexboxLayout>
    <label :text="pantext"></label>
  </FlexboxLayout>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      dates: [],
      weeks: [],
      pantext: null
    };
  },
  mounted() {
    this.createCalendar();
  },
  computed: {
    ...mapState({
      currentYear: "currentYear",
      currentMonth: "currentMonth",
      selectedDate: "selectedDate"
    }),
    getCountOfDays() {
      return 32 - new Date(this.currentYear, this.currentMonth).getDate();
    },

    firstDateOfMonth() {
      return new Date(this.currentYear, this.currentMonth, 1);
    },

    lastDateOfMonth() {
      return new Date(
        new Date(this.currentYear, this.currentMonth + 1) - 60 * 60 * 24 * 1000
      );
    },

    getCountOfWeeks() {
      let countWeeks = 1;
      for (let i = 1; i <= this.getCountOfDays; i++) {
        let day = new Date(this.currentYear, this.currentMonth, i);
        if (day.getDay() == 0 && i != this.getCountOfDays) {
          countWeeks++;
        }
      }
      return countWeeks;
    }
  },
  methods: {
    ...mapMutations(["changeMonth", "selectDate", "changeYear"]),

    swipe(e) {
      if (e.direction != 1 && e.direction != 2) return;
      let dir = 1;
      if (e.direction == 1) dir = -1;
      this.nextMonth(dir);
    },

    createCalendar() {
      this.dates = [];
      this.weeks = [];

      this.createDates();
      this.createWeeks();
    },

    createDates() {
      for (let i = 1; i <= this.getCountOfDays; i++) {
        this.dates.push(new Date(this.currentYear, this.currentMonth, i));
      }
      this.addPrevMonthDays();
      this.addNextMonthDays();
    },

    createWeeks() {
      let week = [];
      this.dates.forEach(day => {
        week.push(day);
        if (day.getDay() == 0) {
          this.weeks.push([...week]);
          week = [];
        }
      });
    },

    selectDateFunc(date) {
      if (date.getMonth() != this.currentMonth) {
        this.changeMonth(date.getMonth());
        this.createCalendar();
      }
      this.selectDate(date);
    },

    isToday(date) {
      return (
        date.getFullYear() == new Date().getFullYear() &&
        date.getMonth() == new Date().getMonth() &&
        date.getDate() == new Date().getDate()
      );
    },

    addPrevMonthDays() {
      if (this.dates[0].getDay() != 1) {
        let prevDays = [];
        let offset = 1;
        while (offset) {
          let day = new Date(+this.dates[0] - 60 * 60 * 24 * 1000 * offset);
          prevDays.unshift(day);
          offset++;
          if (day.getDay() == 1) break;
        }
        this.dates.unshift(...prevDays);
      }
    },

    addNextMonthDays() {
      let lastDay = this.dates[this.dates.length - 1];
      if (lastDay.getDay() != 0) {
        let nextDays = [];
        let offset = 1;
        while (offset) {
          let day = new Date(+lastDay + 60 * 60 * 24 * 1000 * offset);
          nextDays.push(day);
          offset++;
          if (day.getDay() == 0) break;
        }
        this.dates.push(...nextDays);
      }
    },

    nextMonth(dir) {
      let nextMonth = (this.currentMonth + dir) % 12;
      if (nextMonth < 0) nextMonth = 11;
      if (dir == 1) {
        if (nextMonth < this.currentMonth) this.changeYear(dir);
      } else if (dir == -1) {
        if (nextMonth > this.currentMonth) this.changeYear(dir);
      }
      this.changeMonth(nextMonth);
      this.createCalendar();
    },

    isEqualDates(first, second) {
      return (
        first.getFullYear() == second.getFullYear() &&
        first.getMonth() == second.getMonth() &&
        first.getDate() == second.getDate()
      );
    }
  }
};
</script>

<style scoped>
.date-button {
  height: 140px;
  width: 140px;
}
</style>
