const GLOBAL = require('./global');
module.exports = {
    Login: {
        connectToken: {
            method: "POST",
            url: GLOBAL.serviceURL.urlIDServer + "identity/connect/token",
            clientSecret: 'bW9iaWxlOm1vYmlsZW1pc29jZA=='
        },
    },
    BSC: {
        USER_UserProfile_GetCurrentUser: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + "api/USER/USER_UserProfile_GetCurrentUser"
        },
        LayDanhSachVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachVienCanh',
        },
        CopyDanhSachVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CopyDanhSachVienCanh',
        },
        LayDanhSachTuDienMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachTuDienMucTieu',
        },
        LayDanhSachTuDienChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachTuDienChiTieu',
        },
        LayDanhSachTuDienMucTieuChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachTuDienMucTieuChiTieu',
        },
        TaoMoiTuDienMucTieuChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiTuDienMucTieuChiTieu',
        },
        CapNhatTuDienMucTieuChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatTuDienMucTieuChiTieu',
        },
        XoaTuDienMucTieuChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaTuDienMucTieuChiTieu',
        },
        LayDanhSachHamTinhDuLieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHamTinhDuLieu',
        },
        LayDanhSachHamSoSanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHamSoSanh',
        },
        LayDanhSachHamLogic: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHamLogic',
        },
        LayDanhSachYeuToTaoCongThuc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachYeuToTaoCongThuc',
        },

        //#region Từ điển cấu phần
        LayDanhSachTuDienCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachTuDienCauPhan',
        },
        TaoMoiTuDienCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiTuDienCauPhan',
        },
        CapNhatTuDienCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatTuDienCauPhan',
        },
        XoaTuDienCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaTuDienCauPhan',
        },
        //#endregion

        //#region bản đồ chiến lược
        LayDanhSachBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachBanDoChienLuoc',
        },
        LayChiTietBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietBanDoChienLuoc',
        },
        TaoMoiBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ThemMoiBanDoChienLuoc',
        },
        CapNhatBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatBanDoChienLuoc',
        },
        XoaBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaBanDoChienLuoc',
        },
        DuyetBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DuyetBanDoChienLuoc',
        },
        TaoMoiBanDoChienLuocVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiBanDoChienLuocVienCanh',
        },
        CapNhatBanDoChienLuocVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatBanDoChienLuocVienCanh',
        },
        SaoChepBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/SaoChepBanDoChienLuoc',
        },
        CapNhatBanDoChienLuocMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatBanDoChienLuocMucTieu',
        },
        XoaBanDoChienLuocVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaBanDoChienLuocVienCanh',
        },
        ThemMoiBanDoChienLuocMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ThemMoiBanDoChienLuocMucTieu',
        },
        XoaBanDoChienLuocMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaBanDoChienLuocMucTieu',
        },
        LayDanhSachBanDoChienLuoc_MucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachBanDoChienLuoc_MucTieu',
        },
        LayDanhSachHeThongMucTieuNam_MucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNam_MucTieu',
        },
        TaoMoiBanDoChienLuocMucTieuLienKet: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiBanDoChienLuocMucTieuLienKet',
        },
        XoaBanDoChienLuocMucTieuLienKet: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaBanDoChienLuocMucTieuLienKet',
        },
        ApDungBanDoChienLuoc: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ApDungBanDoChienLuoc',
        },
        //#endregion

        //#region hệ thống mục tiêu năm
        LayDanhSachHeThongMucTieuNam: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNam',
        },
        LayChiTietHeThongMucTieuNam: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietHeThongMucTieuNam',
        },
        TaoMoiHeThongMucTieuNam: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNam',
        },
        CapNhatHeThongMucTieuNam: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNam',
        },
        XoaHeThongMucTieuNam: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNam',
        },
        SaoChepHeThongMucTieuNam: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/SaoChepHeThongMucTieuNam',
        },
        //mục tiêu hệ thống mục tiêu năm
        TaoMoiHeThongMucTieuNamVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamVienCanh',
        },
        CapNhatHeThongMucTieuNamVienCanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamVienCanh',
        },
        TaoMoiHeThongMucTieuNamMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamMucTieu',
        },
        CapNhatHeThongMucTieuNamMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamMucTieu',
        },
        TaoMoiHeThongMucTieuNamMucTieu_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamMucTieu_CongTy',
        },
        CapNhatHeThongMucTieuNamMucTieu_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamMucTieu_CongTy',
        },
        XoaHeThongMucTieuNamMucTieu_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamMucTieu_CongTy',
        },
        XoaHeThongMucTieuNamMucTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamMucTieu',
        },
        TaoMoiHeThongMucTieuNamMucTieuLienKet: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamMucTieuLienKet',
        },
        XoaHeThongMucTieuNamMucTieuLienKet: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamMucTieuLienKet',
        },
        LayChiTietHeThongMucTieuNam_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietHeThongMucTieuNam_TanSuat_CongTy',
        },
        //chỉ tiêu
        TaoMoiHeThongMucTieuNamChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu',
        },
        CapNhatHeThongMucTieuNamChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu',
        },
        XoaHeThongMucTieuNamChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamChiTieu',
        },
        //#endregion

        //#region Hệ thống mục tiêu - Thiết lập Đăng ký - Công ty
        LayThietLapHeThongMucTieuNam_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_CongTy',
        },
        LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan',
        },
        TaoMoiHeThongMucTieuNamChiTieuPhanBo: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieuPhanBo',
        },
        CapNhatHeThongMucTieuNamChiTieuPhanBo: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieuPhanBo',
        },
        //#endregion

        //#region Hệ thống mục tiêu - Thiết lập Chỉ số - Công ty
        LayThietLapHeThongMucTieuNam_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_TanSuat_CongTy',
        },
        CapNhatHeThongMucTieuNamVienCanh_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamVienCanh_TanSuat_CongTy',
        },
        CapNhatHeThongMucTieuNamMucTieu_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamMucTieu_TanSuat_CongTy',
        },
        CapNhatHeThongMucTieuNamChiTieu_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_TanSuat_CongTy',
        },

        LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_TanSuat: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_TanSuat',
        },
        TaoMoiHeThongMucTieuNamChiTieu_PhanBo_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu_PhanBo_TanSuat_CongTy',
        },
        CapNhatHeThongMucTieuNamChiTieu_PhanBo_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_PhanBo_TanSuat_CongTy',
        },

        LayDanhSachHeThongMucTieuNamChiTieu_TanSuat_ChiSo: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieu_TanSuat_ChiSo',
        },
        SaoChepBangThietLapChiSo: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/SaoChepBangThietLapChiSo',
        },
        LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_TanSuat_ChiSo: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_TanSuat_ChiSo',
        },

        //#endregion

        //#region Hệ thống mục tiêu - Thiết lập Đăng ký - Bộ phận
        LayThietLapHeThongMucTieuNam_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_BoPhan',
        },
        LayThietLapHeThongMucTieuNam_KRI_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_KRI_BoPhan',
        },
        TaoMoiHeThongMucTieuNamVienCanh_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamVienCanh_BoPhan',
        },
        CapNhatHeThongMucTieuNamVienCanh_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamVienCanh_BoPhan',
        },
        TaoMoiHeThongMucTieuNamMucTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamMucTieu_BoPhan',
        },
        CapNhatHeThongMucTieuNamMucTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamMucTieu_BoPhan',
        },
        XoaHeThongMucTieuNamMucTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamMucTieu_BoPhan',
        },
        TaoMoiHeThongMucTieuNamChiTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu_BoPhan',
        },
        CapNhatHeThongMucTieuNamChiTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_BoPhan',
        },
        XoaHeThongMucTieuNamChiTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamChiTieu_BoPhan',
        },
        LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_CaNhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_CaNhan',
        },
        TaoMoiHeThongMucTieuNamChiTieuPhanBo_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieuPhanBo_BoPhan',
        },
        CapNhatHeThongMucTieuNamChiTieuPhanBo_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieuPhanBo_BoPhan',
        },
        //#endregion

        //#region Hệ thống mục tiêu - Thiết lập Chỉ số - Bộ phận
        LayThietLapHeThongMucTieuNam_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_TanSuat_BoPhan',
        },
        CapNhatHeThongMucTieuNamVienCanh_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamVienCanh_TanSuat_BoPhan',
        },
        CapNhatHeThongMucTieuNamMucTieu_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamMucTieu_TanSuat_BoPhan',
        },
        CapNhatHeThongMucTieuNamChiTieu_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_TanSuat_BoPhan',
        },
        LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_CaNhan_TanSuat: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_CaNhan_TanSuat',
        },
        TaoMoiHeThongMucTieuNamChiTieu_PhanBo_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu_PhanBo_TanSuat_BoPhan',
        },
        CapNhatHeThongMucTieuNamChiTieu_PhanBo_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_PhanBo_TanSuat_BoPhan',
        },

        LayDanhSachHeThongMucTieuNamChiTieu_TanSuat_ChiSo_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieu_TanSuat_ChiSo_BoPhan',
        },
        SaoChepBangThietLapChiSo_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/SaoChepBangThietLapChiSo_BoPhan',
        },
        LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_CaNhan_TanSuat_ChiSo: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNamChiTieuPhanBoBoPhan_CaNhan_TanSuat_ChiSo',
        },
        LayThietLapHeThongMucTieuNam_TanSuat_KRI_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_TanSuat_KRI_BoPhan',
        },
        //#endregion

        //#region Danh sách bộ phận phân bổ
        DanhSachBoPhan_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DanhSachBoPhan_CongTy',
        },
        DanhSachBoPhan_DuoiCapTrucTiep: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DanhSachBoPhan_DuoiCapTrucTiep',
        },
        DanhSachBoPhan_ThietLapKPI: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DanhSachBoPhan_ThietLapKPI',
        },
        LayHeThongMucTieuNamMucTieu_CongTy_ChuaPhanBoBoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayHeThongMucTieuNamMucTieu_CongTy_ChuaPhanBoBoPhan',
        },
        LuuBoSungHeThongMucTieuNamMucTieu_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LuuBoSungHeThongMucTieuNamMucTieu_BoPhan',
        },
        //#endregion

        //#region Theo dõi nhập liệu
        LayDanhSachTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachTheoDoiCauPhan',
        },
        LayDanhSachDuyetTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachDuyetTheoDoiCauPhan',
        },
        LayChiTietTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietTheoDoiCauPhan',
        },
        ThemMoiTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ThemMoiTheoDoiCauPhan',
        },
        CapNhatTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatTheoDoiCauPhan',
        },
        XoaTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaTheoDoiCauPhan',
        },
        GuiDuyetTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/GuiDuyetTheoDoiCauPhan',
        },
        TraVeTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TraVeTheoDoiCauPhan',
        },
        DuyetTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DuyetTheoDoiCauPhan',
        },
        HuyDuyetTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/HuyDuyetTheoDoiCauPhan',
        },
        ExportTemplateTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ExportTemplateTheoDoiCauPhan',
        },
        ExportTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ExportTheoDoiCauPhan',
        },
        ImportTheoDoiCauPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ImportTheoDoiCauPhan',
        },
        //#endregion
        //#region thiết lập cá nhan
        // LayThietLapHeThongMucTieuNam_CaNhan: {
        //   method: "POST",
        //   url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_CaNhan',
        // },
        // DanhSachCaNhan_BoPhan: {
        //   method: "POST",
        //   url: GLOBAL.serviceURL.bsc + 'BSC/DanhSachCaNhan_BoPhan',
        // },
        DanhSachChucDanh_ThietLapKPI: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DanhSachChucDanh_ThietLapKPI',
        },
        LayThietLapHeThongMucTieuNam_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_ChucDanh',
        },
        LayThietLapHeThongMucTieuNam_TanSuat_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_TanSuat_ChucDanh',
        },
        TaoMoiHeThongMucTieuNamChiTieu_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu_ChucDanh',
        },
        CapNhatHeThongMucTieuNamChiTieu_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_ChucDanh',
        },
        TaoMoiHeThongMucTieuNamChiTieu_TanSuat_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu_TanSuat_ChucDanh',
        },
        CapNhatHeThongMucTieuNamChiTieu_TanSuat_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_TanSuat_ChucDanh',
        },
        LayThietLapHeThongMucTieuNam_TanSuat_CaNhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayThietLapHeThongMucTieuNam_TanSuat_CaNhan',
        },
        TaoMoiHeThongMucTieuNamChiTieu_TanSuat_NhanSu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNamChiTieu_TanSuat_NhanSu',
        },
        CapNhatHeThongMucTieuNamChiTieu_TanSuat_CaNhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamChiTieu_TanSuat_CaNhan',
        },
        XoaHeThongMucTieuNamChiTieu_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNamChiTieu_ChucDanh',
        },
        DanhSachNhanSu_ThuocChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DanhSachNhanSu_ThuocChucDanh',
        },
        CapNhatHeThongMucTieuNamMucTieu_TanSuat_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNamMucTieu_TanSuat_ChucDanh',
        },
        //#endregion
        //#region setting
        LayDanhSachDonViTinh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachDonViTinh',
        },
        LayChiTietDonViTinh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietDonViTinh',
        },
        UploadFileImport: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/UploadFileImport',
        },
        //#endregion
        //#region duyệt KPI công ty
        DuyetHeThongMucTieuNamChiTieu_TanSuat_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DuyetHeThongMucTieuNamChiTieu_TanSuat_CongTy',
        },
        DuyetHeThongMucTieuNamChiTieu_TanSuat_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DuyetHeThongMucTieuNamChiTieu_TanSuat_BoPhan',
        },
        DuyetHeThongMucTieuNamChiTieu_TanSuat_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/DuyetHeThongMucTieuNamChiTieu_TanSuat_ChucDanh',
        },

        LayTanSuatDuyet_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayTanSuatDuyet_BoPhan',
        },
        LayTanSuatDuyet_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayTanSuatDuyet_ChucDanh',
        },
        LayTanSuatDuyet_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayTanSuatDuyet_CongTy',
        },
        //#endregion
        //#region phát sinh
        PhanSinhNoiDungPhanBoChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/PhanSinhNoiDungPhanBoChucDanh',
        },
        PhanSinhNoiDungPhanBoCaNhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/PhanSinhNoiDungPhanBoCaNhan',
        },
        PhatSinhNoiDungPhanBoBoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/PhatSinhNoiDungPhanBoBoPhan',
        },
        //#endregion
        //#region tỉ trọng chức danh kiêm nhiệm
        LayDanhSachHeThongMucTieuNam_TiLeChucDanhKiemNhiem: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachHeThongMucTieuNam_TiLeChucDanhKiemNhiem',
        },
        TaoMoiHeThongMucTieuNam_TiLeChucDanhKiemNhiem: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiHeThongMucTieuNam_TiLeChucDanhKiemNhiem',
        },
        CapNhatHeThongMucTieuNam_TiLeChucDanhKiemNhiem: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatHeThongMucTieuNam_TiLeChucDanhKiemNhiem',
        },
        XoaHeThongMucTieuNam_TiLeChucDanhKiemNhiem: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaHeThongMucTieuNam_TiLeChucDanhKiemNhiem',
        },
        //#endregion
        //#region dashboard
        LayDanhSachChiTieuThayDoi: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachChiTieuThayDoi',
        },
        LayDanhSachNhomKetQuaThucHien: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachNhomKetQuaThucHien',
        },
        LayTongQuanKetQuaThucHien: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayTongQuanKetQuaThucHien',
        },
        LayDanhSachKetQuaThucHien: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachKetQuaThucHien',
        },
        LayChiTietKetQuaThucHienChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietKetQuaThucHienChiTieu',
        },
        LayDanhSachChiTieuTyBubble: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachChiTieuTyBubble',
        },
        LayCoCauBoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'SETTING/LayCoCauBoPhan',

        },
        //#endregion
        //#region
        BaoCaoHoanTatThietLap_CongTy: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/BaoCaoHoanTatThietLap_CongTy',
        },
        BaoCaoHoanTatThietLap_BoPhan: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/BaoCaoHoanTatThietLap_BoPhan',
        },
        BaoCaoHoanTatThietLap_ChucDanh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/BaoCaoHoanTatThietLap_ChucDanh',
        },
        //#endregion
        //#region nhóm chi tieu
        LayDanhSachThietLapNhomChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachThietLapNhomChiTieu',
        },
        LayDanhSachNhomChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachNhomChiTieu',
        },
        TaoMoiNhomChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/TaoMoiNhomChiTieu',
        },
        CapNhatNhomChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatNhomChiTieu',
        },
        XoaNhomChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaNhomChiTieu',
        },
        LayChiTietNhomChiTieu: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayChiTietNhomChiTieu',
        },
        //#endregion
        //#region điểm xếp hạng - xếp loại
        LayDanhSachDiemXepHang: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachDiemXepHang',
        },
        TaoMoiDiemXepHang: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ThemMoiDiemXepHang',
        },
        CapNhatDiemXepHang: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatDiemXepHang',
        },
        XoaDiemXepHang: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaDiemXepHang',
        },
        //#endregion
        //#region Đơn vị tính
        LayDanhSachThietLapDonViTinh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/LayDanhSachThietLapDonViTinh',
        },
        ThemMoiDonViTinh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/ThemMoiDonViTinh',
        },
        CapNhatDonViTinh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/CapNhatDonViTinh',
        },
        XoaDonViTinh: {
            method: "POST",
            url: GLOBAL.serviceURL.bsc + 'BSC/XoaDonViTinh',
        },
        //#endregion
    }


};