import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  p: {
    textAlign: "left",
    fontSize: 14,
  },

  nameResident: {
    color: '#F2B707',
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Press Start 2P', cursive"
  }
});


export default function SimpleCard(props) {
  const classes = useStyles();

  // To use this component, props.dataToShow should be an array of arrays, you must create a child array with 2 positions: 
  // The first position is for the title line, and the second position is for the value
  // Create the number of child arrays that you require

  return (
    <MuiThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.nameResident} variant="h5" component="h2">
            {props.title}
          </Typography>
          <br></br>
          {props.dataToShow.map((data) => {
            return (
              <Typography key={data} className={classes.p} variant="body2" component="p">
                {data[0]}: {data[1]}
              </Typography>
            )
          })}
        </CardContent>
        {props.children}
      </Card>
    </MuiThemeProvider>
  );
}





