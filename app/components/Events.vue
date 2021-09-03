<template>
  <StackLayout flexDirection="column" class="events uk-margin-small-top uk-padding-large">
    <label class="event uk-padding-large" v-if="getEvents.length == 0" text="No events"></label>
    <StackLayout flexDirection="column" v-else>
      <label
        class="event uk-padding-large"
        v-for="event in getEvents"
        :key="event.id"
        :text="event.title"
      >
      </label>
    </StackLayout>
  </StackLayout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      selectedDate: "selectedDate",
      events: "events"
    }),
    getEvents() {
      if (!this.selectedDate) return [];
      return this.events.filter(event => {
        return (
          event.date.getFullYear() == this.selectedDate.getFullYear() &&
          event.date.getMonth() == this.selectedDate.getMonth() &&
          event.date.getDate() == this.selectedDate.getDate()
        );
      });
    }
  }
};
</script>

<style scoped>
.event {
  padding: 10px 15px;
  background-color: #575757;
  border-radius: 20px;
  margin-bottom: 10px;
}
</style>
