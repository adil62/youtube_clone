import React , { useState, useEffect }from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import Youtube from '../Api/Youtube'
import { SearchBar, VideoList, VideoDetail } from './'


const App = () => { 
 
  const [videos, setVideos] = useState([]) 
  const [fetchedResults, setFetchedResults] = useState(false) 
  const [selectedVideo, setSelectedVideo] = useState(null) 

  const apiKey = 'AIzaSyDuCwfv83VKgg4iDP8CLdCfnRWT9MxVg4Y'

  const handleSubmit = async (searchTerm) => {
    const response = await Youtube
    .get('search', { 
      params: {
        key: apiKey,
        part: 'snippet',
        maxResults: 10,
        q: searchTerm
      } 
    })
    
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
    setFetchedResults(true)
  }

  useEffect(() => {
    handleSubmit('javascript')
  }, [])

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  if (!fetchedResults) { 
    return (
      <Grid 
        container 
        justify="center" 
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    )   
  }
    
  return (
    <Grid style={{ justifyContent:"center" }} container spacing={10}>
      <Grid item xs={12} sm={11}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={12} sm={4}> 
            <VideoList 
              onVideoSelect={onVideoSelect} 
              videos={videos}
            />
          </Grid>
        </Grid> 
      </Grid>  
    </Grid>  
  )
}

export default App