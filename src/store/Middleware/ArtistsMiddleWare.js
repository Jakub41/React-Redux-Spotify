
import { getSearch } from "../../Services/BaseDeezerAPI";
import ArtistsAction from "../actions/artistsActions";

class ArtistsMiddleware {
    static getArtistOne = ( data ) => {
        return dispatch => {
            console.log("inside midleware ")
            dispatch( ArtistsAction.getArtistOne( data ) )
            getSearch( data )
                .then( data => 
                    {
                        console.log(data);
                        dispatch( ArtistsAction.getArtistOneSuccessfull( data )  )
                    })
                .catch( err => {
                    console.log( "error occur", err );
                } )
        }
    }

    static getArtistTwo = ( data ) => {
        return dispatch => {
            dispatch( ArtistsAction.getArtistTwo( data ) ) 
            getSearch( data )
                .then( data => dispatch( ArtistsAction.getArtistTwoSuccess( data ) ) )
                .catch( err => {
                    console.log( "error occur", err );
                } )
        }
    }
    static getArtistThree = ( data ) => {
        return dispatch => {
            dispatch( ArtistsAction.getArtistThree( data ) ) 
            getSearch( data )
                .then( data => dispatch( ArtistsAction.getArtistThreeSuccess( data ) ) )
                .catch( err => {
                    console.log( "error occur", err );
                } )
        }
    }

}
export default ArtistsMiddleware;