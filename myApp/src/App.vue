<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <div class="d-flex align-center">

      </div> -->

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/HyunjungKim-Elly"
        target="_blank"
        text
      >
        <span class="mr-2">My Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <VMain>
      <!-- router -->
      <v-container fluid fill-height aacontainer>
         <router-view></router-view>
      </v-container>
    </VMain>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>