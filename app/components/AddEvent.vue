<template>
  <Button
    backgroundColor="#6191fc"
    borderRadius="50%"
    fontSize="30"
    text="+"
    height="50"
    width="50"
    left="320"
    top="0"
    verticalAlignment="center"
    horizontalAlignment="center"
    @tap="navigate"
  />
</template>

<script>
import AddEventModal from "./AddEventModal";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    navigate() {
      this.$navigateTo(AddEventModal, {
        transition: {
          name: "slideLeft",
          duration: 200,
        }
      });
    }
  }
};
</script>

<style scoped></style>
