<template>
      <!-- ======= Header ======= -->
  <user-header></user-header>
  <!-- End Header -->

    <router-view></router-view>

  <!-- ======= Footer ======= -->
  <user-footer></user-footer>
  <!-- End Footer -->
  <!-- End Footer -->

  <a
    href="#"
    class="scroll-top d-flex align-items-center justify-content-center"
  >
    <i class="bi bi-arrow-up-short"></i>
  </a>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import UserHeader from '../inc/UserHeader.vue'
import UserFooter from '../inc/UserFooter.vue'
    export default {
        name: 'UserMaster',
        components: {
            UserHeader,
            UserFooter
        }
    }
</script>