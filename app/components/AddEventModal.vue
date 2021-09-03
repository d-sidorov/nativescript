<template>
  <Page>
    <StackLayout>
      <FlexboxLayout justifyContent="space-between">
        <Button height="30" width="30" text="x" fontSize="20"></Button>
        <Button height="30" width="30" text="+" fontSize="20"></Button>
      </FlexboxLayout>

      <StackLayout class="uk-padding-large">
        <Label text="Добавить событие" class="title"/>
        <TextField v-model="eventName" class="event-input" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      eventName: ''
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 26px;
}

.event-input {
  border-radius: 30px;
  color: #fff;
  background-color: #575757;
  padding: 10px 30px;
  width: 100%;
  height: 130px;
  font-size: 20px;
}
</style>
