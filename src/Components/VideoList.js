import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core' 

import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => { 
  
  const videoList = videos.map((video, index) => {
    return <VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>
  })

  return (
    <Grid container spacing={5}>
      {videoList}      
    </Grid>
  )
}

export default VideoList 
