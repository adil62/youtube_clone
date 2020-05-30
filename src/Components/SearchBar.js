import React from 'react';
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    searchTerm : '',
    searchTerm2 : ''
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({ searchTerm: value });
  }  

  handleSubmit(e) {
    const { searchTerm } = this.state 
    const { onFormSubmit } = this.props 
    
    onFormSubmit(searchTerm) 

    e.preventDefault()
  }
 
  render() {
    return (
      <Paper elevation={6} style={{ padding:'25px' }}>
        <form onSubmit={this.handleSubmit}> 
          <TextField 
            fullWidth 
            value={this.state.searchTerm}
            label="Search" 
            onChange={this.handleChange}
          >
          </TextField>
        </form>
      </Paper>
    )
  }
} 

export default SearchBar 