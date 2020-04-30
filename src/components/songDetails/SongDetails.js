import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({song}) => {
    if(!song) {
        return (
            <h3>Select a song</h3>
        )
    }
    return (
        <div>
            <h3>Details for:</h3>
            <div>
                Title: {song.title}
            </div>
            <div>
                Duration: {song.duration}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);