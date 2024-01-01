<template>
  <App>
    <template v-slot:pagecontent>
      <!-- content for the header slot -->
      <div style="text-align: center;">
        <f7-block-title large>Otobus Bileti</f7-block-title>
        <f7-block>
          <p>En Ucuz Otobüs Biletleri</p>
        </f7-block>

      </div>
      <f7-button href="/" external>Anasayfa</f7-button>

      <!-- Buttons to open panels -->
      <f7-button panel-open="left">Open Left Panel</f7-button>
      <!-- Button to open popup -->
      <f7-button popup-open="#my-popup">Open Popup</f7-button>
    </template>
  </App>
</template>

<script>

import { f7BlockTitle, f7Block, f7Button, f7List, f7ListInput } from 'framework7-vue';

export default {
  components: {
    f7BlockTitle, f7Block, f7Button, f7List, f7ListInput
  },
  data(){
    return {
    }
  }
}
</script>
