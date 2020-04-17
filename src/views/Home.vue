<template>
    <!-- <Info></Info> -->
    <v-container>
    <div>
        <v-col v-if="isLoading" cols="12">
            <div class="text-center">
                <v-progress-circular class="my-12" :size="50" color="primary" indeterminate></v-progress-circular>
            </div>
        </v-col>
      <v-row>
        <v-col sm="12" md="3" lg="3" xl="12">
          <v-row>
        <v-col class="mx-2" xl="12" md="12" lg="12" cols="12" v-for="(item, i) in items" :key="i">
          <!-- <v-row>
            <v-col xl="12" md="12" lg="12" cols="12"> -->
              <div class="items" v-on:click="getSpere(i)">
              <h5 class="title green-text">{{ item.name }}</h5>
              </div>
           <!--  </v-col>
          </v-row> -->
        </v-col>
      </v-row>
      </v-col>
      <v-col sm="12" md="9" lg="9" xl="12">
        <v-row>
             <v-col md="6" lg="6" v-for="(list, j) in lists" :key="j">
                <div class=lists>
                <span>{{ list.name }}</span>
                </div>
             </v-col>
      </v-row>
      </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
    name: "Home",

    components: {
        // Info,
    },
    data() {
        return {
            items: [],
            lists: [],
            spereList: [],
            isLoading: false,
            id:'',
        };
    },
    methods: {
        getLoan() {
            let self = this;
            self.isLoading = true;
            self.$http.get(`spheres`).then(response => {
                self.isLoading = false;
                if (response.data.payload) {
                      console.log(response);
                      this.items = response.data.payload.spheres;
                      
                }
            });
        },
        getService() {
            let service = this;
            service.isLoading = true;
            service.$http.get('services').then(response =>{
              service.isLoading = false;
              if(response.data.payload) {
                console.log(response);
                this.lists = response.data.payload.services.data;
              }
            })
        },
        getSpere(i) {
            let sphere = this;
            sphere.isLoading = true;
            sphere.$http.get(`services?sphere=${i+1}`).then(response =>{
              sphere.isLoading = false;
              if (response.data.payload) {
                console.log(response);
                this.lists = response.data.payload.services.data;
              }
            })
        },
      
    },
        mounted(){
          this.getLoan();
          this.getService();
        },
};
</script>
<style>
.items {
  height: 32px;
  padding: 1px;
  border-radius: 1px;
  cursor: pointer;
}
.lists {
  min-height: 140px;
  padding: 4px;
  box-shadow: 0 0 15px rgba(60, 60, 60, 0.4);
  border-radius: 3px;
}
.lists span {
  font-size: 18px;
  font-weight: bold;
}
.disabled {
  display: none;
}
</style>