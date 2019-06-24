import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExecuteResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item: this.props.DanhSachNhomKetQuaThucHien
    };
  }

  render() {
    return (
      <View style={{backgroundColor:this.state.item.Color+'80', height:42, flexDirection:'row', 
      marginLeft:15, marginRight:15, marginBottom:15, paddingLeft:15,
       paddingRight:15, borderRadius:22}}>
        <Text style={{color:'#FFF', lineHeight:42}}>
            Hoàn thành <Text style={{fontSize:15, color:'#FFF', fontWeight:'bold'}}>{this.state.item.From==0? 'dưới':this.state.item.From+'%'} {this.state.item.To>0&&this.state.item.From>0? ' - ':' '} {this.state.item.To!=null ? this.state.item.To+'%':'trở lên'}</Text>
        </Text>
        <View style={{flex:1}}>

        </View>
        <Text  style={{height:30, width:117, borderRadius:16, textAlign: 'center' , color:'#FFF', backgroundColor:this.state.item.Color,lineHeight:30, marginTop:6}}>
{this.state.item.SoLuong} chỉ tiêu
        </Text>
      </View>
    );
  }
}

export default ExecuteResult;
