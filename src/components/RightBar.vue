<template>
  <div style="width : 100%">
    <!-- End Main Sidebar -->
    <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
      <top-bar></top-bar>
      <!--<content-view></content-view>-->
      <router-view></router-view>
      <footer-view></footer-view>
    </main>
  </div>
</template>

<script>
import TopBar from "./TopBar.vue";
import ContentView from "./ContentView.vue";
import FooterView from "./FooterView.vue";
export default {
  components: {
    TopBar,
    ContentView,
    FooterView
  }
};
</script>

<style>
</style>
