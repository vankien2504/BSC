import React, { Component } from 'react';
import {ActivityIndicator, View, Text, Dimensions, StyleSheet, ScrollView, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window');
import DashboardData from "../../share/data-service/dashboard.data";
import ChartGauge from "./ChartGauge";
import ChartRadar from "./ChartRadar";
import ChartBubble from './ChartBubble';
import ExecuteResult from "./ExecuteResult";
import { hasListValue, hasValue, cloneObject } from "../../share/services/ultility";

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      DanhSachChiTieuThayDoi: [],
      GaugeData: {},
      DanhSachNhomKetQuaThucHien:[],
      LayDanhSachKetQuaThucHien:[],
      lstDataTongQuanKQTHTheoVienCanh:[],
      DanhSachChiTieuTyBubble:[],
      DanhSachDiemXepHang:[]
    };
  }
  componentWillMount(){
    this.LayDanhSachChiTieuThayDoi();

  }
  componentDidMount() {
    this.LayDanhSachDiemXepHang();
    this.GaugeChart();
    this.LayDanhSachNhomKetQuaThucHien();
    this.LayDanhSachKetQuaThucHien();
    this.LayDanhSachChiTieuTyBubble();
   
  }


  LayDanhSachChiTieuThayDoi = async () => {
    let param = {};
    await DashboardData.LayDanhSachChiTieuThayDoi(param).then((res) => {
      if (res) {
        this.state.DanhSachChiTieuThayDoi = res.Data
        this.setState({ DanhSachChiTieuThayDoi: res.Data });
      }
    });

  }
  GaugeChart = async () => {
    await DashboardData.GaugeChart().then((res) => {
      if (res) {
        this.setState({ isLoading: false })
        this.state.GaugeData = res;
        this.setState({ GaugeData: res })
      }
    });

  }
  LayDanhSachNhomKetQuaThucHien = async () => {
    let param = {};
    await DashboardData.LayDanhSachNhomKetQuaThucHien(param).then((res) => {
      if (res) {
        this.state.DanhSachNhomKetQuaThucHien = res.Data;
        this.setState({ DanhSachNhomKetQuaThucHien: res.Data });
      }
    });

  }
  buildDataChartNhen(lst) {
    let that = this;
    let result = [];
    lst.forEach(group_vc => {
      let item = {
        ID: 0,
        Code: "",
        Name: "",
        Color: "",
        ListData: []
      };
      let firstItem = group_vc.Items[0].Items[0];
      item.Code = firstItem.CodeVienCanh;
      item.Name = firstItem.NameVienCanh;
      item.Color = firstItem.ColorVienCanh;
      if (hasListValue(group_vc.Items)) {
        group_vc.Items.forEach(group_mt => {
          let firstMucTieu = group_mt.Items[0];
          item.ListData.push({
            ID: firstMucTieu.IDHeThongMucTieuNam_MucTieu,
            Code: firstMucTieu.CodeMucTieu,
            Name: firstMucTieu.NameMucTieu,
            MucDoThucHien: firstMucTieu.MucDoThucHienMucTieu,
            Color: firstMucTieu.ColorVienCanh,
            item: firstMucTieu
          });
        });
      }
      result.push(item);
    });
    this.setState({lstDataTongQuanKQTHTheoVienCanh:result});
  }
  LayDanhSachKetQuaThucHien = async () => {
    let param = {};
    await DashboardData.LayDanhSachKetQuaThucHien(param).then((res) => {
      if (res) {
        this.state.DanhSachKetQuaThucHien = res.Data;
        this.buildDataChartNhen(res.Data);
        this.setState({ DanhSachKetQuaThucHien: res.Data });
      }
    });

  }
  LayDanhSachChiTieuTyBubble = async () => {
    await DashboardData.LayDanhSachChiTieuTyBubble().then((res) => {
      if (res) {
        this.state.DanhSachChiTieuTyBubble = res.Data;
        this.setState({ DanhSachChiTieuTyBubble: res.Data })
      }
    });

  }
  LayDanhSachDiemXepHang = async () => {
    await DashboardData.LayDanhSachDiemXepHang().then((res) => {
      if (res) {
        this.state.DanhSachDiemXepHang = res.Data;
        this.setState({ DanhSachDiemXepHang: res.Data })
      }
    });

  }
  _renderItem({ item, index }) {
    return (
      <View style={{ height: 190, width: 170, }}>
        <View style={{ marginRight: 20, backgroundColor: '#FFF', height: 190, borderRadius: 3, padding: 10 }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ textAlign: 'left', fontWeight: '400', fontSize: 18 }}>
              TH
                    </Text>
            <Text style={{ flex: 1 }}>

            </Text>
            <Text style={{ textAlign: 'right', fontWeight: '700', fontSize: 18 }}>
              {Number((parseFloat(item.DiemKetQua)).toFixed(2))}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ textAlign: 'left', fontWeight: '400', fontSize: 18, color: '#dbdee7' }}>
              KH
                    </Text>
            <Text style={{ flex: 1 }}>

            </Text>
            <Text style={{ textAlign: 'left', fontWeight: '400', fontSize: 18, color: '#dbdee7' }}>
              {item.ChiSo}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ textAlign: 'left', fontWeight: '400', fontSize: 13, color: '#959db3' }}>
              Đơn vị:
                    </Text>
            <Text style={{ flex: 1 }}>

            </Text>
            <Text style={{ textAlign: 'right', fontSize: 13 }}>
              {item.TenDonViTinh}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ flex: 1 }}>

            </Text>
            <Text style={{ textAlign: 'left', fontWeight: '400', fontSize: 13, color: 'rgb(192, 50, 33)' }}>
              Hoàn thành {item.MucDoThucHien ? item.MucDoThucHien : 0}%
                    </Text>

          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text numberOfLines={2} style={{ textAlign: 'left', fontWeight: '400', fontSize: 13 }}>
              {item.Name}
            </Text>

          </View>
        </View>
      </View>
    );

  }
  _renderItemRadarChart({ item, index }) {
    return (
        <ChartRadar RadarData={item} />
    )
  }
  render() {
    if (this.state.isLoading) {
      return (<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(255,255,255, 0.6)' }}>
        <ActivityIndicator size="large" color="#F1802E" />
        <Text style={{ color: '#F1802E', textAlign: "center" }}>
          Đang load chart
      </Text>

      </View>);
    }
    return (
      <View>
        <ScrollView>
          <View style={{ margin: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#5a6276' }}>
              Cập nhật chỉ tiêu thay đổi
          </Text>
          </View>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            // layout= { ' tinder'}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            enableMomentum={true}
            data={this.state.DanhSachChiTieuThayDoi}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemHeight={190}
            itemWidth={170}
            activeSlideAlignment={'start'}
            inactiveSlideScale={1}
          />
          <View style={{ margin: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#5a6276' }}>
              Kết quả thực hiện
          </Text>
          </View>
          <View style={{ padding: 10, backgroundColor: '#FFF' }}>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#5a6276' }}>
              Tổng quan kết quả thực hiện
          </Text>
          </View>
          <ChartGauge GaugeData={this.state.GaugeData} />
          <View>
            <View style={{ padding: 10, backgroundColor: '#FFF' }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#5a6276' }}>
                Kết quả thực hiện
          </Text>
            </View>

            <FlatList
            data={this.state.DanhSachNhomKetQuaThucHien}
            extraData={this.state}
            keyExtractor={(item) => item.ID.toString()}
            renderItem={({ item }) =>   <ExecuteResult DanhSachNhomKetQuaThucHien={item} />}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefesh}
            windowSize={5}
            onEndReachedThreshold={0.5}
            removeClippedSubviews={true}
            disableVirtualization={true}
            initialNumToRender={5}
            />
          </View>

          <View>
            <View style={{ padding: 10, backgroundColor: '#FFF' }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#5a6276' }}>
              Tổng quan kết quả theo viễn cảnh 
          </Text>
            </View>
            {/* <FlatList
            data={this.state.lstDataTongQuanKQTHTheoVienCanh}
            extraData={this.state}
            keyExtractor={(item) => item.ID.toString()}
            renderItem={({ item }) =>  <ChartRadar RadarData={item} />}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefesh}
            windowSize={5}
            onEndReachedThreshold={0.5}
            removeClippedSubviews={true}
            disableVirtualization={true}
            initialNumToRender={5}
            /> */}

<Carousel
            ref={(c) => { this._carousel = c; }}
            // layout= { ' tinder'}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            enableMomentum={true}
            data={this.state.lstDataTongQuanKQTHTheoVienCanh}
            renderItem={this._renderItemRadarChart}
            sliderWidth={width}
            itemHeight={190}
            itemWidth={170}
            activeSlideAlignment={'start'}
            inactiveSlideScale={1}
          />
          </View>
          <View>
            <View style={{ padding: 10, backgroundColor: '#FFF' }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#5a6276' }}>
              Tổng quan chỉ tiêu theo tỉ lệ 
          </Text>
            </View>
            <ChartBubble BubbleData={this.state.DanhSachChiTieuTyBubble} DashboardColor={this.state.DanhSachDiemXepHang} />
            <View style={{marginBottom:50}}> 

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'blue',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  slider: {
    marginTop: 15,
    overflow: 'visible' // for custom animations
  },
})
export default DashboardScreen;
