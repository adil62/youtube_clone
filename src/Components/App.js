import React , { useState, useEffect }from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import Youtube from '../Api/Youtube'
import { SearchBar, VideoList, VideoDetail } from './'
import { fetchVideosActionCreator ,videosFetchedActionCreator, videoSelectedActionCreator } from '../Actions/index.js'
import { useDispatch, useSelector } from "react-redux";

const App = () => { 
  const apiKey = 'AIzaSyDuCwfv83VKgg4iDP8CLdCfnRWT9MxVg4Y'

  const dispatch = useDispatch()

  const selectedVideo = useSelector(state => state.selectedVideo)
  const fetchedResults = useSelector(state => state.fetchedResults)
  const videos = useSelector(state => state.videos)

  const handleSubmit =  (searchTerm) => {
    // const response = await Youtube
    // .get('search', { 
    //   params: {
    //     key: apiKey,
    //     part: 'snippet',
    //     maxResults: 10,
    //     q: searchTerm
    //   } 
    // })
    
    // dispatch(
    //   videosFetchedActionCreator(
    //     'VIDEOS_FETCHED', 
    //     response.data.items
    //   )
    // )

    // dispatch(
    //   videoSelectedActionCreator(
    //     'VIDEO_SELECTED', 
    //     response.data.items[0]
    //   )
    // )

    dispatch(
      fetchVideosActionCreator({
        searchTerm: searchTerm, 
        apiKey: apiKey, 
        Youtube: Youtube
      })
    )
  }

  useEffect(() => {
    handleSubmit('javascript')
  }, [])

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
            <SearchBar />
          </Grid>
          <Grid item xs={12} sm={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={12} sm={4}> 
            <VideoList />
          </Grid>
        </Grid> 
      </Grid>  
    </Grid>  
  )
}

export default App