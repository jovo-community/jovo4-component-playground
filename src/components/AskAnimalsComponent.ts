import { Component, BaseComponent } from '@jovotech/framework';
import { AskMainMenuComponent } from './AskMainMenuComponent';

// NOTE: This component shows constraining intents to a specific state
// and also show filling multiple entity values before proceeding.

@Component({})
export class AskAnimalsComponent extends BaseComponent {
    START() {

        if (!this.$session.data.animalType && !this.$session.data.animalCount) {
            return this.$send('What animals do you own?')
        }

        if (!this.$session.data.animalType) {
            return this.$send('What of animal?')
        }

        // if (!this.$session.data.animalCount) {
        //     return this.$send('How many do you have?')
        // }

        //all slots filled
        this.$send(`Congratulations! You have ${this.$session.data.animalCount} ${this.$session.data.animalType}.`);

        this.$session.data.animalType = undefined;
        this.$session.data.animalCount = undefined;

        return this.$redirect(AskMainMenuComponent);        
    }

    AnimalIntent() {
        if (this.$entities.animal) {
            this.$session.data.animalType = this.$entities.animal.resolved;
        }

        if (this.$entities.number) {
            this.$session.data.animalCount = this.$entities.number.resolved;
        }

        return this.START();
    }

    CancelIntent() {
        return this.$redirect(AskMainMenuComponent);
    }

    UNHANDLED() {
        return this.START();
    }
}
