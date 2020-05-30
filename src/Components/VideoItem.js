import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core' 

class VideoItem extends React.Component {
  render() {
    return (
      <Grid item xs={12} style={{ cursor: 'pointer' }}>
        <Paper 
          onClick = { () => this.props.onVideoSelect(this.props.video)}
          style={{ 
            display:'flex', 
            alignItems:'center', 
            height:'100px', 
            overflow: 'hidden'
          }}
        >
          <img 
            style={{ 
              marginRight: 
              '20px',
              width: '40%' , 
              height: '100%' 
            }} 
            alt="thumbnail"
            src={ this.props.video.snippet.thumbnails.medium.url }
          />
          <Typography variant="subtitle1">  
            <b> { this.props.video.snippet.title } </b>
          </Typography>
        </Paper> 
      </Grid>
    )
  }
}

export default VideoItem