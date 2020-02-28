import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

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
    return (
        <MuiThemeProvider theme={theme}>
            <Grid item xs={6} sm={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.p} variant="body2" component="p">
                            Rotacion: {props.rotationPeriod}
                        </Typography>
                        <Typography className={classes.p} variant="body2" component="p">
                            Periodo orbital: {props.orbitalPeriod}
                        </Typography>
                        <Typography className={classes.p} variant="body2" component="p">
                            Diametro: {props.diameter}
                        </Typography>
                        <Typography className={classes.p} variant="body2" component="p">
                            Clima del planeta: {props.climate}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.p} variant="body2" component="p">
                            Gravedad: {props.gravity}
                        </Typography>
                        <Typography className={classes.p} variant="body2" component="p">
                            Terreno: {props.terrain}
                        </Typography>
                        <Typography className={classes.p} variant="body2" component="p">
                            Superficie del agua: {props.surfaceWater}
                        </Typography>
                        <Typography className={classes.p} variant="body2" component="p">
                            Población: {props.population}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </MuiThemeProvider>
    );
}

