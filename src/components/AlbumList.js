import React, {Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{
  constructor(props) {
    super(props);
    this.loadAlbums = this.loadAlbums.bind(this);
    this.state = {
      albums: []
    }
  }

  loadAlbums = (albums) => {
    this.setState({
      albums: albums
    })
  }

  renderAlbums = () => {
    return this.state.albums.map( album => <Text key={album.title}>{album.title}</Text> )
  }

  componentWillMount = () => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
      .then( response => {
        this.loadAlbums(response.data)
      })
  }


  render() {
    const {albums} = this.state
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}
export default AlbumList;
