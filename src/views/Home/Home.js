import React from 'react';
import './Home.css';
import '../../App.css';
import tatooineBanner from '../../img/tatooine.jpg';
import UserCard from '../../components/UserCard/UserCard.js';
import UserCardList from '../../components/UserCard/UserCardList.js';
import PlanetCard from '../../components/PlanetCard/PlanetCard.js';
import Tab from '../../components/Tab/Tab.js'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { dataPlanets } from '../../fetchSwapiData';
import { connect } from 'react-redux';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getDataPlanets();
  }

  componentDidUpdate(props) {
  }

  printResidentsData() {
    // console.log(this.props);
    
    let newArrayResidents = [];

    if (this.props !== undefined) {
      if (this.props.planets !== undefined) {
        if (this.props.planets.residents) {
          if (typeof this.props.planets.residents[0] !== 'string') {

            let arrayResidents = this.props.planets.residents;
            newArrayResidents = arrayResidents.map((resident, residentKey) => {
              if (typeof resident.data.films[0] !== 'string') {
                
                return (
                  <Grid key={resident.data.name} item xs={4} sm={4}>
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
                      <UserCardList films={this.props.planets.residents[residentKey].data.films} />
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
    return this.props.planets ?

      <div className="Home">
        <Tab />
        <img className="planetBanner" src={tatooineBanner} alt="tatooine" />
        <Container fixed>
          <h1 className="titleWebPage">Pagina web Star Wars</h1>
          <br></br>
          <h2 className="subtitlesPlanet">Características del planeta {this.props.planets.name}</h2>
          <Grid container spacing={10}>
            <PlanetCard
              rotationPeriod={this.props.planets.rotation_period}
              orbitalPeriod={this.props.planets.orbital_period}
              diameter={this.props.planets.diameter}
              climate={this.props.planets.climate}
              gravity={this.props.planets.gravity}
              terrain={this.props.planets.terrain}
              surfaceWater={this.props.planets.surface_water}
              population={this.props.planets.population}
            >
            </PlanetCard>
          </Grid>
          <h1 className="subtitlesPlanet">Residentes</h1>
          <br></br>
          <Grid container spacing={10}>
            {this.printResidentsData()}
          </Grid>
        </Container>
      </div> :
      null;
  }
}

const mapStateToProps = state => {
  console.log('state ', state)
  return {
    planets: state.planets
  }
}

const mapDispatchToProps = dispatch => {  
  return {
    getDataPlanets: () => {
      dispatch(dataPlanets());
    }
  }     
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
