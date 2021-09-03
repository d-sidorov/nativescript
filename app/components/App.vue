<template>
  <Page>
    <DockLayout stretchFirstChild="true" stretchLastChild="false">

      <StackLayout flexDirection="column" dock="top">
        <Header></Header>
        <Calendar></Calendar>
        <Events></Events>
      </StackLayout>

      <StackLayout dock="bottom" height="70">
        <AbsoluteLayout>
          <Add-Event></Add-Event>
        </AbsoluteLayout>
      </StackLayout>

    </DockLayout>
  </Page>
</template>

<script>
import Header from "./Header.vue";
import Calendar from "./Calendar.vue";
import Events from "./Events.vue";
import AddEvent from "./AddEvent.vue";

export default {
  components: {
    Calendar,
    Header,
    Events,
    AddEvent
  },
  data() {
    return {
      event: null
    };
  },
  computed: {
    message() {
      return "Hello";
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
// @import "@nativescript/theme/scss/variables/blue";
@import "../css/styles.css";
* {
  font-size: 14px;
}
.cl-wh {
  color: #fff;
}
.today-date {
  color: #6191fc;
}
.selected-date {
  border-radius: 50%;
  border-width: 2px;
  border-color: rgb(146, 146, 146);
}

.today-date.selected-date {
  background-color: #6191fc;
  color: #fff;
  border-width: 0px;
}
.other-month-day {
  color: rgba(150, 150, 150, 0.884);
}
</style>
