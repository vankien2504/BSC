import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartView from 'react-native-highcharts';
import { hasListValue, hasValue, cloneObject } from "../../share/services/ultility";
class ChartRadar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RadarData: this.props.RadarData.ListData,
            RadarTotal:this.props.RadarData,
            lstSeries:[],
            lstCategorie:[]
        };
    }
    componentWillReceiveProps(nextProps) {
        // chỗ này đang bị load 2 lần
        if (this.props.RadarData != nextProps.RadarData) {
            this.setState({ RadarData: nextProps.RadarData });
        }
    }
    componentWillMount(){
         this.buildData();
    }
    buildData() {
        let that = this;
        that.state.lstSeries = [];
        that.state.lstCategories = [];
    
        if (hasListValue(this.state.RadarData)) {
          let lstKH = [];
          let lstTH = [];
          that.state.RadarData.forEach(item => {
              // đang thay dở cái là tròn số ở đây
            const mucdo = item.MucDoThucHien ? Number((parseFloat(item.MucDoThucHien)).toFixed(2)) : 0;
            that.state.lstCategories.push(item.Code);
            lstKH.push({ y: 100, name: item.Code + " - " + item.Name, tooltip: "Hoàn thành: " + mucdo, item: item });
            lstTH.push({ y: mucdo, name: item.Code + " - " + item.Name, tooltip: "Hoàn thành: " + mucdo, item: item })
            // that.lstSeries.push({
            //   x: 100,
            //   y: item.MucDoThucHien,
            //   name: item.Name,
            //   color: item.Color
            // })
          });
          this.state.lstSeries.push({
            name: 'KH',
            data: lstKH,
            type: "area",
            color: "#a5a5a5",
    
          });
          this.state.lstSeries.push({
            name: 'TH',
            data: lstTH,
            type: "area",
            color: "#837fee",
    
          });
        }
      }
    render() {

        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
                polar: true,
                // type: 'line'
                // borderColor: '#',
                borderWidth: 0,
                height: 200,
                style: {
                    fontFamily: 'Muli'
                },
                events: {
                    // click: function (e) {
                    //   debugger;
                    // },
                    load: function () {
                        let axis = this.xAxis[0]
                        let ticks = axis.ticks
                        let points = this.series[0].points
                        let tooltip = this.tooltip

                        points.forEach(function (point, i) {

                            if (ticks[i]) {
                                let label = ticks[i].label.element

                                label.onclick = function (e) {

                                    xemChiTiet.emit(point.item.item);
                                }
                                label.onmouseover = function (e) {
                                    e.stopPropagation()
                                    let item = point.item;
                                    tagTooltip.nativeElement.classList.add("show");
                                    tagTooltip.nativeElement.innerHTML = `
                          <div class="content-tiooltip-chart">
                          <div class="ten text-center">
                          `+ item.Code + ` - ` + item.Name + `
                          </div>                 
                          <div class="hoanthanh text-center">
                          Hoàn thành `+ utl.number.roundTo(item.MucDoThucHien, 2) + `%
                          </div>
                          <div class="xem-chi-tiet text-center">
                          Click để xem chi tiết
                          </div>
                          </div>
                          `;
                                    let style = "top: " + (e.offsetY + 20) + "px;left:" + (e.offsetX - 100) + "px;";
                                    tagTooltip.nativeElement.setAttribute("style", style)
                                }
                                label.onmouseout = function (e) {
                                    e.stopPropagation();

                                    tagTooltip.nativeElement.classList.remove("show");
                                    tagTooltip.nativeElement.innerHTML = ""
                                }
                            }

                        })
                    }
                }

            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            title: null,

            pane: {
                size: '80%'
            },

            xAxis: {
                categories:   this.state.lstCategories,
                tickmarkPlacement: 'on',
                lineWidth: 0,

            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                max: 200
            },

            tooltip: {
                enabled: false,
            },

            legend: {
                enabled: false
            },
            series: this.state.lstSeries
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
            <View>
 <ChartView style={{ height: 170 }} config={conf} options={options} guage={true} more={true}></ChartView>
            <Text style={{color:'#ff9200', justifyContent:'center', fontSize:15, fontWeight:'bold', textAlign:'center', backgroundColor:'#FFF'}}>
                {this.state.RadarTotal.Code} -  {this.state.RadarTotal.Name}
            </Text>
            </View>
           
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
export default ChartRadar;
