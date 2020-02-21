import axios from 'axios';

export const fetchData = () => {
    return (dispatch, getState) => {
        dispatch(setDataStarted());

        console.log('current state:', getState());
        

        axios
            .get('https://swapi.co/api/planets/1/')
            .then(response => {
                dispatch(setDataFetched(response.data));
            })
            .catch(error => {
                dispatch(setDataError(error));
            })
    }
}

const setDataFetched = dataPlanets => ({
    type: 'SET',
    payload: {
        ...dataPlanets
    }
});

const setDataStarted = () => ({
    type: 'STARTED'
});

const setDataError = error => ({
    type: 'ERROR',
    payload: {
        error
    }
});