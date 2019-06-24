import React, { Component } from 'react';
import { View, Text,  StyleSheet, processColor} from 'react-native';
import _ from 'lodash';
import update from 'immutability-helper';
import {LineChart,BubbleChart} from 'react-native-charts-wrapper';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true,
      },
      animation: {
        durationX: 1500,
        durationY: 1500,
        easingX: 'EaseInCirc'
      }
    };
  }
  componentWillMount(){
    // this.props.navigation.navigate('HightChart')
  }
  componentDidMount() {
    const arrayData= [ {
      y: 5,
      size: 20,
      x: 5,
    },
    {
      y: 10,
      size: 100,
      x: 10,
    },
    {
      y: 15,
      size: 20,
      x: 15,
    },
    {
      y: 50,
      size: 20,
      x: 20,
    },
  ]
    const size = 5;
    const a = this._randomYValues(20, size);
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
              values:arrayData,
              label: 'DS 1',
              config: {
                color: processColor('#FFF'),
                highlightCircleWidth: 2,
                valueTextSize: 20,
                valueTextColor: processColor('red')
              }
            }],
          }
        }
      })
    );
  }
  _randomYValues(range: number, size: number) {
    return _.times(size, (index) => {
      return {
        y: Math.random() * range,
        size: Math.random() * range
      };
    });
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Text> DashboardScreen </Text>
      {/* <View style={styles.container}>
        <LineChart style={styles.chart}
          data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
        />
      </View> */}
      <View style={{flex: 1}}>

<View style={{height:80}}>
  <Text> selected entry</Text>
  <Text> {this.state.selectedEntry}</Text>
</View>


<View style={styles.container}>
  <BubbleChart
    style={styles.chart}
    data={this.state.data}
    legend={this.state.legend}
    animation={this.state.animation}
    onSelect={this.handleSelect.bind(this)}
    onChange={(event) => console.log(event.nativeEvent)}
  />
</View>

</View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1,
    backgroundColor:'#5cb800bf',
  }
});

export default DashboardScreen;
