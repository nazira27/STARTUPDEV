<template>
  <div class="main">
    <v-container class="pt-0 img-cont">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img src="~@/assets/main.jpg">
            <v-row align="end">
              <v-col xl="3" lg="5" md="6" sm="4" cols="6" class="text pa-5 head">
                <h1>Автомобиль в кредит</h1>
              </v-col>
              <v-col sm="12" cols="12" class="pa-10"></v-col>
              <v-col sm="12" cols="12" class="text pa-3">
                <h4
                  class="title"
                >На этом сайте вы можете оформить кредит на автомобиль, не посещая банк. Кредиты выдаются на покупку автомобилей АО «UzAuto Motors».</h4>
                <!-- <h1 class>Возьми кредит!</h1> -->
              </v-col>
            </v-row>
          </v-img>
          <!-- <h2 class="mb-2 hidden-sm-and-up">Возьми кредит!</h2> -->
        </v-col>
        <v-col v-if="isLoading" cols="12">
          <div class="text-center">
            <v-progress-circular class="my-12" :size="50" color="primary" indeterminate></v-progress-circular>
          </div>
        </v-col>
        <v-col
          xl="4"
          lg="6"
          md="12"
          sm="12"
          cols="12"
          v-for="(item,i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
          v-else
        >
          <!-- <div v-for="(item,i) in element" :key="i"> -->
          <!-- <router-link :to="{name: 'detail', params: {id: item[key].productId}}"> -->
          <v-card flat outlined class="m-card mb-3">
            <v-row justify="center" align="top" no-gutters>
              <!-- <v-col cols="12"> -->
              <v-col xl="7" lg="7" md="5" sm="7" cols="12">
                <v-img :src="item[0].src">
                  <div class="floater"></div>
                  <div class="f-text">
                    <h3 class="display-0">Модель:</h3>
                    <span class="title">{{item[0].name}}</span>
                  </div>
                </v-img>

                <v-spacer />
              </v-col>
              <!-- <v-col cols="12"> -->
              <v-col xl="5" lg="5" md="7" sm="5" cols="12">
                <div class="pa-3">
                  <h3 class="display-0">Полная стоимость автомобиля:</h3>
                  <span class="title">{{moneyFormat(item[0].amount, 2)}} сум</span>
                  <!-- <h3 class="display-0">Максимальная сумма кредита:</h3>
                  <span class="title">{{moneyFormat(item[0].credit, 2)}} сум</span>-->
                  <!-- <h3 class="display-0">
                    Процентная ставка кредита:
                    <span class="title">{{item[0].rate}}%</span>
                  </h3>-->

                  <h3 class="display-0 green-text mt-2">
                    Льготный период:
                    <v-icon class="green-text icon">mdi-checkbox-multiple-marked-circle-outline</v-icon>
                  </h3>
                  <span class="title green-text">{{item[0].discount_period}} месяц</span>

                  <!-- <h3 class="display-0">Максимальный срок кредита:</h3>
                  <span class="title">{{item[0].term}} месяца</span>-->
                </div>
                <!-- <h3 class="my-2 mx-3 display-0">Минимальный первоначальный взнос:</h3>
                <v-btn
                  color="primary"
                  small
                  :loading="isLoading"
                  :class="0 == 0 ? 'mx-3 ml-2 title' : 'mx-3 ml-2 title default'"
                >{{item[0].prepayRate}}%</v-btn>
                <v-btn
                  color="primary"
                  small
                  :loading="isLoading"
                  :class="0 == 1 ? 'mx-3 ml-2 title' : 'mx-3 ml-2 title default'"
                >{{item[1].prepayRate}}%</v-btn>
                <v-spacer class="mb-3"/>-->
                <router-link :to="{name: 'detail', params: {id: item[0].productId}}">
                  <v-btn
                    :loading="isLoading"
                    class="mt-0 mx-2 mb-3 display-0 btn"
                  >Предоплата {{item[0].prepayRate}}%</v-btn>
                </router-link>
                <!-- <v-spacer class="mb-3"/> -->
                <router-link :to="{name: 'detail', params: {id: item[1].productId}}">
                  <!-- <router-link
                  :to="{name: 'calculate', params: {id: item[1].productId, item: item[1]}}"
                  >-->
                  <v-btn
                    color="primary"
                    :loading="isLoading"
                    class="btn mt-0 mx-2 mb-3 display-0"
                  >Предоплата {{item[1].prepayRate}}%</v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
          <!-- </router-link> -->
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Info",
  components: {},
  data() {
    return {
      items: [],
      isLoading: false,
      key: 0,
      key1: 0,
      productId: ""
    };
  },
  methods: {
    // sort(item, id) {
    //   if(this.key1 == 1){(this.key1 = 1); (this.key1 = 0);
    //   console.log(this.key1)
    //   this.key[id] = this.key1;
    //   this.productId = item[this.key1].productId;
    // },
    getLoan() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`loan-product/all`).then(response => {
        if (response.data.data) {
          response.data.data.sort(this.sortFunction)
          this.items = response.data.data;
          // let arr=[];
          this.items.forEach(item => {
            console.log(item)
            this.items.item = item.forEach(element => {
              // this.key[element.productId] = 0;
              element["first_amount"] =
                (element.amount * element.prepayRate) / 100;
              element["credit"] = element.amount - element.first_amount;
              element["discount_period"] = 1;
              element["insurance"] =
                ((element.credit * 1.2 * 0.01) / 12) * element.term;
              element["src"] =
                "https://dev.kapitalbank.uz/download/" + element.imageUrl;
            });
            // console.log(item)
            // item[3] = item[0].prepayRate;
          });
          this.$store.commit("allCards", this.items);
          self.isLoading = false;
        }
      });
    },
    sortFunction(a, b) {
      if (a[0].amount === b[0].amount) {
        return 0;
      } else {
        return a[0].amount < b[0].amount ? -1 : 1;
      }
    }
  },
  mounted() {
    // if (!this.$store.getters.allCards.length) {
    this.getLoan();
    // }
  }
  //
};
</script>
<style lang="scss" scoped>
body .v-application .main {
  .display-2 {
    @include md-down {
      font-size: 1.05rem !important;
      line-height: 1.25rem !important;
    }
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 14px !important;
    line-height: 18px;
    color: #000000;
  }

  .display-0 {
    font-size: 13px !important;
    line-height: 17px;
    color: #000000;
  }
  .img-cont {
    .row {
      height: 100%;
    }
    h4 {
      @include sm-down {
        font-size: 12px !important;
        line-height: 13px !important;
      }
      padding-left: 10px;
    }
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      line-height: 35px;
      @include sm-down {
        font-size: 20px;
        line-height: 18px;
      }
    }
    .text {
      background: #ffd615c7;
      position: relative;
      // margin-left: 56px;
      @include sm-down {
        // margin-left: 10px;
        // margin-top: 20px;
        // margin-bottom: 20px;
      }
    }
    .head {
      height: 74px;
    }
    .text::before {
      content: "";
      height: 0;
      border-bottom: 74px solid #ffd615c7;
      border-left: 0 solid transparent;
      border-right: 45px solid transparent;
      position: absolute;
      bottom: 0;
      right: -45px;
    }
    .green-text {
      color: #0fd44b;
      position: relative;
      .icon {
        position: absolute;
        right: 13px;
        font-size: 35px;
        top: 6px;
      }
    }
  }

  .floater,
  .f-text {
    position: absolute;
    bottom: 0;
    left: 8%;
    max-width: 166px;
    span{
      display: block;
      line-height: 14px;
    }
  }
  .floater {
    width: 166px;
    height: 50px;
    background: #ffd615c7;
    // background: #ffd615;
    -webkit-transform: skew(-30deg);
    -moz-transform: skew(-30deg);
    -o-transform: skew(-30deg);
    transform: skew(-30deg);

    background-size: contain;
  }
  .f-text {
    padding-left: 15px;
    padding-bottom: 5px;
    .display-0 {
      line-height: 14px;
    }
  }

  // .default {
  //   background-color: $background !important;
  //   background: $background;
  //   box-shadow: 0px 6px 18px rgba(90, 90, 90, 0.12);
  // }
  .m-table {
    width: 100%;
    // tr td:first-child{
    //   width: 75%;
    // }
    tr td:nth-child(2) {
      text-align: right;
    }
  }
  .m-card {
    border-radius: 0 !important;
    position: relative;
    border: none;
  }
  .m-card:hover {
    background: rgba(158, 158, 158, 0.06);
  }
  .default {
    background-color: $background !important;
    background: $background;
    box-shadow: 0px 6px 18px rgba(90, 90, 90, 0.12);
  }
  .m-table {
    width: 100%;
    // tr td:first-child{
    //   width: 75%;
    // }
    tr td:nth-child(2) {
      text-align: right;
    }
  }
  .m-card {
    border-radius: 5px;
  }
  .m-card:hover {
    background: rgba(158, 158, 158, 0.06);
    // box-shadow: 0px 0px 6px 1px #a7a5fb70;
  }
}
</style>