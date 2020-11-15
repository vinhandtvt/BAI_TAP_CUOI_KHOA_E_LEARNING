import axios from "../../api/axios";
import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_DANH_MUC_KHOA_HOC,
} from "../../constants/constants";

export const layDanhSachKhoaHoc = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc");

    dispatch({ type: LAY_DANH_SACH_KHOA_HOC, payload: data });
  };
};

export const layDanhMucKhoaHoc = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");

    dispatch({
      type: LAY_DANH_MUC_KHOA_HOC,
      payload: data,
    });
  };
};
