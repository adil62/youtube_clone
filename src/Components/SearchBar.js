import React , { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const SearchBar  = ({onFormSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const useStyles = makeStyles({
    redBorder: {
      border: '2px solid black'
    } 
  });
  
  const classes = useStyles();
  
  const handleChange = (e) => {
    const {value} = e.target;
    setSearchTerm(value);
  }  

  const handleSubmit = (e) => {
    onFormSubmit(searchTerm) 

    e.preventDefault()
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
          value={searchTerm}
          label="Search" 
          onChange={handleChange}
        >
        </TextField>
      </form>
    </Paper>
  )
} 

export default SearchBar 