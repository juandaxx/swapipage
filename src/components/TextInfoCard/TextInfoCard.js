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

    // To use this component, props.dataToShow should be an array of arrays, you must create a child array with 2 positions: 
    // The first position is for the title line, and the second position is for the value
    // Create the number of child arrays that you require
    
    return (
        <MuiThemeProvider theme={theme}>
            <Grid item xs={6} sm={6}>
                <Card className={classes.root}>
                    <CardContent>
                        {props.dataToShow.map((data) => {
                            return (
                                <Typography key={data} className={classes.p} variant="body2" component="p">
                                    {data[0]}: {data[1]}
                                </Typography>
                            )
                        })}
                    </CardContent>
                </Card>
            </Grid>
        </MuiThemeProvider>
    );
}

