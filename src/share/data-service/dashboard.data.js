import AsyncStorage from '@react-native-community/async-storage';
import DashboardService from "../services/dashboar.service";
const GLOBAL = require('../global.js');
import { hasListValue, hasValue, cloneObject } from "../services/ultility";
const DashboardData = {
    LayDanhSachChiTieuThayDoi: function (params) {
        return new Promise(
            function (resolve, reject) {
                AsyncStorage.getItem('DanhSachChiTieuThayDoi').then((res, error) => {
                    if (res) {
                        let DanhSachChiTieuThayDoi = JSON.parse(res);
                        resolve(DanhSachChiTieuThayDoi);
                    } else {
                        let param = { "request": { "Page": 1, "PageSize": 0, "Filter": "", "Group": "", "Sort": "" }, "IDHeThongMucTieuNam": 269, "TanSuat": 1, "GiaTriTanSuat": "", "IDDonVi": null, "IDChucDanh": null, "IDNhanSu": null };
                        DashboardService.LayDanhSachChiTieuThayDoi(param).then((res) => {
                            let dataObject = JSON.parse(res);
                            // GLOBAL.userInfo = dataObject;
                            try {
                                AsyncStorage.setItem('DanhSachChiTieuThayDoi', res);
                                resolve(dataObject);
                            } catch (e) {
                                // save error
                                resolve(false);
                            }
                        }, (error) => {
                            resolve(false);
                        })
                    }
                });
            }
        );
    },
    LayDanhSachDiemXepHang: function (params) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const value = await AsyncStorage.getItem('DanhSachDiemXepHang');
                    if (value !== null) {
                        let dataObject = JSON.parse(value);
                        GLOBAL.lstReportColor.DashboardColor = dataObject.Data
                        resolve(dataObject)
                    } else {
                        let that = this;
                        that.typeDashboard = 'ct';
                        let filter = "";
                        switch (that.typeDashboard) {
                            case "ct":
                                filter = "Type~eq~" + 1;
                                break;
                            case "bp":
                                filter = "Type~eq~" + 2;
                                break;
                            case "ns":
                                filter = "Type~eq~" + 3;
                                break;
                            default:
                                filter = "Type~eq~" + 1;
                                break;
                        }

                        let param = {
                            request: {
                                Page: 1,
                                PageSize: 0,
                                Filter: filter,
                                Sort: "From-asc",
                                Group: ""
                            }
                        }
                        DashboardService.LayDanhSachDiemXepHang(param).then((res) => {
                            let dataObject = JSON.parse(res);
                            // GLOBAL.userInfo = dataObject;
                            try {
                                AsyncStorage.setItem('DanhSachDiemXepHang', res);
                                GLOBAL.lstReportColor.DashboardColor = dataObject.Data;
                                resolve(dataObject);
                            } catch (e) {
                                // save error
                                resolve(false);
                            }
                        }, (error) => {
                            resolve(error);
                        })
                    }
                } catch (e) {
                    // error reading value
                    resolve(e);
                }
            }
        );
    },
    LayTongQuanKetQuaThucHien: function (params) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const value = await AsyncStorage.getItem('TongQuanKetQuaThucHien:');
                    if (value !== null) {
                        let dataObject = JSON.parse(value);
                        resolve(dataObject)
                    } else {
                        let param = { "request": { "Page": 1, "PageSize": 0, "Filter": "", "Group": "", "Sort": "" }, "IDHeThongMucTieuNam": 269, "TanSuat": 1, "GiaTriTanSuat": "", "IDDonVi": null, "IDChucDanh": null, "IDNhanSu": null };
                        DashboardService.LayTongQuanKetQuaThucHien(param).then((res) => {
                            let dataObject = JSON.parse(res);
                            // GLOBAL.userInfo = dataObject;
                            try {
                                AsyncStorage.setItem('TongQuanKetQuaThucHien:', res);
                                resolve(dataObject);
                            } catch (e) {
                                // save error
                                resolve(false);
                            }
                        }, (error) => {
                            resolve(error);
                        })
                    }
                } catch (e) {
                    // error reading value
                    resolve(e);
                }
            }
        );
    },
    GaugeChart: function (params){
        return new Promise(
            async (resolve, reject) => {
                
                let that = this;
                let max = 120;
                let value = 0;
                let lstDiemXepHang=[];
                let param ={};
                // chỗ này đang có vấn đề chưa load xong đã chạy chỗ khác
                await DashboardData.LayTongQuanKetQuaThucHien(param).then((res) => {
                    if (res) {
                        value = res.Data[0].TongDiemQuyDoi ? Number((parseFloat(res.Data[0].TongDiemQuyDoi)).toFixed(2)) : 0;
                    }
                });
                await DashboardData.LayDanhSachDiemXepHang(param).then((res) => {
                    if (res) {
                        lstDiemXepHang = res.Data;
                    }
                });
                
                if (value > max) {
                    max = value;
                    max += 20;
                }
                //sort from từ lớn tới bé
                let lstColor = cloneObject(lstDiemXepHang).reverse();

                lstColor.forEach(range => {
                    if (hasValue(range.To)) {
                        if (max < range.To) {
                            max = range.To
                        }
                    }
                });
                let plotBands = [];
                lstColor.forEach(range => {
                    if (hasValue(range.To)) {
                        if (max < range.To) {
                            max = range.To
                        }
                    }
                });
                lstColor.forEach(range => {
                    plotBands.push({
                        from: range.From ? range.From : 0,
                        to: range.To ? range.To : max,
                        color: range.Color,
                        innerRadius: '65%',
                        outerRadius: '100%',
                        // shape: 'arc'
                    });
                });
                let returnData={plotBands:plotBands, value: value}
                
                resolve(returnData)
            }
        );
    },
    LayDanhSachNhomKetQuaThucHien: function (params) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const value = await AsyncStorage.getItem('DanhSachNhomKetQuaThucHien:');
                    if (value !== null) {
                        let dataObject = JSON.parse(value);
                        resolve(dataObject)
                    } else {
                        let param = {"request":{"Page":1,"PageSize":0,"Filter":"","Group":"","Sort":"From-desc"},"IDHeThongMucTieuNam":269,"TanSuat":1,"GiaTriTanSuat":"","IDDonVi":null,"IDChucDanh":null,"IDNhanSu":null};
                        DashboardService.LayDanhSachNhomKetQuaThucHien(param).then((res) => {
                            let dataObject = JSON.parse(res);
                            // GLOBAL.userInfo = dataObject;
                            try {
                                AsyncStorage.setItem('DanhSachNhomKetQuaThucHien:', res);
                                resolve(dataObject);
                            } catch (e) {
                                // save error
                                resolve(false);
                            }
                        }, (error) => {
                            resolve(error);
                        })
                    }
                } catch (e) {
                    // error reading value
                    resolve(e);
                }
            }
        );
    },
    LayDanhSachKetQuaThucHien: function (params) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const value = await AsyncStorage.getItem('DanhSachKetQuaThucHien:');
                    if (value !== null) {
                        let dataObject = JSON.parse(value);
                        resolve(dataObject)
                    } else {
                        let param = {"request":{"Page":1,"PageSize":0,"Filter":"","Group":"IDHeThongMucTieuNam_VienCanh-asc~IDHeThongMucTieuNam_MucTieu-asc","Sort":"Sort~asc"},"IDHeThongMucTieuNam":269,"TanSuat":1,"GiaTriTanSuat":"","IDDonVi":null,"IDChucDanh":null,"IDNhanSu":null};
                        DashboardService.LayDanhSachKetQuaThucHien(param).then((res) => {
                            let dataObject = JSON.parse(res);
                            // GLOBAL.userInfo = dataObject;
                            try {
                                AsyncStorage.setItem('DanhSachKetQuaThucHien:', res);
                                resolve(dataObject);
                            } catch (e) {
                                // save error
                                resolve(false);
                            }
                        }, (error) => {
                            resolve(error);
                        })
                    }
                } catch (e) {
                    // error reading value
                    resolve(e);
                }
            }
        );
    },
    LayDanhSachChiTieuTyBubble: function (params) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const value = await AsyncStorage.getItem('DanhSachChiTieuTyBubble:');
                    if (value !== null) {
                        let dataObject = JSON.parse(value);
                        resolve(dataObject)
                    } else {
                        let param = {"request":{"Page":1,"PageSize":10,"Filter":"","Group":"","Sort":"TrongSoTongThe-desc"},"IDHeThongMucTieuNam":269,"TanSuat":1,"GiaTriTanSuat":"","IDDonVi":null,"IDChucDanh":null,"IDNhanSu":null}
                        DashboardService.LayDanhSachChiTieuTyBubble(param).then((res) => {
                            let dataObject = JSON.parse(res);
                            // GLOBAL.userInfo = dataObject;
                            try {
                                AsyncStorage.setItem('DanhSachChiTieuTyBubble:', res);
                                resolve(dataObject);
                            } catch (e) {
                                // save error
                                resolve(false);
                            }
                        }, (error) => {
                            resolve(error);
                        })
                    }
                } catch (e) {
                    // error reading value
                    resolve(e);
                }
            }
        );
    },
}
export default DashboardData;

// module.exports = {
//     DanhSachChiTieuThayDoi: {},
// }