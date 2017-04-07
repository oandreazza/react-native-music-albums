import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Card from './Card'

const AlbumDetail = (props) => {

  renderAlbum = () => {
    let album = props.album
    return (
      <Text>{album.title}</Text>
    )
  }
    return(
      <Card>
        {this.renderAlbum()}
      </Card>
    )

}
export default AlbumDetail;
