import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    fontSize: 12,
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Press Start 2P', cursive"
  }
});

export default function CustomizedInputBase(props) {
  const classes = useStyles(); 
  const [search, setSearch] = useState('')

  const onSubmitSearch = () => {    
    props.handleInputSearch(search)
    setSearch('')
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Paper component="form" className={classes.root}>
        <InputBase
          value={search}
          onChange={event => setSearch(event.target.value)}  
          className={classes.input}
          placeholder={props.placeHolder}
          inputProps={{ 'aria-label' : 'Buscar' }} 
        />
        <IconButton onClick={onSubmitSearch} className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </MuiThemeProvider>
  );
}
