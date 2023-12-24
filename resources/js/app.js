import { createApp } from 'vue';
import IncrementCounter from './components/IncrementCounter.vue';

// Import Framework7 Core
//import Framework7 from 'framework7/lite';

// Import Framework7 Vue
//import Framework7Vue from 'framework7-vue';

// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

Framework7.use(Framework7Vue)

// Import Main App component
import App from './components/app.vue';

// Init App
const app = createApp(App);

// Register all Framework7 Vue components
registerComponents(app);

// Mounte Vue App
app.mount('#app');
 
//createApp({}).mount('#app')

// Init plugin
