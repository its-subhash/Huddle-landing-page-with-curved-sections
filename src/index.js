import React from "react";
import { createRoot } from "react-dom/client";
import "./desktopstyle.css";
import "./mobilestyle.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const root = createRoot(document.getElementById("root"));

const NavBar = () => {
  return (
    <nav className="wrapper">
      <img src={images["logo.svg"]} alt="" />
      <a href="/">Try it Free</a>
    </nav>
  );
};

const LandingHeader = () => {
  return (
    <header className="wrapper">
      <h1>Build The Community Your Fans Will Love</h1>
      <p className="wrapper-narrow">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <a href="/">Get Started For Free</a>
    </header>
  );
};

const MainImage = () => {
  return (
    <div className="main-image wrapper">
      <img src={images["screen-mockups.svg"]} />
    </div>
  );
};

const NumberFigure = ({ image, number, description }) => {
  return (
    <div className="numberFigure">
      <img src={image} alt="" />
      <h1>{number}</h1>
      <p>{description}</p>
    </div>
  );
};

const NumberFigures = () => {
  return (
    <div className="numberFigures wrapper">
      <NumberFigure
        image={images["icon-communities.svg"]}
        number={"1.4k+"}
        description={"Comunities Formed"}
      />
      <NumberFigure
        image={images["icon-messages.svg"]}
        number={"2.7m+"}
        description={"Messages Sent"}
      />
    </div>
  );
};

const IllustrationImages = ({ image, imageArea, customId }) => {
  return (
    <div style={{ gridArea: `${imageArea}` }}>
      <div className="illustration-img">
        <img
          src={images["bg-section-top-mobile-1.svg"]}
          alt=""
          className="first-back"
        />
        <img src={image} alt="" id={customId} />
      </div>
    </div>
  );
};

const KeyPoints = ({ heading, text, textArea, customId }) => {
  return (
    <div className="wrapper" id={customId} style={{ gridArea: `${textArea}` }}>
      <div className="illustration-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

const KeyPointsContainer = () => {
  return (
    <article>
      <article className="article1">
        <IllustrationImages
          image={images["illustration-grow-together.svg"]}
          imageArea={"img1"}
          customId={"first-key-img"}
        />
        <KeyPoints
          heading={"Grow Together"}
          text={
            "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "
          }
          textArea={"text1"}
          customId={"first-key-text"}
        />
      </article>
      <article className="article2">
        <IllustrationImages
          image={images["illustration-flowing-conversation.svg"]}
          imageArea={"img2"}
          customId={"second-key-img"}
        />
        <KeyPoints
          heading={"Flowing Conversations"}
          text={
            "You worldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natual flow."
          }
          textArea={"text2"}
          customId={"second-key-text"}
        />
      </article>
      <article className="article3">
        <IllustrationImages
          image={images["illustration-your-users.svg"]}
          imageArea={"img3"}
          customId={"third-key-img"}
        />
        <KeyPoints
          heading={"Your Users"}
          text={
            "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          }
          textArea={"text3"}
          customId={"third-key-text"}
        />
      </article>
    </article>
  );
};

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <LandingHeader />
      <MainImage />
      <NumberFigures />
      <KeyPointsContainer />
    </div>
  );
};

root.render(<LandingPage />);
