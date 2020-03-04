import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import darthVader from '../../img/Galery/darthVader.jpg';
import characters from '../../img/Galery/characters.jpg';
import stormtrooper from '../../img/Galery/stormtrooper.jpg';
import babyYoda from '../../img/Galery/babyYoda.jpg';
import c3po from '../../img/Galery/c3po.jpg';
import jesuschrist from '../../img/Galery/jesuschrist.jpg';
import tieFighter from '../../img/Galery/tieFighter.jpg';
import r2d2 from '../../img/Galery/r2d2.jpg';
import Carousel from '../../components/Carousel/Carousel';

export const Galery = () => {
    return (
        <div className="Galery">
            <Container fixed>
                <Grid item xs={12} sm={12}>
                    <h1 className="titleContact">Galeria</h1>
                    <br />
                    <Grid container item xs={12} sm={12}>
                        <Grid item xs={3} sm={3} />
                        <Grid item xs={6} sm={6}>
                            <Carousel />
                        </Grid>
                        <Grid item xs={3} sm={3} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export const tileData = [
    {
        imgPath: darthVader,
        label: 'Darth Vader',
    },
    {
        imgPath: characters,
        label: 'Personajes',
    },
    {
        imgPath: babyYoda,
        label: 'Baby Yoda',
    },
    {
        imgPath: stormtrooper,
        label: 'Stormtrooper',
    },
    {
        imgPath: c3po,
        label: 'C-3PO',
    },
    {
        imgPath: jesuschrist,
        label: 'Jesucristo',
    },
    {
        imgPath: tieFighter,
        label: 'Tie Fighter',
    },
    {
        imgPath: r2d2,
        label: 'R2-D2',
    },
];
