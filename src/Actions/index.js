const videosFetchedActionCreator = (type, payload) => {
  return {
    type : 'VIDEOS_FETCHED',
    payload: payload
  }
} 

const videoSelectedActionCreator = (type, payload) => {
  return {
    type : 'VIDEO_SELECTED',
    payload: payload
  }
}

const termSearchedActionCreator = (type, payload) => {
  return {
    type : 'SEARCHED_TERM',
    payload: payload
  }
}

export {
  videoSelectedActionCreator,
  videosFetchedActionCreator,
  termSearchedActionCreator 
}