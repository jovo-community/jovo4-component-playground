import { Component, BaseComponent } from '@jovotech/framework';
import { AskMainMenuComponent } from './AskMainMenuComponent';

// NOTE: This component shows constraining intents to a specific state
// and also show filling multiple entity values before proceeding.

@Component({})
export class AskAnimalsComponent extends BaseComponent {
    START() {

        if (!this.$component.data.animalType && !this.$component.data.animalCount) {
            return this.$send('What animals do you own?')
        }

        if (!this.$component.data.animalType) {
            return this.$send('What of animal?')
        }

        // if (!this.$component.data.animalCount) {
        //     return this.$send('How many do you have?')
        // }

        //all slots filled
        this.$send(`Congratulations! You have ${this.$component.data.animalCount} ${this.$component.data.animalType}.`);

        return this.$redirect(AskMainMenuComponent);        
    }

    AnimalIntent() {
        if (this.$entities.animal) {
            this.$component.data.animalType = this.$entities.animal.resolved;
        }

        if (this.$entities.number) {
            this.$component.data.animalCount = this.$entities.number.resolved;
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
