const videosFetchedActionCreator = (type, payload) => {
  return {
    type : type,
    payload: payload
  }
}

const videoSelectedActionCreator = (type, payload) => {
  return {
    type : type,
    payload: payload
  }
}

const termSearchedActionCreator = (type, payload) => {
  return {
    type : type,
    payload: payload
  }
}

export {
  videoSelectedActionCreator,
  videosFetchedActionCreator,
  termSearchedActionCreator 
}