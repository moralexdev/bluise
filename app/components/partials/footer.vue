<template>
  <footer class="footer -mx-4 md:mx-0">
    <div class="container mx-auto pb-6 flex justify-center"></div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  background-image: url('/images/uploads/Nuvola_Ukrainian_flag.svg');
  background-repeat: no-repeat;
  height: 75px;
}
</style>
