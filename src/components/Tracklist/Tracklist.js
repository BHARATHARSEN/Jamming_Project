import React, {useState} from "react";
import './Tracklist.css';
import Track from './Track';


const Tracklist = ({tracks, onAdd, onRemove, isRemoval}) {
    return(
        <div classname = 'Tracklist'>
            {tracks.map((everyTrack) => {
                <Track
                  onAdd = {onAdd}
                  onRemove = {onRemove}
                  key = {everyTrack.id}
                  track = {everyTrack.value}
                  />
            })}
        </div>
    )
}

export default Tracklist;