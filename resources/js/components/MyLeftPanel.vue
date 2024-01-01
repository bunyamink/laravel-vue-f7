<template>
      <!-- Left Panel with "cover" effect -->
      <f7-panel left cover>
        <f7-view>
          <f7-page>
            <f7-navbar title="Left Panel"></f7-navbar>
            <f7-block>
              <p>Sol Menu</p>
            </f7-block>
          </f7-page>
        </f7-view>
      </f7-panel>
</template>

<script>
import { f7Panel, f7View, f7Page, f7Navbar, f7Block } from 'framework7-vue';

// Import Framework7 Core
import Framework7 from 'framework7/lite';

import Panel from 'framework7/components/panel';

Framework7.use([
  Panel
]);

export default {
  components: {
    f7Panel, f7View, f7Page, f7Navbar, f7Block
  },
  data(){
    return {
    }
  }
}
</script>