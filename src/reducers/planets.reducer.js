const initialState = {
    planets: {},
    isLoading: false,
    hasErrored: null
}


const planets = (state = initialState, action) => {

    switch (action.type) {
        case 'DATA_IS_LOADING':
            return {...state, isLoading: true};

        case 'DATA_FETCH_SUCCESS':            
            return {...state, isLoading: false, planets: Object.assign({}, state.planets, action.planet)};

        case 'DATA_HAS_ERRORED':
            return {...state, isLoading: false, hasErrored: action.error};

        default:
            return state;
    }
};

export default planets;
