import { Component, BaseComponent } from '@jovotech/framework';
import { AskEnjoyPizzaComponent } from './AskEnjoyPizzaComponent';
import { MainMenuOutput } from '../output/MainMenuOutput';
import { AskAnimalsComponent } from './AskAnimalsComponent';
import { GlobalComponent } from './GlobalComponent';
import { BookRoomComponent } from './BookRoomComponent';

// NOTE: This component shows constraining intents to a specific state

@Component({})
export class AskMainMenuComponent extends BaseComponent {
    START() {
        return this.$send(MainMenuOutput, { message: 'Do you want to talk about pizza or animals or book a room?' });
    }

    PizzaIntent() {
        return this.$redirect(AskEnjoyPizzaComponent);
    }

    AnimalIntent() {
        return this.$redirect(AskAnimalsComponent);
    }

    BookRoomIntent() {
        return this.$redirect(BookRoomComponent);
    }

    CancelIntent() {
        return this.$redirect(GlobalComponent, 'END');
    }

    UNHANDLED() {
        return this.START();
    }
}
