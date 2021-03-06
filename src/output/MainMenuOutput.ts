import { BaseOutput, Output, OutputTemplate } from '@jovotech/framework';

@Output()
export class MainMenuOutput extends BaseOutput {
  build(): OutputTemplate | OutputTemplate[] {
    return {
      quickReplies: ['pizza', 'animals', 'book room', 'goodbye'],
      listen: true,
    };
  }
}
