import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartView from 'react-native-highcharts';
import { hasListValue, hasValue, cloneObject } from "../../share/services/ultility";
import DashboardData from "../../share/data-service/dashboard.data";
import GLOBAL from '../../share/global'
import { Global } from '@jest/types';
class ChartBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BubbleData: this.props.BubbleData,
            series:[],
            max:0,
            DanhSachDiemXepHang:[]
        };
    }
    componentWillReceiveProps(nextProps) {
        // chỗ này đang bị load 2 lần
        if (this.props.BubbleData != nextProps.BubbleData) {
            this.setState({ BubbleData: nextProps.BubbleData });
        }
    }
    componentWillMount(){
        this.LayDanhSachDiemXepHang();
    }
    LayDanhSachDiemXepHang = async () => {
        await DashboardData.LayDanhSachDiemXepHang().then((res) => {
          if (res) {
            this.state.DanhSachDiemXepHang = res.Data;
            this.setState({ DanhSachDiemXepHang: res.Data })
            this.buildSeries();
          }
        });
    
      }
    buildSeries() {
        let that = this;
        let max = 150;
        let data = [];
        //sort from từ lớn tới bé
        let lstColor = cloneObject(this.state.DanhSachDiemXepHang).reverse();
        lstColor.forEach(range => {
          if (hasValue(range.To)) {
            if (max < range.To) {
              max = range.To
            }
          }
        });
        for (let index = 0; index < this.state.BubbleData.length; index++) {
          const e =this.state.BubbleData[index];
          if (hasValue(e.MucDoThucHien)) {
            if (e.MucDoThucHien > max) {
              max = e.MucDoThucHien
            }
          }
          const mucdo = e.MucDoThucHien ? Number((parseFloat(e.MucDoThucHien)).toFixed(2)) : 0;
          const trongSo = e.TrongSoTongThe ?  Number((parseFloat(e.TrongSoTongThe)).toFixed(2)) : 0; 
          data.push({
            x: index + 1, y: mucdo, z: trongSo, Code: e.Code, item: e,
          })
        }
        let result = [];
        //danh sách màu nền chart
        lstColor.forEach(range => {
          result.push({
            type: 'area',
            data: [{ x: 0, y: range.To ? range.To : max }, { x: this.state.BubbleData.length + 1, y: range.To ? range.To : max }],
            color: range.Color,
          });
        });
        result.push({
          data: data,
          type: 'bubble',
          dataLabels: {
            enabled: true,
            format: '<span style="color:#26282e">{point.Code}</span>',
            useHTML: true,
    
          }
        });
        this.setState({
            series:result,
            max:max
        })
        //click vào để xem chi tiết
        // that.xemChiTiet
      }
    render() {

        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
      
              // plotBorderWidth: 1,
              zoomType: 'xy',
              height: 400,
              style: {
                fontFamily: 'Muli'
              },
      
            },
            credits: {
              enabled: false
            },
            legend: {
              enabled: false
            },
      
            title: null,
      
            subtitle: null,
            exporting: {
              enabled: false
            },
      
            xAxis: {
              // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              labels: {
                enabled: false
              },
              tickWidth: 0,
              min: 0,
      
            },
      
            yAxis: {
              lineColor: "",
              gridLineWidth: 1,
              title: {
                text: 'Mức độ hoàn thành'
              },
              labels: {
                format: '{value} '
              },
              min: 0,
              max: this.state.max,
              maxPadding: 0.2,
      
            },
      
            tooltip: {
              enabled: true,
              useHTML: true,
              formatter: function () {
      
                let item = this.point.item;
                let th = item.DiemKetQua ? utl.number.roundTo(item.DiemKetQua, 2) : "-";
                let mucdo = item.MucDoThucHien ? utl.number.roundTo(item.MucDoThucHien, 2) : "-";
                return `
                        <div class="tooltip-bubble-3p">
                        <div class="ten text-center">
                        `+ item.Code + ` - ` + item.Name + `
                        </div>    
                        <div class="chiso text-center">
                          TH / <span class="kh">KH</span> : `+ item.ChiSo + ` / <span class="kh">` + th + `</span>
                          (`+ item.TenDonViTinh + `)
                        </div>             
                        <div class="hoanthanh text-center">
                        Hoàn thành `+ mucdo + `%
                        </div>
                        <div class="xem-chi-tiet text-center">
                        Click để xem chi tiết
                        </div>
                        </div>
                        `
              },
              followPointer: true
            },
            plotOptions: {
      
              series: {
      
                dataLabels: {
                  enabled: false
                }
              },
              area: {
                enableMouseTracking: false,
                allowPointSelect: false,
                tooltip: {
                  enabled: false,
                },
                states: {
                  inactive: {
                    opacity: 1
                  }
                },
                marker: {
                  enabled: false
                }
              },
              bubble: {
                cursor: 'pointer',
                events: {
                  click: function (e) {
                    xemChiTiet.emit(e.point.item)
                  }
                },
                marker: {
                  fillColor: '#FFFFFF',
                  lineColor: "#FFFFFF", // inherit from series
                  states: {
                    hover: {
                      fillColor: '#FFFFFF',
                      lineColor: '#36c8cf',
      
                    }
                  }
                },
                states: {
                  inactive: {
                    opacity: 1
                  },
      
      
                }
              }
            },
      
      
      
            series: this.state.series
          };

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };

        return (
            <ChartView style={{ height: 450 }} config={conf} options={options} guage={true} more={true}></ChartView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default ChartBubble;
