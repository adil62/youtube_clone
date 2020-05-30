import React from 'react';
import { Grid } from '@material-ui/core'
import Youtube from '../Api/Youtube'
import { SearchBar, VideoList, VideoDetail } from './'
 
class App extends React.Component {
  constructor() {
    super()
    this.onVideoSelect = this.onVideoSelect.bind(this)
  }

  state = {
    videos : [],
    selectedVideo : null
  }

  apiKey = 'AIzaSyDuCwfv83VKgg4iDP8CLdCfnRWT9MxVg4Y'

  handleSubmit = async (searchTerm) => {
    const response = await Youtube
    .get('search', { 
      params: {
        key: this.apiKey,
        part: 'snippet',
        maxResults: 10,
        q: searchTerm  
      } 
    })
    console.log(response) 
    this.setState({
      videos : response.data.items, 
      selectedVideo: response.data.items[0]
    })
  }

  componentDidMount() {
    this.handleSubmit('javascript')
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo:video })
  }

  render() {
    const { selectedVideo, videos } = this.state

    return (
      <Grid style={{ justifyContent:"center" }} container spacing={10}>
        <Grid item xs={11}  >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}> 
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
            </Grid>
          </Grid> 
        </Grid>  
      </Grid>  
    )
  }
}

export default App