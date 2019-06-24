import LibCommonService from './lib-common.service';
import CommonService from './common.service';
const GLOBAL = require('../global.js');
const API = require('../api.js');
const DashboardService = {
  GetData: function () {
    let api = { url: GLOBAL.serviceURL.urlIDServer + 'api/USER/USER_UserProfile_GetCurrentUser', method: 'GET' };
    return CommonService.GetUser(api);
  },
  LayDanhSachChiTieuThayDoi: function (params) {
    let api = API.BSC.LayDanhSachChiTieuThayDoi
    return CommonService.GetData(api, params)
  },
  LayDanhSachDiemXepHang: function (params) {
    let api = API.BSC.LayDanhSachDiemXepHang
    return CommonService.GetData(api, params)
  },
  LayTongQuanKetQuaThucHien: function (params) {
    let api = API.BSC.LayTongQuanKetQuaThucHien
    return CommonService.GetData(api, params)
  },
  LayDanhSachNhomKetQuaThucHien: function (params) {
    let api = API.BSC.LayDanhSachNhomKetQuaThucHien
    return CommonService.GetData(api, params)
  },
  LayDanhSachKetQuaThucHien: function (params) {
    let api = API.BSC.LayDanhSachKetQuaThucHien
    return CommonService.GetData(api, params)
  },
  LayDanhSachChiTieuTyBubble: function (params) {
    let api = API.BSC.LayDanhSachChiTieuTyBubble
    return CommonService.GetData(api, params)
  },
  EditData: function (params) {
    let api = API.TM.CapNhatCongViec
    return CommonService.EditData(api, params)
  },
}

export default DashboardService;



