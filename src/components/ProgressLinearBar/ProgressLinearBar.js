import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        paddingTop: '20%',
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f4c538',
            main: '#F2B707',
            dark: '#a98004',
            contrastText: '#fff',
        },
        secondary: {
            light: '#FF0000',
            main: '#F2B707',
            dark: '#0000FF',
            contrastText: '#fff',
        }
    },
});

export default function LinearDeterminate() {
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
        function progress() {
            setCompleted(oldCompleted => {
                if (oldCompleted === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldCompleted + diff, 100);
            });
        }

        const timer = setInterval(progress, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Container fixed>
                    <Grid item xs={12}>
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />  
                        <LinearProgress value={completed} />               
                    </Grid>
                </Container>
            </MuiThemeProvider>
        </div>
    );
}