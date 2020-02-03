
import LibraryAction from "../actions/LibraryActions"


function LibraryReducer( state = {
    LibrarySongs: []
}, action ) {
    switch ( action.type ) {

        case LibraryAction.SET_SONG_TO_LIBRARY:
            return {
                ...state,
                LibrarySongs: [...state.LibrarySongs, action.data],
            }
        case LibraryAction.REMOVE_SONG_FROM_LIBRARY:
            return {
                ...state,
                LibrarySongs: [
                    ...state.LibrarySongs.slice( 0, action.index ),
                    ...state.LibrarySongs.slice( action.index + 1 )
                ],
            }
        default:
            return state
    }
}
export default LibraryReducer;
