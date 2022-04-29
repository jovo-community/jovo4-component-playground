import { Component, BaseComponent, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';
import { AskMainMenuComponent } from './AskMainMenuComponent';

// NOTE: This component shows constraining intents to a specific state

@Component()
export class AskEnjoyPizzaComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Do you like pizza?' });
  }

  @Intents(['YesIntent'])
  lovesPizza() {
    this.$send('Yes! I love pizza, too.');
    return this.$redirect(AskMainMenuComponent);
  }

  @Intents(['NoIntent'])
  hatesPizza() {
    this.$send(`That's OK! Not everyone likes pizza.`);
    return this.$redirect(AskMainMenuComponent);
  }

  UNHANDLED() {
    return this.START();
  }
}
