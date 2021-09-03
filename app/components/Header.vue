<template>
  <FlexboxLayout class="uk-padding-large header">
    <label class="header__element" :text="currentYear"></label>
    <label class="header__element" :text="monthNames[currentMonth]"></label>
    <!-- <span @click="nextMonth">next</span> -->
  </FlexboxLayout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    };
  },
  computed: {
    ...mapState({
      currentYear: "currentYear",
      currentMonth: "currentMonth",
    }),
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 20px;
}
.header__element {
  font-size: 26px !important;
  margin-right: 20px;
}
</style>
