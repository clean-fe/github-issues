import { describe, it, expect, beforeEach } from 'vitest';
import { Window } from 'happy-dom';

import LabelList from './LabelList.js';
import { labels } from '../../mocks/handlers.js';

describe('render 0 label', () => {
  const window = new Window();
  const document = window.document;

  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');

  new LabelList(container, {
    labels: [],
  });

  it('render one label', () => {
    const $labels = document.querySelectorAll('.label-item');
    expect($labels.length).toBe(0);
  });
});

describe('render 0 label', () => {
  const window = new Window();
  const document = window.document;

  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');

  new LabelList(container, {
    labels: [
      {
        name: 'bug',
        color: 'bfdadc',
        description: 'this is red',
      },
    ],
  });

  it('render one label', () => {
    const $labels = document.querySelectorAll('.label-item');
    expect($labels.length).toBe(1);
  });
});

describe(`render ${labels.length} labels`, () => {
  const window = new Window();
  const document = window.document;

  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');

  new LabelList(container, {
    labels,
  });

  it('render multiple label', () => {
    const $labels = document.querySelectorAll('.label-item');
    expect($labels.length).toBe(labels.length);
  });
});
