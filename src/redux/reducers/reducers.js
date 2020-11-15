import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_DANH_MUC_KHOA_HOC,
} from "../../constants/constants";

const stateDefault = {
  dsKhoaHoc: [],
  dmKhoaHoc: [],
  showCategories: false,
};

export const courses = (state = stateDefault, action) => {
  if (action.type === LAY_DANH_SACH_KHOA_HOC) {
    state.dsKhoaHoc = action.payload;
    console.log("state reducers 1", state);
    return { ...state };
  }
  if (action.type === LAY_DANH_MUC_KHOA_HOC) {
    state.dmKhoaHoc = action.payload;
    console.log("LAY_DANH_MUC_KHOA_HOC reducers 1", state);
    return { ...state };
  }

  return { ...state };
};
