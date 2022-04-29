import { Component, BaseComponent } from '@jovotech/framework';
import { AskEnjoyPizzaComponent } from './AskEnjoyPizzaComponent';
import { MainMenuOutput } from '../output/MainMenuOutput';
import { AskAnimalsComponent } from './AskAnimalsComponent';
import { GlobalComponent } from './GlobalComponent';

// NOTE: This component shows constraining intents to a specific state

@Component({})
export class AskMainMenuComponent extends BaseComponent {
    START() {
        return this.$send(MainMenuOutput, { message: 'Do you want to talk about pizza or animals?' });
    }

    PizzaIntent() {
        return this.$redirect(AskEnjoyPizzaComponent);
    }

    AnimalIntent() {
        return this.$redirect(AskAnimalsComponent);
    }
    CancelIntent() {
        return this.$redirect(GlobalComponent, 'END');
    }

    UNHANDLED() {
        return this.START();
    }
}
