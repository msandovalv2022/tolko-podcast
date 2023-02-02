//Libs
import Player from "@madzadev/audio-player";

//Img
import ImgPlayer from '../assets/img/news1.png'
import fullBanner from "../assets/img/fullBanner.png";

//Audio Archives
import Jet from "../assets/podcasts/audio/jet.mp3";
import Nicky from "../assets/podcasts/audio/nicky.mp3";
import Where from "../assets/podcasts/audio/where.mp3";

const tracks = [
  {
    url: Jet,
    title: "Are You Gonna Be My Girl",
    tags: ["house"],
  },
  {
    url: Nicky,
    title: "Cuando te veo",
    tags: ["dnb"],
  },
  {
    url: Where,
    title: "Where is the love",
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
  --playerBackground: #D9D9D9;
  --titleColor: #ffffff; 
  --timeColor: #fff;
  --progressSlider: #fff;
  --progressUsed: #29ABE2;
  --progressLeft: #54565A;
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
        <img src={fullBanner} alt="Imágen de reproductor" />
      </div>
      <div className="audioplayer__player">
        <Player
          trackList={tracks}
          includeTags={false}
          includeSearch={false}
          showPlaylist={true}
          autoPlayNextTrack={true}
          customColorScheme={colors}
        />
      </div>
    </section>
  );
};

export default Audioplayer;
