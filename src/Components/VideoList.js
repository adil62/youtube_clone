import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core' 
import {useSelector} from 'react-redux'
import VideoItem from './VideoItem'

const VideoList = () => { 
  const videos = useSelector(state => state.videos)
  
  const videoList = videos.map((video, index) => {
    return <VideoItem key={index} video={video}/>
  })

  return (
    <Grid container spacing={5}>
      {videoList}      
    </Grid>
  )
}

export default VideoList 
