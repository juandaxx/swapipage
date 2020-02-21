import axios from 'axios';

function dataPlanets() {           
    fetchData('https://swapi.co/api/planets/1/')
        .then((response) => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => console.log(error));    
}

function fetchData(url) {
    return axios.get(url)
}

export default dataPlanets;