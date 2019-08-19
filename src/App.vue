<template>
    <body class="h-100">
      <div class="container-fluid">
        <div class="row">
          <left-bar></left-bar>
          <right-bar></right-bar>
        </div>
      </div>
    </body>
</template>

<script>
import LeftBar from './components/LeftBar.vue';
import RightBar from './components/RightBar.vue';
export default {
  components: {
    LeftBar,
    RightBar
  }
}
</script>

<style>

</style>
