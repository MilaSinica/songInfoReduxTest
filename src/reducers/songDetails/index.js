import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {
            title: "Love Me Hard",
            author: "Milashka",
            duration: "4:05"
        },
        {
            title: "Play Football Now",
            author: "Adele",
            duration: "2:46"
        },
        {
            title: "Let`s go out",
            author: "Leps",
            duration: "5:13"
        },
        {
            title: "Dance with me",
            author: "Robin Williams",
            duration: "3:53"
        }
    ]
}

const selectedSong = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSong
});