import { useEffect } from "react";
import "./homepage.scss";
import Hero from "../../components/hero/hero.component";
import FormInput from "../../components/form-input/form-input.component";
import CollectionPreview from "../../components/collections-preview/collections-preview.component";
import ScrollButton from "../../components/UI/ScrollButton.jsx";

import {
  imgAbout1,
  imgAbout2,
  imgEthos1,
  imgEthos2,
} from "../../assets/assets.js";

import { ScrollTriggerAnimations } from "../../animations/animations.js";

import VideoIsh from "../../assets/img/video-ish.jpg";

const HomePage = () => {
  useEffect(() => {
    ScrollTriggerAnimations();
  });

  return (
    <>
      <Hero />
      <section className="section__about anim-content">
        <div className="about__content ">
          <div className="about__content--text">
            <p className="title">Who We Are</p>
            <h2 className="title__sub">
              <span>True</span> Office/Home Masters
            </h2>
            <p className="paragraph">
              Here at Oasis we know the struggles of juggling home and office
              life. So why not both? We turn your home into a office fit for a
              king and your office into your second home. Everyone
              deserves a space that fuels their creativity and boosts their
              productivity. Oasis will be your
              one-stop shop for turning any space into your personal paradise.
            </p>
          </div>

          <div className="about__content--img img">
            <img src={imgAbout1} alt="" className="img-1" />

            <div className="img-2__banner">
              <img src={imgAbout2} alt="" className="img-2" />
            </div>
          </div>
        </div>
      </section>
      {/* This is the homepage links for the store by category + everything */}
      <CollectionPreview />

      <section className="section__video">
        <img src={VideoIsh} alt="video" className="video__img" />
      </section>

      <section className="section__ethos anim-content">
        <div className="ethos__content ">
          <div className="ethos__content--img img">
            <img src={imgEthos1} alt="" className="img-1" />

            <div className="img-2__banner">
              <img src={imgEthos2} alt="" className="img-2" />
            </div>
          </div>
          <div className="ethos__content--text">
            <p className="title">Our ethos</p>
            <h2 className="title__sub">
              <span>Your happy place</span>
            </h2>
            <p className="paragraph">
              Your home and office is where you spend most of your working lives, so why not make it your castle?
            </p>
          </div>
        </div>
      </section>
      <section className="section__newsletter">
        <p className="title">Newsletter</p>
        <h2 className="title__sub">
          <span>Subscribe</span> to turn your home and office into a Oasis
        </h2>

        <form action="" className="newsletter__form">
          <FormInput placeholder="Email" type="email" />
          <button>Subscribe</button>
        </form>
      </section>
      <ScrollButton />
    </>
  );
};

export default HomePage;
