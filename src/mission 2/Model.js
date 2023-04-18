import { fetchGetLabels } from "../api.js";

export const labelModel = {
  labelData: {
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

  addLabelList(newLabelList) {
    this.data.labelList = [...this.data.labelList, ...newLabelList];
  },

  setLabelName(inputLabelName) {
    this.data.labelName = inputLabelName;
  },
};
