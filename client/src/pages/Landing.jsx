import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby af fixie grailed, fingerstache sustainable food truck vape
            lo-fi. Vice paleo +1 ennui shaman portland tonx jianbing disrupt
            organic kombucha raclette listicle. Biodiesel gastropub literally
            same hoodie tilde. Tilde etsy four dollar toast gentrify,
            asymmetrical cliche prism mumblecore. Shabby chic scenester truffaut
            tacos. Gorpcore deep v ramps fixie synth. Mixtape adaptogen mukbang
            tacos man bun mlkshk.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
