import React, {Component} from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

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
    return this.state.albums.map( album =>
      <AlbumDetail key={album.title} album={album}/>
    )
  }

  componentWillMount = () => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
      .then( response => {
        this.loadAlbums(response.data)
      })
  }


  render() {
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}
export default AlbumList;
