import React from 'react';
import { Typography, Paper } from '@material-ui/core' 
import {useSelector} from 'react-redux'

const VideoDetail = () => {
  const video = useSelector(state => state.selectedVideo)

  if (!video) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  
  return (
    <React.Fragment>
      <Paper elevation={6} style={{height: '20%'}}>
        <iframe 
          frameBorder="0" 
          height="100%" 
          width="100%" 
          title="video player" 
          src={videoSrc}
          allowFullScreen
        />  
      </Paper> 
      <Paper elevation={6} style={{
        padding: '15px', 
        overflow : 'hidden'
      }}>
        <Typography variant="h4"> 
          {video.snippet.title} - {video.snippet.channelTitle} 
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2"> 
          {video.snippet.description} 
        </Typography>
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetail 
