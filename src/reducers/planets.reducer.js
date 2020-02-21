const initialState = {}

export default function PlanetsReducer(state = initialState, action) {
    switch (action.type) {
        case 'STARTED':
            return state;

        case 'SET':
            return {
                ...action.payload
            }

        case 'ERROR':
            return {
                ...action.payload.error
            }

        default:
            return state;
    }

}
