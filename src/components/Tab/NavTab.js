import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProgressLinearBar from '../../components/ProgressLinearBar/ProgressLinearBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#29073a',
  },
  content: {
    paddingTop: 0,
  },
  tittlePage: {
    color: '#F2B707',
    fontFamily: "'Press Start 2P', cursive",
    textAlign: "center",
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f4c538',
      main: '#F2B707',
      dark: '#a98004',
      contrastText: '#f4c538',
    },
    secondary: {
      light: '#f4c538',
      main: '#F2B707',
      dark: '#a98004',
      contrastText: '#fff',
    }
  },

  typography: {
    fontFamily: "'Press Start 2P', cursive"
  }
});

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.navBar} position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Home" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Section two" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Section Three" href="/spam" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
      <TabPanel value={value} index={0}>
        {props.children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1 className={classes.tittlePage}>En construcción...</h1>
        <ProgressLinearBar />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 className={classes.tittlePage}>En construcción...</h1>
        <ProgressLinearBar />
      </TabPanel>
    </div>
  );
}
