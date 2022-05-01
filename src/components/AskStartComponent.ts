import { Component, BaseComponent, Intents } from '@jovotech/framework';
import { YesNoOutput } from '../output/YesNoOutput';
import { GlobalComponent } from './GlobalComponent';
import { AskMainMenuComponent } from './AskMainMenuComponent';

// NOTE: This component shows constraining intents to a specific state

@Component({})
export class AskStartComponent extends BaseComponent {
    START() {
        return this.$send(YesNoOutput, { message: 'Ready to get started?' });
    }

    @Intents(['YesIntent'])
    continue() {
        return this.$redirect(AskMainMenuComponent);
    }

    @Intents(['NoIntent', 'CancelIntent'])
    exit() {
        return this.$redirect(GlobalComponent, 'END');
    }

    UNHANDLED() {
        return this.START();
    }
}
