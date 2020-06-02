import React , { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { termSearchedActionCreator, fetchVideosActionCreator } from '../Actions';
import { useDispatch, useSelector } from "react-redux";
import Youtube from '../Api/Youtube'

const apiKey = 'AIzaSyDuCwfv83VKgg4iDP8CLdCfnRWT9MxVg4Y'

const SearchBar  = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);

  const useStyles = makeStyles({
    redBorder: {
      border: '2px solid black'
    } 
  });

  const classes = useStyles();
  
  const handleSubmit =  (e) => {
    dispatch(
      fetchVideosActionCreator({
        searchTerm: searchTerm, 
        apiKey: apiKey, 
        Youtube: Youtube
      })
    )
 
    e.preventDefault()
  }

  const handleChange = (e) => {
    const {value} = e.target;
    
    dispatch( 
      termSearchedActionCreator(value) 
    )
  }  
 
  return (    
    <Paper 
      elevation={2} 
      style={{ padding:'25px' }} 
      className={classes.redBorder}
    >
      <form onSubmit={ handleSubmit }> 
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