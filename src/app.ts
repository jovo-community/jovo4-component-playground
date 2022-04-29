import { App } from '@jovotech/framework';
import { AskAnimalsComponent } from './components/AskAnimalsComponent';

import { AskEnjoyPizzaComponent } from './components/AskEnjoyPizzaComponent';
import { AskMainMenuComponent } from './components/AskMainMenuComponent';
import { AskStartComponent } from './components/AskStartComponent';
import { GlobalComponent } from './components/GlobalComponent';

/*
|--------------------------------------------------------------------------
| APP CONFIGURATION
|--------------------------------------------------------------------------
|
| All relevant components, plugins, and configurations for your Jovo app
| Learn more here: www.jovo.tech/docs/app-config
|
*/
const app = new App({
  /*
  |--------------------------------------------------------------------------
  | Components
  |--------------------------------------------------------------------------
  |
  | Components contain the Jovo app logic
  | Learn more here: www.jovo.tech/docs/components
  |
  */
  components: [
    GlobalComponent,
    AskEnjoyPizzaComponent,
    AskStartComponent,
    AskMainMenuComponent,
    AskAnimalsComponent,
  ],

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Includes platforms, database integrations, third-party plugins, and more
  | Learn more here: www.jovo.tech/marketplace
  |
  */
  plugins: [
    // Add Jovo plugins here
  ],

  /*
  |--------------------------------------------------------------------------
  | Other options
  |--------------------------------------------------------------------------
  |
  | Includes all other configuration options like logging
  | Learn more here: www.jovo.tech/docs/app-config
  |
  */
  logging: true,
});

export { app };
