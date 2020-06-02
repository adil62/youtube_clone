const videosFetchedActionCreator = (payload) => {
  return {
    type : 'VIDEOS_FETCHED',
    payload: payload
  }
}

const videoSelectedActionCreator = (payload) => {
  return {
    type : 'VIDEO_SELECTED',
    payload: payload
  }
}

const termSearchedActionCreator = (payload) => {
  return {
    type : 'SEARCHED_TERM',
    payload: payload
  }
}

const fetchVideosActionCreator = ({searchTerm, apiKey, Youtube}) => {
 return function(dispatch) {
    return Youtube.get('search', { 
      params: {
        key: apiKey,
        part: 'snippet',
        maxResults: 10,
        q: searchTerm
      } 
    })
    .then(response => {
      dispatch( 
        videosFetchedActionCreator(response.data.items) 
      )
      dispatch(
        videoSelectedActionCreator(
          response.data.items[0]
        )
      )
    })
    .catch(error => { 
      console.log(error)
    })
  }
}

export {
  videoSelectedActionCreator,
  videosFetchedActionCreator,
  fetchVideosActionCreator,
  termSearchedActionCreator 
}