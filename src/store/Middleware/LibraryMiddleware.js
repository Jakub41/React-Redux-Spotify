import LibraryAction from "../actions/LibraryActions";

class LibraryMiddleware {
  static getSongsFromLibrary = data => {
    return dispatch => {
      console.log("inside middleware ");
      dispatch(LibraryAction.getSongsFromLibrary(data));
    };
  };
  static setSongToLibrary = data => {
    return dispatch => {
      dispatch(LibraryAction.setSongToLibrary(data));
    };
  };
  static removeSongFromLibrary = index => {
    return dispatch => {
      dispatch(LibraryAction.removeSongFromLibrary(index));
    };
  };
}

export default LibraryMiddleware;
