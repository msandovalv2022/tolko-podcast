//Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import { ImgCard, VidCard } from "./components/Cards";

//Img
import September from "./assets/img/september.png";
import PrRounded from "./assets/img/prRounded.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <section className="notes cornerSpace">
        <div className="notes__info">
          <div className="notes__info--one">
            <ImgCard
              imgSrc={September}
              alt="september"
              title="Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>

          <div className="notes__info--two">
            <ImgCard
              imgSrc={September}
              alt="september"
              title="Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        </div>
        <div className="notes__videos">
          <div className="notes__videos--rectangle"></div>
          <div className="notes__videos--videos">
            <div className="notes__videos--videosOne">
              <VidCard
                title="Lorem ipsum dolor sit amet"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </div>
            <div className="notes__videos--videosTwo">
              <VidCard
                title="Lorem ipsum dolor sit amet"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
