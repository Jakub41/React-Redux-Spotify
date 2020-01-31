import ArtistsAction from "../actions/artistsActions"


function artistsReducer( state = {
    artists: {},
    artistsTwo: {},
    artistsThree: {},
    displaySpinner: false,
    displaySpinnerTwo: false,
    displaySpinnerThree: false,
}, action ) {
    console.log( "data in action", action.data );
    console.log(action.type)
    switch ( action.type ) {

        case ArtistsAction.GET_ARTIST_ONE:
            return {
                ...state,
                displaySpinner: true,
            }
        case ArtistsAction.GET_ARTIST_ONE_SUCCESS:
            return {
                ...state,
                artists: action.data,
                displaySpinner: false,
            }
        case ArtistsAction.GET_ARTIST_TWO:
            return {
                ...state,
                displaySpinnerTwo: true
            }
        case ArtistsAction.GET_ARTIST_TWO_SUCCESS:
            return {
                ...state,
                artistsTwo: action.data,
                displaySpinnerTwo: false,
            }
        case ArtistsAction.GET_ARTIST_THREE:
            return {
                ...state,
                displaySpinnerThree: true
            }
        case ArtistsAction.GET_ARTIST_THREE_SUCCESS:
            return {
                ...state,
                artistsThree: action.data,
                displaySpinnerThree: false,

            }

        default:
            return state
    }
}
export default artistsReducer;