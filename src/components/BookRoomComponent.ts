import { Component, BaseComponent } from '@jovotech/framework';
import { AskMainMenuComponent } from './AskMainMenuComponent';
import { CollectBookRoomComponent, RoomInfo } from './CollectBookRoomComponent';

// NOTE: This component delegates the filling of all slots to another component.
// Then it handles making the API call to book the room.
// This also shows the registration of a subcomponent.

@Component({
    components: [CollectBookRoomComponent]
})
export class BookRoomComponent extends BaseComponent {
    START() {
        this.$send(`Let's book you a room.`)

        return this.$delegate(CollectBookRoomComponent, {
            resolve: {
                success: this.makeReservation,
                cancel: this.cancel
            }
        })
    }

    makeReservation(data: RoomInfo) {

        // make API call to book the reservation

        // if (response) {
            this.$send(`Congratulations! The room is booked for ${data.city}.`);
        // } else {
        //     this.$send('Sorry. Unable to book a room at this time. Try again later')
        // }

        return this.$redirect(AskMainMenuComponent);
    }

    cancel() {
        this.$send('No room booked.');
        return this.$redirect(AskMainMenuComponent);
    }
}
