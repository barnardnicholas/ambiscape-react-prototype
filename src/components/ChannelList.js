import React from "react";
import ChannelCard from "./ChannelCard";
import * as styles from "../styles";
import AddChannel from "./AddChannel";

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
  playNextRandomSound,
  addChannel
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

  const renderChannelAdder = (type) => {
    return (
    <AddChannel type={type} key={`${type}Adder`} slug={`${type}Adder`} channels={channels} isHighlighted={highlightedChannel === `${type}Adder` ? true : false} toggleHighlight={toggleHighlightedChannel} addChannel={addChannel}/>
    )
  }

  if (channels.length > 0) {
    return (
      <center className="channellist">
        <ul style={styles.tileULStyling}>
          <li key="bglabel" className="channellistlabel">
            Background Sounds
          </li>
          {channels.map(sound => {
            if (sound.type === "background") {
              return renderChannelCard(sound);
            }
          })}
          {renderChannelAdder("background")}
          <li key="randomlabel">Random Sounds</li>
          {channels.map(sound => {
            if (sound.type === "random") {
              return renderChannelCard(sound);
            }
          })}
          {renderChannelAdder("random")}
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
