import { createApp } from 'vue';

// Import Framework7 Core
import Framework7 from 'framework7/lite';

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue';

// Import Framework7
//import Input from 'framework7/components/input';
//import Dialog from 'framework7/components/dialog';
//import ColorPicker from 'framework7/components/color-picker';
//import Popover from 'framework7/components/popover';
//import Range from 'framework7/components/range';
//import Toggle from 'framework7/components/toggle';
//import Popup from 'framework7/components/popup';
//import Panel from 'framework7/components/panel';
//import Tooltip from 'framework7/components/tooltip';

// Import F7 Bundle
//import Framework7 from 'framework7/lite-bundle'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
//import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

Framework7.use(Framework7Vue);
/*Framework7.use([
    Popup,
    Panel
]);*/

// Import Main App component
import App from './components/app.vue';
import Navbar from './components/Navbar.vue';
import MyPopup from './components/MyPopup.vue';
import MyLeftPanel from './components/MyLeftPanel.vue';
import Homepage from './components/Homepage.vue';
import Otobuspage from './components/Otobuspage.vue';

// Init App
const app = createApp({});

app.component('App', App);
app.component('Navbar', Navbar);
app.component('MyPopup', MyPopup);
app.component('MyLeftPanel', MyLeftPanel);
app.component('Homepage', Homepage);
app.component('Otobuspage', Otobuspage);

// Register all Framework7 Vue components
// registerComponents(app);

// Mounte Vue App
app.mount('#app');
