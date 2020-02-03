class ArtistsAction {
  static GET_ARTIST_ONE = "GET_ARTIST_ONE";
  static GET_ARTIST_ONE_SUCCESS = "GET_ARTIST_SUCCESS";

  static GET_ARTIST_TWO = "GET_ARTIST_TWO";
  static GET_ARTIST_TWO_SUCCESS = "GET_ARTIST_TWO_SUCCESS";

  static GET_ARTIST_THREE = "GET_ARTIST_THREE";
  static GET_ARTIST_THREE_SUCCESS = "GET_ARTIST_THREE_SUCCESS";

  static getArtistOne = data => {
    return {
      type: this.GET_ARTIST_ONE,
      data: data
    };
  };

  static getArtistOneSuccessfull = data => {
    return {
      type: this.GET_ARTIST_ONE_SUCCESS,
      data: data,
      success: true
    };
  };

  static getArtistTwo = data => {
    return {
      type: this.GET_ARTIST_TWO,
      data: data
    };
  };

  static getArtistTwoSuccess = data => {
    return {
      type: this.GET_ARTIST_TWO_SUCCESS,
      data: data,
      success: true
    };
  };

  static getArtistThree = data => {
    return {
      type: this.GET_ARTIST_THREE,
      data: data
    };
  };

  static getArtistThreeSuccess = data => {
    return {
      type: this.GET_ARTIST_THREE_SUCCESS,
      data: data,
      success: true
    };
  };
}

export default ArtistsAction;
