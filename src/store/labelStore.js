import { create } from '../core/observer.js';

export const labelListStore = create((set) => ({
  labelList: [],
  addLabelList: (newLabel) =>
    set((state) => ({ labelList: [...state.labelList, newLabel] })),
  setLabelList: (labelList) => set(() => ({ labelList })),
}));

export const labelFormStore = create((set) => ({
  isFormOpened: false,
  labelColors: [
    '#0075CA',
    '#A2EEEF',
    '#BFDADC',
    '#D876E3',
    '#E4E669',
    '#B8BBBE',
  ],
  labelColorIdx: 0,
  labelName: 'review request',
  labelDescription: '',
  toggleFormOpened: () =>
    set((state) => ({
      isFormOpened: !state.isFormOpened,
    })),
  changeColor: () =>
    set((state) => ({
      labelColorIdx:
        state.labelColors.length - 1 === state.labelColorIdx
          ? 0
          : state.labelColorIdx + 1,
    })),
  changeLabelName: (labelName) =>
    set(() => ({
      labelName,
    })),
  changeLabelDescription: (labelDescription) =>
    set(() => ({
      labelDescription,
    })),
}));
