import Player from "@madzadev/audio-player";
import ImgPlayer from '../assets/img/news1.png'
import Jet from "../assets/podcasts/audio/jet.mp3";

const tracks = [
  {
    url: Jet,
    title: "Are You Gonna Be My Girl",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const colors = `html {
  --tagsBackground: #9440f3;
  --tagsText: #ffffff;
  --tagsBackgroundHoverActive: #2cc0a0;
  --tagsTextHoverActive: #ffffff;
  --searchBackground: #18191f;
  --searchText: #ffffff;
  --searchPlaceHolder: #575a77;
  --playerBackground: #18191f;
  --titleColor: #ffffff; 
  --timeColor: #ffffff;
  --progressSlider: #9440f3;
  --progressUsed: #ffffff;
  --progressLeft: #151616;
  --volumeSlider: #9440f3;
  --volumeUsed: #ffffff;
  --volumeLeft:  #151616;
  --playlistBackground: #18191f;
  --playlistText: #575a77;
  --playlistBackgroundHoverActive:  #18191f;
  --playlistTextHoverActive: #ffffff;
}`;
const Audioplayer = () => {
  return (
    <section className="audioplayer ">
      <div className="audioplayer__img">
        <img src={ImgPlayer} alt="Imágen de reproductor" />
      </div>
      <div className="audioplayer__player">
        <Player
          trackList={tracks}
          includeTags={false}
          includeSearch={false}
          showPlaylist={true}
          autoPlayNextTrack={false}
          customColorScheme={colors}
        />
      </div>
    </section>
  );
};

export default Audioplayer;
