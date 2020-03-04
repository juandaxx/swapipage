import React from 'react';
import './Home.css';
import '../../App.css';
import tatooineBanner from '../../img/tatooine.jpg';
import SimpleCard from '../../components/Cards/SimpleCard.js';
import CardList from '../../components/Cards/CardList.js';
import TextInfoCard from '../../components/TextInfoCard/TextInfoCard.js';
import ProgressLinearBar from '../../components/ProgressLinearBar/ProgressLinearBar';
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

  printResidentsData() {

    let newArrayResidents = [];

    if (this.props !== undefined) {
      if (this.props.planets !== undefined) {
        if (this.props.planets.data.residents) {
          if (typeof this.props.planets.data.residents[0] !== 'string') {

            let arrayResidents = this.props.planets.data.residents;
            newArrayResidents = arrayResidents.map((resident, residentKey) => {
              if (typeof resident.films[0] !== 'string') {

                return (
                  <Grid key={resident.name} item xs={4} sm={4}>
                    <SimpleCard
                      title={resident.name}
                      dataToShow={[
                        [
                          "Estatura",
                          resident.height
                        ],
                        [
                          "Masa",
                          resident.mass
                        ],
                        [
                          "Color de cabello",
                          resident.hair_color
                        ],
                        [
                          "Color de piel",
                          resident.skin_color
                        ],
                        [
                          "Color de ojos",
                          resident.eye_color
                        ],
                        [
                          "Año de nacimiento",
                          resident.birth_year
                        ],
                        [
                          "Genero",
                          resident.gender
                        ]
                      ]}                      
                    >
                      <CardList 
                        title="Films"
                        dataToShow={this.props.planets.data.residents[residentKey].films} 
                      />
                    </SimpleCard>
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
    return this.props.planets.data ?
      <div className="Home">
        <img className="planetBanner" src={tatooineBanner} alt="tatooine" />
        <Container fixed>
          <h1 className="titleHome">Pagina web Star Wars</h1>
          <br></br>
          <h2 className="subtitlesHome">Características del planeta {this.props.planets.data.name}</h2>
          <Grid container spacing={10}>
            <TextInfoCard
            dataToShow={[
              [
                "Periodo de rotación",
                this.props.planets.data.rotation_period
              ],
              [
                "Periodo orbital",
                this.props.planets.data.orbital_period
              ],
              [
                "Diametro",
                this.props.planets.data.diameter
              ],
              [
                "Clima",
                this.props.planets.data.climate
              ]
            ]}        
            >
            </TextInfoCard>
            <TextInfoCard
              dataToShow={[
                [
                  "Gravedad",
                  this.props.planets.data.gravity
                ],
                [
                  "Terreno",
                  this.props.planets.data.terrain
                ],
                [
                  "Superficie del agua",
                  this.props.planets.data.surface_water
                ],
                [
                  "Poblacion",
                  this.props.planets.data.population
                ]
              ]}

            >
            </TextInfoCard>
          </Grid>
          <h2 className="subtitlesHome">Residentes</h2>
          <br></br>
          <Grid container spacing={10}>
            {this.printResidentsData()}
          </Grid>
        </Container>
      </div> :
      <ProgressLinearBar />
      ;
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
