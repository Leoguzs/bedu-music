import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../music/css/AudioList.css";

const AudioList = ({
  tracks,
  trackIndex,
  setTrackIndex,
  playlist,
  handleClickUpdateTrackIndex,
}) => {
  return (
    <div className="playlist no_drag">
      {
        //console.log(playlist)
      }
      <ul className="lista" style={{ textDecoration: "none" }}>
        {playlist.tracks.map((track, i) => (
          <li
            className={"tracklist"}
            key={i}
            style={{ textDecoration: "none" }}
          >
            <div className="playlist_btns_group">
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  handleClickUpdateTrackIndex(e, i);
                }}
                className="fav_song playlist_btn"
              >
                <i>play</i>
              </Button>
              <span className="trackname">
                {track.name}
                <br />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
