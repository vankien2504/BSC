import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const GLOBAL = require('../share/global.js');
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentWillMount() {
    // this.setValue();
    // this.removeFew();
    this.CheckLogin();
  }
  CheckLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('tokenObject');
      if (value !== null) {
        // value previously stored  
        GLOBAL.Token = JSON.parse(value);
        this.setState({ isLoading: false })
        this.props.navigation.navigate('Dashboard');
      } else {
        this.setState({ isLoading: false })
        this.props.navigation.navigate('Login');
      }
    } catch (e) {
      // error reading value
    }
  }


  removeFew = async () => {
    const keys = ['tokenObject', 'DanhSachChiTieuThayDoi', 'DanhSachDiemXepHang', 'DanhSachNhomKetQuaThucHien',
    'DanhSachKetQuaThucHien']
    try {
      await AsyncStorage.multiRemove(keys)
    } catch (e) {
      // remove error
    }
    console.log('Done')
  }
  setValue = async () => {
    try {
      await AsyncStorage.setItem('tokenObject', 'my secret value')
    } catch (e) {
      // save error
    }
    console.log('Done.')
  }
  render() {
    if (this.state.isLoading) {
      return (<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(255,255,255, 0.6)' }}>
        <ActivityIndicator size="large" color="#F1802E" />
        <Text style={{ color: '#F1802E', textAlign: "center" }}>
          Đang xử lý đăng nhập
      </Text>

      </View>);
    }
    return (
      <View>
         <Text style={{ color: '#F1802E', textAlign: "center" }}>
         Welcome to digiiKPI
        </Text>
      </View>
    );
  }
}

export default WelcomeScreen;
