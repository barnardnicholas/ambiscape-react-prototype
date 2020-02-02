import React from "react";
import ChannelCard from "./ChannelCard";

const ChannelList = ({
  highlightedChannel,
  soloChannel,
  toggleHighlightedChannel,
  toggleSoloChannel,
  changeVolume,
  changeFrequency,
  changePan,
  channels,
  playing,
  playNextRandomSound
}) => {
  const renderChannelCard = sound => {
    return (
      <ChannelCard
        sound={sound}
        key={sound.id}
        changeVolume={changeVolume}
        changeFrequency={changeFrequency}
        changePan={changePan}
        isHighlighted={highlightedChannel === sound.slug ? true : false}
        toggleHighlight={toggleHighlightedChannel}
        toggleSoloChannel={toggleSoloChannel}
        volume={sound.volume}
        pan={sound.pan}
        frequency={sound.frequency}
        soloChannel={soloChannel}
        playing={playing}
        playNextRandomSound={playNextRandomSound}
      />
    );
  };

  const styling = {
    // border: "1px solid",
    listStyle: "none",
    padding: "0px"
    // backgroundColor: "#383838"
  };

  if (channels.length > 0) {
    return (
      <center className="channellist">
        <ul style={styling}>
          <li key="bglabel" className="channellistlabel">
            Background Sounds
          </li>
          {channels.map(sound => {
            if (sound.type === "background") {
              return renderChannelCard(sound);
            }
          })}
          <li>+</li>
          <li key="randomlabel">Random Sounds</li>
          {channels.map(sound => {
            if (sound.type === "random") {
              return renderChannelCard(sound);
            }
          })}
          <li>+</li>
        </ul>
      </center>
    );
  } else {
    return (
      <div className="loading">
        <p>LOADING</p>
      </div>
    );
  }
};

export default ChannelList;
