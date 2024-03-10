import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>HARVEY TYLER</h2>
          <h1>Web developer and UI designer</h1>
          <div className="buttons">
            <button>See The Latest Works</button>
            <button>Contact Me</button>
            <img src="/public/scroll.png" alt="" />
          </div>
        </div>
      </div>
      <div className="slidingTextContainer">
        Writer Content Creator Influencer
      </div>
      <div className="imageContainer">
        <img src="/public/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
