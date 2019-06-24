import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentWillMount(){
  this.props.navigation.navigate('Profile');
}
  render() {
    return (
      <View>
        <Text> Feed </Text>
      </View>
    );
  }
}

export default Feed;
