import React, {Component} from 'react';
import { Text, AppRegistry} from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Text>
        Hello World
      </Text>
    )
  }
}

AppRegistry.registerComponent('album', () => App)
