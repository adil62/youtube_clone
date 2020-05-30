import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core' 

import VideoItem from './VideoItem'

class VideoList extends React.Component { 
  render() {
    console.log(this.props.videos)
    const videoList = this.props.videos.map((video, index) => {
      return <VideoItem onVideoSelect={this.props.onVideoSelect} key={index} video={video}/>
    })

    return (
      <Grid container spacing={5}>
        {videoList}      
      </Grid>
    )
  }
}

export default VideoList 
