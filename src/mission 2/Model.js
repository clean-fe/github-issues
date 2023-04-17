import { fetchGetLabels } from "../api.js";

export const model = {
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

  addLabelList(newLabelList) {
    this.data.labelList = [...this.data.labelList, ...newLabelList];
  },

  setLabelName(inputLabelName) {
    this.data.labelName = inputLabelName;
  },

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
};
