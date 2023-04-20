import { fetchGetLabels, fetchPostLabels, fetchDelayLabels } from "../api.js";

export const labelModel = {
  data: {
    isLabelFormHidden: true,
    labelList: [],
    labelName: "",
    labelDescription: "",
    color: "",
    controllers: [],
  },

  toggleIsLabelFormHidden() {
    this.data.isLabelFormHidden = !this.data.isLabelFormHidden;
  },

  async fetchLabelList() {
    const labelList = await fetchGetLabels();
    return labelList;
  },

  async fetchCreateLabel(newLabel) {
    try {
      const newLabeList = await fetchPostLabels(newLabel);
      this.data.labelList = newLabeList;
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  },

  async fetchDelayLabelList(signal) {
    const labelList = await fetchDelayLabels(signal);
    this.data.labelList = labelList;
  },

  addLabelList(newLabelList) {
    this.data.labelList = [...this.data.labelList, ...newLabelList];
  },

  setLabelName(inputLabelName) {
    this.data.labelName = inputLabelName;
  },
};
