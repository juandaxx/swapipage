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
    fontSize: 19,
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Press Start 2P', cursive"
  }
});


export default function SimpleCard(props) {
  const classes = useStyles();

  // const dispatch = useDispatch();

  return (
    <MuiThemeProvider theme={theme}>      
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.nameResident} variant="h5" component="h2">
            {props.name}
          </Typography>
          <br></br>
          <Typography className={classes.p} variant="body2" component="p">
            Estatura: {props.height}
          </Typography>
          <Typography className={classes.p} variant="body2" component="p">
            Masa: {props.mass}
          </Typography>
          <Typography className={classes.p} variant="body2" component="p">
            Color de cabello: {props.hair_color}
          </Typography>
          <Typography className={classes.p} variant="body2" component="p">
            Color de piel: {props.skin_color}
          </Typography>
          <Typography className={classes.p} variant="body2" component="p">
            Color de ojos: {props.eye_color}
          </Typography>
          <Typography className={classes.p} variant="body2" component="p">
            Año de nacimiento: {props.birth_year}
          </Typography>
          <Typography className={classes.p} variant="body2" component="p">
            Genero: {props.gender}
          </Typography>
        </CardContent>
        {props.children}
      </Card>
    </MuiThemeProvider>
  );
}





