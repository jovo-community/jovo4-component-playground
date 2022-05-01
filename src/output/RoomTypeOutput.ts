import { BaseOutput, Output, OutputTemplate } from '@jovotech/framework';

@Output()
export class RoomTypeOutput extends BaseOutput {
  build(): OutputTemplate | OutputTemplate[] {
    return {
      quickReplies: ['king', 'queen', 'deluxe'],
      listen: true,
    };
  }
}
