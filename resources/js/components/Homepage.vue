<template>
    <app>
        <template v-slot:pagecontent> 
            <div style="text-align: center;">
              <f7-block-title large>Homepage</f7-block-title>
              <f7-block>
                <p>Homepage here comes</p>
              </f7-block>
            </div>
            <!-- Buttons to open panels -->
            <f7-button panel-open="left">Open Left Panel</f7-button>
            <f7-button panel-open="right">Open Right Panel</f7-button>
            <!-- Button to open popup -->
            <f7-button popup-open="#my-popup">Open Popup</f7-button>
            <f7-button href="/otobus-bileti" external>Otobus Bileti</f7-button>
        </template>
        <template v-slot:ousidef7view> 
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
    </app>

    
</template>

<script>
import { f7, f7App, f7View, f7Page, f7Navbar, f7Block, f7BlockTitle, f7Button, f7Popup, f7NavRight, f7Link, f7Panel } from 'framework7-vue';

import app from './App.vue';

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
    }
  }
}
</script>
