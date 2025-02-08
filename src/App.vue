<template>
  <div>
    <!-- Component WebHeader.vue -->
    <web-header></web-header>
    <router-view></router-view> <!-- Halaman yang sesuai rute akan muncul di sini -->
    <!-- Component WebFooter.vue -->
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from "./components/header/WebHeader.vue"
import WebFooter from "./components/footer/WebFooter.vue"

export default {
  components: {
    WebHeader,
    WebFooter
  }
}
</script>
