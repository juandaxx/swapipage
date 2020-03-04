import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import darthVader from '../../img/Galery/darthVader.jpg';
import characters from '../../img/Galery/characters.jpg';
import stormtrooper from '../../img/Galery/stormtrooper.jpg';
import babyYoda from '../../img/Galery/babyYoda.jpg';
import c3po from '../../img/Galery/c3po.jpg';
import jesuschrist from '../../img/Galery/jesuschrist.jpg';
import tieFighter from '../../img/Galery/tieFighter.jpg';
import r2d2 from '../../img/Galery/r2d2.jpg';
import GridGalery from '../../components/GridGalery/GridGalery';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        },
    },
});

export const Galery = () => {
    return (
        <div className="Galery">
            <MuiThemeProvider theme={theme}>
                <Container fixed>
                    <Grid item xs={12} sm={12}>
                        <h1 className="titleContact">Galeria</h1>
                        <GridGalery/>
                    </Grid>
                </Container>
            </MuiThemeProvider>
        </div>
    )
}

 export const tileData = [
   {
     img: darthVader,
     title: 'Darth Vader',
     author: 'larvagraphics',
   },
   {
    img: characters,
    title: 'Personajes',
    author: 'Anonymous',
   },
   {
    img: babyYoda,
    title: 'Baby Yoda',
    author: 'Kreg Franco',
   },
   {
    img: stormtrooper,
    title: 'Stormtrooper',
    author: 'Geniane Alves',
   },
   {
    img: c3po,
    title: 'C-3PO',
    author: 'Joy mag',
   },
   {
    img: jesuschrist,
    title: 'Jesucristo',
    author: '9gag',
   },
   {
    img: tieFighter,
    title: 'Tie Fighter',
    author: 'Anonymous',
   },
   {
    img: r2d2,
    title: 'R2-D2',
    author: 'Joy Mag',
   },
 ];
