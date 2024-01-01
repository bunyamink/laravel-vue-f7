<template>
      <!-- Popup. All modals should be outside of Views -->
      <f7-popup id="my-popup">
        <f7-view>
          <f7-page>
            <f7-navbar title="Popup">
              <!-- Link to close popup -->
              <f7-nav-right>
                <f7-link popup-close>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>
              <p>Here comes popup text</p>
            </f7-block>
          </f7-page>
        </f7-view>
      </f7-popup>
</template>

<script>
import { f7Popup, f7NavRight, f7Link, f7Panel, f7View, f7Page, f7Navbar, f7Block } from 'framework7-vue';

// Import Framework7 Core
import Framework7 from 'framework7/lite';

import Popup from 'framework7/components/popup';

Framework7.use([
  Popup
]);

export default {
  components: {
    f7Popup, f7NavRight, f7Link, f7Panel, f7View, f7Page, f7Navbar, f7Block
  },
  data(){
    return {
    }
  }
}
</script>