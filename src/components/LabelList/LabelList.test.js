import LabelList from './LabelList.js';
import { $ } from '../../utils/dom.js';

describe('LabelList rendering test', () => {
  it('with 0 label', () => {
    new LabelList($('#container'), {
      labels: [],
    });

    expect(document.querySelectorAll('.label-item')).length(0);
  });

  it('with 1 label', async () => {
    new LabelList($('#container'), {
      labels: [
        {
          name: 'bug',
          color: 'bfdadc',
          description: 'this is red',
        },
      ],
    });

    expect(document.querySelectorAll('.label-item')).length(1);
  });

  it('with 4 labels', async () => {
    new LabelList($('#container'), {
      labels: [
        {
          name: 'bug',
          color: 'bfdadc',
          description: 'this is red',
        },
        {
          name: 'bug',
          color: 'bfdadc',
          description: 'this is red',
        },
        {
          name: 'bug',
          color: 'bfdadc',
          description: 'this is red',
        },
        {
          name: 'bug',
          color: 'bfdadc',
          description: 'this is red',
        },
      ],
    });

    expect(document.querySelectorAll('.label-item')).length(4);
  });
});
