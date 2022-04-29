import { Component, BaseComponent, Global, Handle } from '@jovotech/framework';
import { AskStartComponent } from './AskStartComponent';

@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  LAUNCH() {
    return this.$redirect(AskStartComponent);
  }

  END() {
    return this.$send({ message: 'Goodbye', listen: false })
  }

  @Handle({ intents: ['RepeatIntent'], prioritizedOverUnhandled: true })
  repeat() {
    if (this.$history.prev?.output) {
      return this.$send(this.$history.prev.output);
    } else {
      return this.$send('Unfortunately, there is nothing to repeat.');
    }
  }

  @Handle({ intents: ['StartOverIntent'], prioritizedOverUnhandled: true })
  startOver() {
    return this.LAUNCH();
  }
}
