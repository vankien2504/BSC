import React, { Component } from 'react';
import {StyleSheet, View, Text,TextInput, TouchableOpacity, TouchableHighlight,
    Image,
    Platform,
    ActivityIndicator,
  ImageBackground,
} from 'react-native';
import LoginData from "../share/data-service/login.data";
import UserData from "../share/data-service/user.data";
import Modal from "react-native-modal";
import CheckboxModest from 'react-native-modest-checkbox'
const GLOBAL = require('../share/global.js');
const launchscreenBg = require("../assets/imgs/login-backgroud.png");
const launchscreenLogo = require("../assets/imgs/digitask.png");
import AsyncStorage from '@react-native-community/async-storage';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        visibleModal: false,
        showPassword: true,
        un: "",
        pa: "",
        showPassword: true,
        API: GLOBAL.serviceURL.urlIDServer,
    };
  }
  componentWillMount(){
    //   this.Login();
    this.ChangeAPI();
  }
  ChangeAPI(){
    AsyncStorage.getItem('APIServe').then((res, error) => {
      if (res) {
        let APIServe = JSON.parse(res);
        GLOBAL.serviceURL.urlIDServer = APIServe.urlIDServer;
        GLOBAL.serviceURL.tm = APIServe.tm;
        this.setState({ API: GLOBAL.serviceURL.urlIDServer });
      } else {

      }
    });
  }
  ChangePage(page, params) {
    this.props.navigation.navigate(page, {
      params,
      onGoBack: (api) => this.refresh(api),
    });
  }
  BackPage() {
    this.props.navigation.state.params.onGoBack(this.state.task);
    this.props.navigation.goBack();
  }
  refresh(api) {
    this.props.navigation.state;
    // this.props.callbackFromParent({ Attribute: "ChangeData" });
    AsyncStorage.getItem('APIServe').then((res, error) => {
      if (res) {
        let APIServe = JSON.parse(res);
        GLOBAL.serviceURL.urlIDServer = APIServe.urlIDServer;
        GLOBAL.serviceURL.tm = APIServe.tm;
        this.setState({ API: GLOBAL.serviceURL.urlIDServer });
      } else {

      }
    });
  }
  Login() {
    let param = {user:this.state.un, pass:this.state.pa};
    LoginData.LoginData(param).then((res) => {
        if(res){
           this.GetUser();
        }else{
            this.setState({ isLoading: false, visibleModal: true });
        }
    },(error)=>{
        this.setState({ isLoading: false, visibleModal: true });
    });
  }
  GetUser(){
    UserData.UserData().then((res) => {
      if(res){
        GLOBAL.userInfo;
        debugger
          this.props.navigation.navigate('Dashboard');
      }else{
          console.log('không lấy được user')
      }
  },(error)=>{
      this.setState({ isLoading: false, visibleModal: true });
  });
  }
  toggleSwitch4() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ marginLeft: 0, marginRight: 15, height: 24, width: 24 }}
          source={require('../assets/icons/danger.png')}
        />
        <Text style={{ fontFamily: 'Muli', fontWeight: 'bold', color: '#ff0000', fontSize: 15 }}>Đăng nhập không thành công</Text>
      </View>
      <Text style={{ marginTop: 20, fontFamily: 'Muli', color: '#5d5d5d', fontSize: 13, marginLeft: 30 }}>
        Vui lòng kiểm tra thông tin đăng nhập
        </Text>
      <TouchableOpacity onPress={() => this.setState({ visibleModal: false })}>
        <Image
          style={{ alignSelf: 'center', marginTop: 37, marginBottom: 22, marginRight: 20, height: 22, width: 74 }}
          source={require('../assets/icons/dong.png')}
        />
      </TouchableOpacity>

    </View>
  );
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
      <ImageBackground source={launchscreenBg} style={styles.imageContainer}>

        <View style={styles.logoContainer}>
          <Modal
            isVisible={this.state.visibleModal}
            onBackdropPress={() => this.setState({ visibleModal: false })}
            animationIn="slideInLeft"
            animationOut="slideOutRight">
            {this.renderModalContent()}
          </Modal>
          <Image source={launchscreenLogo} style={styles.logo} resizeMode="contain" />
          <View style={{ flexDirection: 'row', marginTop: 18 }}>
            <Text style={{ fontSize: 15, color: '#FFFFFF70', width: 178 }}>
              {this.state.API}
            </Text>
            <TouchableOpacity onPress={() => this.ChangePage('LoginPrepare')}>
              <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 12 }}>
                Thay đổi
            </Text>
            </TouchableOpacity>
            <Image
              style={{ marginTop: 6, marginLeft: 7, width: 6, height: 10 }}
              source={require('../assets/icons/ArrowRightBlack.png')}
            />
          </View>
        </View>
        <Text style={styles.dangnhap}>Đăng nhập</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIconUser} source={require("../assets/icons/User.png")} />
          <TextInput style={styles.inputs}
            placeholder="Tên đăng nhập"
            underlineColorAndroid='transparent'
            onChangeText={(un) => this.setState({ un })} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("../assets/icons/lock.png")} />
          <TextInput style={styles.inputs}
            secureTextEntry={this.state.showPassword}
            placeholder="Mật khẩu"
            underlineColorAndroid='transparent'
            onChangeText={(pa) => this.setState({ pa })} />
        </View>
        <View style={{ flexDirection: 'column', marginLeft: -100, marginBottom: 40 }}>
          <View style={{ flexDirection: 'row' }}>
          <CheckboxModest
                            checked={!this.state.showPassword}
                            label='Hiển thị mật khẩu'
                            labelStyle={{ color: '#FFF', fontSize: 15,}}
                            checkedComponent={<Image
                                style={{ height: 14, width: 14 }}
                                source={require('../assets/icons/loginCheck.png')} />}
                            uncheckedComponent={<Image
                                style={{ height: 14, width: 14, }}
                                source={require('../assets/icons/loginUncheck.png')} />}
                            onChange={() => { this.toggleSwitch4() }}
                        />
          </View>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Login()}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => console.log('restore_password')}>
          <Text style={{ color: 'white', fontSize: 15, }}>Quên mật khẩu?</Text>
        </TouchableHighlight>
        {/* <View style={{ flex: 1 }}>

        </View> */}
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
          <Text style={{ color: '#ffffff', fontSize: 15, opacity: .5, position: 'absolute', bottom: 0 }}>Copyright 2018 OOC </Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
    modalContent: {
      backgroundColor: "#FFF",
      paddingLeft: 26,
      paddingRight: 26,
      paddingTop: 20,
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)",
    },
    dangnhap: {
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 15,
      marginLeft: -190,
      textAlign: 'left', alignSelf: 'center'
    },
    logoContainer: {
      marginTop: 44,
      marginBottom: 45
    },
    logo: {
      left: Platform.OS === "android" ? 0 : 50,
      // top: Platform.OS === "android" ? 35 : 60,
      width: 265,
      height: 60
    },
    imageContainer: {
      width: null,
      height: null,
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center', alignItems: 'center',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
    },
    inputIcon: {
      width: 16,
      height: 18,
      marginLeft: 15,
      justifyContent: 'center'
    },
    inputIconUser: {
      width: 18,
      height: 18,
      marginLeft: 15,
      justifyContent: 'center',
    },
    buttonContainer: {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      width: 250,
      borderRadius: 5,
    },
    loginButton: {
      backgroundColor: "#f0822d"
  
    },
    loginText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    }
  });
  
export default LoginScreen;
