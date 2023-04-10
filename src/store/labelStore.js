import { observable } from '../core/observer.js';

export const LabelStore = observable({
  isFormOpened: false,
  inputLabelText: 'hello~~',
  inputLabelDesc: '',
  inputLabelColor: '#21f',
  labelList: [],
  labelCount: 0,
});
