import axios from 'axios';
import { dataIsLoading, dataFetchSuccess, dataHasErrored } from './actions/planets.actions';
import { planetModel } from './models/planet.model';

export function dataPlanets() {
    return (dispatch) => {
        dispatch(dataIsLoading());
        fetchPlanet('https://swapi.co/api/planets/1/')
            .then((response) => {
                return Promise.all([response.data, fetchResident(response.data.residents)])
            })
            .then((response) => {
                response[0].residents = response[1]
                return response[0]
            })
            .then((response) => {
                let arrayResidentFilmsUrl = [];
                response.residents.forEach((resident) => {
                    resident.data.films.forEach((film) => {
                        arrayResidentFilmsUrl.push(film);
                    })
                })
                return Promise.all([response, fetchResidentFilms(arrayResidentFilmsUrl)])
            })
            .then((response) => {
                let i = 0;
                let filmsArray = response[1];
                response[0].residents.forEach((resident, residentKey) => {
                    resident.data.films.forEach((film, filmKey) => {
                        response[0].residents[residentKey].data.films[filmKey] = filmsArray[i++]
                    })
                })
                return response[0]
            })
            .then((response) => {
                return dispatch(dataFetchSuccess(planetModel(response)))
            })
            .catch((error) => dispatch(dataHasErrored(error)));
    }
}

function fetchPlanet(planetUrl) {
    return axios.get(planetUrl)
}

function fetchResident(arrayResidentsUrl) {
    let arrayResidents = arrayResidentsUrl.map((resident) => (axios.get(resident)))
    return Promise.all(arrayResidents);
}

function fetchResidentFilms(arrayResidentFilmsUrl) {
    let arrayResidentFilms = arrayResidentFilmsUrl.map((film) => (axios.get(film)))
    return Promise.all(arrayResidentFilms);
}