import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core' 
import { useDispatch } from "react-redux";
import { videoSelectedActionCreator } from "../Actions";


const VideoItem = ({ video }) => {
  const dispatch = useDispatch();

  const onVideoSelect = (video) => {
    dispatch(
      videoSelectedActionCreator(video)
    )  
  }

  return (
    <Grid item xs={12} style={{ cursor: 'pointer' }}>
      <Paper 
        onClick = { () =>  onVideoSelect(video)}
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
          src={ video.snippet.thumbnails.medium.url }
        />
        <Typography variant="subtitle2">  
          <b> { video.snippet.title } </b>
        </Typography>
      </Paper> 
    </Grid>
  )
}

export default VideoItem