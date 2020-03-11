const initialState = {
    planets: {
        data: {},
        isLoading: false,
        hasErrored: null
    },
    wordToFilter: {
        word: "",
    }
}


const planets = (state = initialState, action) => {
    
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return { ...state, planets: {isLoading: true} };

        case 'DATA_FETCH_SUCCESS':
            return { ...state, planets:{isLoading: false, data: Object.assign({}, state.planets.data, action.planet)}};

        case 'DATA_HAS_ERRORED':
            return { ...state, planets:{isLoading: false, hasErrored: action.error} };

        default:
            return state;
    }
};

export default planets;