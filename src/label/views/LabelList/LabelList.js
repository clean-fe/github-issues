import { $, getData } from '../../../utils';
import LabelItem from './LabelItem';
import { API_URL, STORE_KEY } from '../../../constants';

const LabelList = (Store) => {
  const init = async () => {
    const labelListStore = Store(STORE_KEY.LABEL_LIST);
    labelListStore.setState(await getData(API_URL.LABEL));
    labelListStore.subscribe(render);
    render();
  };

  const render = async () => {
    await init();
    const $labelList = $('.label-list');
    const labelList = Store(STORE_KEY.LABEL_LIST).getState() ?? [];
    $labelList.innerHTML = labelList.reduce((acc, labelItem) => (acc += LabelItem(labelItem)), '');
  };

  return {
    render,
  };
};

export default LabelList;
