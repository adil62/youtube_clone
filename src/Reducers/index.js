import { combineReducers } from 'redux'

/*
  videos:[]
  fetchedResults: false
  selectedVideo: null
  searchTerm:''
*/

const videos = (state = [], action) => {
  if (action.type === 'VIDEOS_FETCHED') {
    return action.payload
  }
  return state
}

const fetchedResults = (state = false, action) => {
  if (action.type === 'VIDEOS_FETCHED') {
    return true
  }
  return state
}

const selectedVideo = (state = false, action) => {
  if (action.type === 'VIDEO_SELECTED') {
    return action.payload
  }
  return state;
}

const searchTerm = (state = '', action) => {
  if (action.type === 'SEARCHED_TERM') {
    return action.payload 
  }
  return state;
}
 
export default combineReducers({
  videos,
  fetchedResults,
  selectedVideo,
  searchTerm
});