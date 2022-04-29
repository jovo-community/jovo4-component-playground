import { BaseOutput, Output, OutputTemplate } from '@jovotech/framework';

@Output()
export class YesNoOutput extends BaseOutput {
  build(): OutputTemplate | OutputTemplate[] {
    return {
      quickReplies: ['yes', 'no'],
      listen: true,
    };
  }
}
