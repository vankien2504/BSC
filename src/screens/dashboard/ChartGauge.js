import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartView from 'react-native-highcharts';
class ChartGauge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plotBands: this.props.plotBands,
            value: this.props.value,
            GaugeData: this.props.GaugeData
        };
    }
    componentWillReceiveProps(nextProps) {
        // chỗ này đang bị load 2 lần
        if (this.props.GaugeData != nextProps.GaugeData) {
            this.setState({ GaugeData: nextProps.GaugeData });
        }
    }
    render() {

        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
                type: 'gauge',
                backgroundColor: "#fff",
                // plotBorderWidth: 1,
                plotBackgroundColor: "#fff",

                plotBackgroundImage: null,
                height: 265,
                style: {
                    fontFamily: 'Muli'
                }
            },
            title: null,
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            pane: {
                center: ['50%', '70%'],

                size: '120%',
                startAngle: -120,
                endAngle: 120,
                background: [
                    {
                        borderWidth: 0,
                        outerRadius: '100%',
                        backgroundColor: null
                    },
                    {
                        borderWidth: 0,
                        outerRadius: '100%',
                        backgroundColor: null
                    },
                    {
                        borderWidth: 0,
                        outerRadius: '100%',
                        backgroundColor: null
                    }

                ]

            },
            tooltip: {
                enabled: false
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 120,
                // max: that.max,
                lineWidth: 0,

                minorTickInterval: 1,
                // minorTickWidth: 1,
                // minorTickLength: 10,
                // minorTickPosition: 'inside',
                minorTickColor: '#f0f2f8',
                minorTickPosition: 'outside',
                tickPosition: 'outside',
                tickInterval: 10,
                // labels: {
                //   rotation: 'auto',
                //   distance: 20
                // },
                // tickPixelInterval: 30,
                // tickWidth: 2,
                // tickPosition: 'inside',
                // tickLength: 10,
                // tickColor: '#666',
                // labels: {
                //   step: 2,
                //   rotation: 'auto'
                // },
                // title: {
                //   text: '%'
                // },
                labels: {
                    distance: 19,

                },
                plotBands: this.state.GaugeData.plotBands
                //   [{
                //     from: 0,
                //     to: 76,
                //     color: '#fd7676',
                //     innerRadius: '65%',
                //     outerRadius: '100%',
                //     // shape: 'arc'

                //   }, {
                //     from: 76,
                //     to: 96,
                //     color: '#ffcb50',
                //     innerRadius: '65%',
                //     outerRadius: '100%',
                //     // shape: 'arc'
                //   }, {
                //     from: 96,
                //     to: that.max,
                //     color: '#56d9fe',
                //     innerRadius: '65%',
                //     outerRadius: '100%',
                //     // shape: 'arc'
                //   }
                // ]
            },
            plotOptions: {
                gauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true,

                    },
                    dial: {
                        borderColor: "#f0f2f8",
                        backgroundColor: "#fff",
                        baseWidth: 16,
                        radius: "90%",
                        topWidth: 3.5

                    }
                }
            },


            series: [{
                name: 'Mức độ thực hiện',
                // data: [that.value],
                data: [this.state.GaugeData.value],
                type: undefined,
                tooltip: {
                    valueSuffix: ' %'
                },
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-family: Muli;font-weight: 800;font-size:40px;color:#5a6276'
                        + '">{y}%</span><br/>' +
                        '<span style="font-size:13px;color:#959db3">Mức độ thực hiện</span></div>',
                    y: -47
                },
            }]

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
            <ChartView style={{ height: 300 }} config={conf} options={options} guage={true} more={true}></ChartView>
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
export default ChartGauge;
