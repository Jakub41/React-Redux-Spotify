class LibraryAction {
    static SET_SONG_TO_LIBRARY = "SET_SONG_TO_LIBRARY";
    static GET_SONG_FROM_LIBRARY = "GET_SONG_FROM_LIBRARY";
    static REMOVE_SONG_FROM_LIBRARY="REMOVE_SONG_FROM_LIBRARY"

    static getSongsFromLibrary = ( data ) => {
        return {
            type: this.GET_SONG_FROM_LIBRARY,
            data: data,
        }
    }
    static setSongToLibrary = ( data ) => {
        return {
            type: this.SET_SONG_TO_LIBRARY,
            data,
        }
    }
    static removeSongFromLibrary=(index)=>{
        return {
            type:this.REMOVE_SONG_FROM_LIBRARY,
            index
        }
    }


}
export default LibraryAction
