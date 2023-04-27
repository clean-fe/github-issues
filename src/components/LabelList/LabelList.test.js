import LabelList from './LabelList.js';
import { pipe } from '../../function/utils.js';
import { $, $all } from '../../utils/dom.js';

const mockLabels = [
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
];

function renderLabelList(labels) {
  new LabelList($('#container'), {
    labels,
  });
  return labels.length;
}

function checkItemLength(answer) {
  return expect($all('.label-item')).length(answer);
}

describe('LabelList rendering test', () => {
  it('with 0 label', () => {
    pipe(renderLabelList, checkItemLength)([]);
  });

  it('with 1 label', () => {
    pipe(renderLabelList, checkItemLength)(mockLabels.slice(0, 1));
  });

  it('with 4 labels', () => {
    pipe(renderLabelList, checkItemLength)(mockLabels);
  });
});
