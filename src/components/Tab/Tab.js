import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import PhotoIcon from '@material-ui/icons/Photo';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#2c073b',
    // #2c073b
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f4c538',
      main: '#F2B707',
      dark: '#a98004',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f4c538',
      main: '#F2B707',
      dark: '#a98004',
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: "'Press Start 2P', cursive"
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Link to="/home">
            <Tab icon={<HomeIcon />} label="Inicio" />
          </Link>

          <Link to="/galery">
            <Tab icon={<PhotoIcon />} label="Galeria" />
          </Link>

          <Link to="/contact">
            <Tab icon={<PermContactCalendarIcon />} label="Contacto" />
          </Link>
        </Tabs>
      </Paper>
    </MuiThemeProvider>
  );
}