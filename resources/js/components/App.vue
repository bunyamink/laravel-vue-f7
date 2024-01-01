<template>
    <!-- Main Framework7 App component where we pass Framework7 params -->
    <f7-app v-bind="f7params">
  
      <myLeftPanel />
  
      <!-- Main view-->
      <f7-view main>
        <f7-page>
            <navbar />
            <slot name="pagecontent"></slot>
            
        </f7-page>
      </f7-view>

      <myPopup />

    </f7-app>
  </template>

<script>
import { f7, f7App, f7View, f7Page, f7Navbar, f7Block, f7BlockTitle, f7Button, f7Popup, f7NavRight, f7Link, f7Panel } from 'framework7-vue';

import navbar  from './Navbar.vue';
import myLeftPanel from './MyLeftPanel.vue';
import myPopup from './MyPopup.vue';

// Import Framework7 Core
//import Framework7 from 'framework7/lite';

//import Popup from 'framework7/components/popup';
//import Panel from 'framework7/components/panel';

/*Framework7.use([
    Popup,
    Panel
]);*/

export default {
  components: {
    f7,
    f7App,
    f7View,
    f7Page,
    f7Navbar,
    f7Block,
    f7BlockTitle,
    f7Button,
    f7Popup,
    f7NavRight,
    f7Link,
    f7Panel,
    navbar
  },
  data(){
    return {
      f7params: { 
        theme: 'auto', 
        name: 'Laravel Vue F7',
      }
    }
  }
}
</script>