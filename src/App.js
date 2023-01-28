//Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import { Article, ImgCard, VidCard } from "./components/Cards";
import Footer from "./components/Footer";

//Img
import September from "./assets/img/september.png";
import PrRounded from "./assets/img/prRounded.png";
import PrSquared from "./assets/img/prSquared.png";
import ImgNews1 from "./assets/img/news1.png";
import ImgNews2 from "./assets/img/news2.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="spaceSection spaceSectionHeader1"></div>
      <div className="spaceSection spaceSectionHeader2"></div>

      <section className="firstNews cornerSpace">
        <Article
          imgSrc={ImgNews1}
          imgAlt="News 1"
          cardTitle="NEXT"
          cardSubtitle="Lorem ipsum dolot sit amet lorem ipsum"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          bgColor="#fff"
        />
        <Article
          imgSrc={ImgNews2}
          imgAlt="News 1"
          cardTitle="NEXT"
          cardSubtitle="Lorem ipsum dolot sit amet lorem ipsum"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          bgColor="#E5E6E6"
        />
      </section>

      <div className="spaceSection"></div>

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

      <div className="spaceSection"></div>
      <section className="extraNews cornerSpace">
        <Article
          imgSrc={PrSquared}
          imgAlt="noAlt"
          cardTitle="Lorem ipsum dolot"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleClass=""
          textClass=""
          bgColor="#29ABE2"
        />

        <Article
          imgSrc={PrSquared}
          imgAlt="noAlt"
          cardTitle="Lorem ipsum dolot"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleClass=""
          textClass=""
          bgColor="#101820"
        />

        <Article
          imgSrc={PrSquared}
          imgAlt="noAlt"
          cardTitle="Lorem ipsum dolot"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleClass=""
          textClass=""
          bgColor="#101820"
        />

        <Article
          imgSrc={PrSquared}
          imgAlt="noAlt"
          cardTitle="Lorem ipsum dolot"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleClass=""
          textClass=""
          bgColor="#29ABE2"
        />
      </section>

      <div className="spaceSection"></div>

      <Footer />
    </div>
  );
}

export default App;
