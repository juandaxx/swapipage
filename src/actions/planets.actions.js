export function dataIsLoading(){
    return {
        type: 'DATA_IS_LOADING'
    }
}

export function dataFetchSuccess(planet){
    return {
        type: 'DATA_FETCH_SUCCESS',
        planet
    }
}

export function dataHasErrored(error){
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: error
    }
}
