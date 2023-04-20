import { fetchGetLabels, fetchPostLabels } from "../api.js";

export const labelModel = {
  data: {
    isLabelFormHidden: true,
    labelList: [],
    labelName: "",
    labelDescription: "",
    color: "",
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

  addLabelList(newLabelList) {
    this.data.labelList = [...this.data.labelList, ...newLabelList];
  },

  setLabelName(inputLabelName) {
    this.data.labelName = inputLabelName;
  },
};
