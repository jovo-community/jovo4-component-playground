import { Component, BaseComponent, Intents, SubState } from '@jovotech/framework';
import { RoomTypeOutput } from '../output/RoomTypeOutput';

// NOTE: This component shows constraining intents to a specific state.
// It's primary job is to collect all slots and handle a confirmation before
// sending the result to the calling component.

export interface RoomInfo {
    city: string;
    roomType: string;
}

@Component({})
export class CollectBookRoomComponent extends BaseComponent {
    START() {

        if (!this.$component.data.city) {
            return this.$send('In what city?')
        }

        if (!this.$component.data.roomType) {
            return this.$send(RoomTypeOutput, { message: 'Do you want a King, Queen, or deluxe room?' });
        }

        // all slots filled, confirm book info

        this.$subState = 'ConfirmState';
        return this.$send(`Do you want to book a ${this.$component.data.roomType} room in ${this.$component.data.city}?`)
    }

    BookRoomIntent() {
        if (this.$entities.city) {
            this.$component.data.city = this.$entities.city.resolved;
        }

        if (this.$entities.roomType) {
            this.$component.data.roomType = this.$entities.roomType.resolved;
        }

        return this.START();
    }

    CancelIntent() {
        return this.$resolve('cancel');
    }

    UNHANDLED() {
        return this.START();
    }

    // Use substate for the final confirmation prompt

    @SubState('ConfirmState')
    @Intents(['YesIntent'])
    confirm() {
        const data: RoomInfo = {
            city: this.$component.data.city,
            roomType: this.$component.data.roomType,
        }

        return this.$resolve('success', data);
    }

    @SubState('ConfirmState')
    @Intents(['NoIntent', 'CancelIntent', 'UNHANDLED'])
    deny() {
        return this.$resolve('cancel');
    }
}
