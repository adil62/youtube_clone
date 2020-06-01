import React , { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { termSearchedActionCreator } from '../Actions';
import { useDispatch, useSelector } from "react-redux";

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
    
    dispatch(
      videosFetchedActionCreator(
        'VIDEOS_FETCHED', 
        response.data.items
      )
    )

    dispatch(
      videoSelectedActionCreator(
        'VIDEO_SELECTED', 
        response.data.items[0]
      )
    )
    
    e.preventDefault()
  }

const SearchBar  = ( ) => {
  const searchTerm = useSelector(state => state.searchTerm);
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    redBorder: {
      border: '2px solid black'
    } 
  });
  const classes = useStyles();
  
  const handleChange = (e) => {
    const {value} = e.target;
    
    dispatch( 
      termSearchedActionCreator('SEARCHED_TERM', value) 
    )
  }  

 
   
  return (    
    <Paper 
      elevation={2} 
      style={{ padding:'25px' }} 
      className={classes.redBorder}
    >
      <form onSubmit={handleSubmit}> 
        <TextField 
          fullWidth 
          value={
            searchTerm
          }
          label="Search" 
          onChange={handleChange}
        >
        </TextField>
      </form>
    </Paper>
  )
} 

export default SearchBar 