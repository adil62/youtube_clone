import React from 'react';
import { Typography, Paper } from '@material-ui/core' 

class VideoDetail extends React.Component {
  constructor() {
    super()
  }

  render() { 

    if (!this.props.video) return <div>Loading...</div>
    console.log(this.props.video)
    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    
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
        <Paper elevation={6} style={{padding: '15px'}}>
          <Typography variant="h4"> 
            {this.props.video.snippet.title} - {this.props.video.snippet.channelTitle} 
          </Typography>
          <Typography variant="subtitle1">
            {this.props.video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2"> 
            {this.props.video.snippet.description} 
          </Typography>
        </Paper>
      </React.Fragment>
    )
  }
}

export default VideoDetail 
