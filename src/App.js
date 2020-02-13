import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard.js';
import UserCardList from './components/UserCard/UserCardList.js';
import PlanetCard from './components/PlanetCard/PlanetCard.js'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchData('https://swapi.co/api/planets/1/')
      .then((response) => this.setDataPlanets(response))
      .then((response) => this.setResidents(response))
      .then((response) => this.setDataFilms())
      .then((response) => this.setResidentsFilms(response))
      .catch(error => console.log(error));
  }

  fetchData(url) {
    return axios.get(url)
  }

  setDataPlanets(response) {
    this.setState({
      planets: response.data
    });
    let residentsList = [];
    this.state.planets.residents.forEach(residentUrl => {
      residentsList.push(this.fetchData(residentUrl));
    });
    return Promise.all(residentsList);
  }

  setResidents(residentsList) {
    this.setState(prevState => ({
      planets: {
        ...prevState.planets,
        residents: residentsList
      }
    }))

    return Promise.all([])
  }

  setDataFilms() {
    let arrayFilms = [];
    this.state.planets.residents.forEach(resident => {
      resident.data.films.forEach(film => {
        arrayFilms.push(this.fetchData(film));
      });
    });
    return Promise.all(arrayFilms);
  }

  setResidentsFilms(arrayFilms) {
    let planet = this.state.planets;
    let i = 0;
    planet.residents.forEach((resident, residentKey) => {

      resident.data.films.forEach((film, filmKey) => {
        planet.residents[residentKey].data.films[filmKey] = arrayFilms[i++];
      });
    });

    this.setState(prevState => ({
      planets: {
        ...prevState.planets,
        residents: planet.residents
      }
    }));
  }


  printResidentsData() {
    let newArrayResidents = [];
    if (this.state !== undefined) {
      if (this.state.planets !== undefined) {
        if (this.state.planets.residents) {
          if (typeof this.state.planets.residents[0] !== 'string') {

            let arrayResidents = this.state.planets.residents;
            newArrayResidents = arrayResidents.map((resident, residentKey) => {

              if (typeof this.state.planets.residents[residentKey].data.films[0] !== 'string') {

                return (
                  <Grid item xs={4} sm={4}>
                    <UserCard
                      name={resident.data.name}
                      height={resident.data.height}
                      mass={resident.data.mass}
                      hair_color={resident.data.hair_color}
                      skin_color={resident.data.skin_color}
                      eye_color={resident.data.eye_color}
                      birth_year={resident.data.birth_year}
                      gender={resident.data.gender}
                    >
                      <UserCardList films={this.state.planets.residents[residentKey].data.films} />
                    </UserCard>
                    <br></br>
                    <br></br>
                  </Grid>
                );
              }
              return newArrayResidents;
            });

          }
        }
      }
    }
    return newArrayResidents;
  }


  render() {
    console.log(this.state.planets);

    return this.state.planets ?
      <div className="App">
        <img className="planetBanner" src="img/tatooine.jpg" alt="tatooine" />  
        <Container fixed>      
        <h1>Pagina web Star Wars</h1>
        <h2>Características del planeta {this.state.planets.name}</h2>
        <Grid container spacing={10}>
        <PlanetCard
          rotationPeriod={this.state.planets.rotation_period}
          orbitalPeriod={this.state.planets.orbital_period}
          diameter={this.state.planets.diameter}
          climate={this.state.planets.climate}
          gravity={this.state.planets.gravity}
          terrain={this.state.planets.terrain}
          surfaceWater={this.state.planets.surface_water}
          population={this.state.planets.population}
        >
        </PlanetCard>
        </Grid>
        <h1>Residentes</h1>
        <br></br>
          <Grid container spacing={10}>
            {this.printResidentsData()}
          </Grid>
        </Container>
      </div> :
      null;
  }
}

export default App;
