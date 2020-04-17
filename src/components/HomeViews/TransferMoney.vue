<template>
  <v-card>
    <div class="pa-6">
      <h3 class="display-2">{{$t('transfer_card')}}</h3>
      <v-divider class="my-3" />
      <v-form>
        <h3 class="title">{{$t('transfer_card')}}</h3>
        <v-text-field filled rounded :placeholder="$t('enter_card_number')"></v-text-field>
        <h3 class="title">{{$t('transfer_amount')}}</h3>
        <v-text-field filled rounded :placeholder="$t('enter_amount')"></v-text-field>
        <v-btn color="primary" rounded block x-large>{{$t('transfer')}}</v-btn>
      </v-form>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "TransferMoney",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.title {
  color: #333333;
  padding-bottom: 5px;
}
</style>