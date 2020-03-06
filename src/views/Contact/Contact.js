import React from 'react';
import './Contact.css';
import contactBanner from '../../img/contactBanner.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

export const Contact = () => {
    return (
        <div className="Contact">
            <MuiThemeProvider theme={theme}>
                <img className="contactBanner" src={contactBanner} alt="contactBanner" />
                <Container fixed>
                    <h1 className="titleContact">Contactanos!</h1>
                    <Grid item xs={12} sm={12}>
                        <p className="textContact">Puedes seguirnos en nuestras redes sociales y en nuestra página web oficial:</p>
                        <Grid item xs={4} sm={4}>
                            <ul>
                                <a className="contactLinks" href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon color="primary" /><span className="textContact">Instagram</span>
                                </a>
                                <br />
                                <a className="contactLinks" href="https://www.facebook.com/StarWars" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon color="primary" /><span className="textContact">Facebook</span>
                                </a>
                                <br />
                                <a className="contactLinks" href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer">
                                    <TwitterIcon color="primary" /><span className="textContact">Twitter</span>
                                </a>
                                <br />
                                <a className="contactLinks" href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener noreferrer">
                                    <YouTubeIcon color="primary" /><span className="textContact">Youtube</span>
                                </a>
                                <br />
                                <a className="contactLinks" href="https://www.starwars.com/" target="_blank" rel="noopener noreferrer">
                                    <StarBorderIcon color="primary" /><span className="textContact">Página oficial</span>
                                </a>
                                <br />
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
            </MuiThemeProvider>
        </div>
    )
}