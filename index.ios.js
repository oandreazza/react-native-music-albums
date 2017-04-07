import React, {Component} from 'react';
import { Text, AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'


class App extends Component{
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <View>
        <Header text="Albums"/>
        <AlbumList/>
      </View>

    )
  }
}

AppRegistry.registerComponent('album', () => App)
