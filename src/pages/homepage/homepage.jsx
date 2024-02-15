import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./homepage.scss";
import Hero from "../../components/hero/hero.component";
import ProductModal from "../../components/product-modal/product-modal.component.jsx";
import FormInput from "../../components/form-input/form-input.component";
import CollectionPreview from "../../components/collections-preview/collections-preview.component";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions.js";

import {
  imgAbout1,
  imgAbout2,
  imgEthos1,
  imgEthos2,
} from "../../assets/assets.js";
import { ScrollTriggerAnimations } from "../../animations/animations.js";

import VideoIsh from "../../assets/img/video-ish.jpg";
import { PlaySVG } from "../../assets/assets.js";

const HomePage = () => {
  useEffect(() => {
    ScrollTriggerAnimations();
    // setModalHidden(true);
  },);

  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  //   // Dispatch action to toggle modal state
  //   store.dispatch(toggleModalHidden(!showModal));
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   // Dispatch action to hide modal
  //   store.dispatch(toggleModalHidden(false));
  // };


  return (
    <>
      <Hero /> 
      <section className="section__about anim-content">
        <div className="about__content ">
          <div className="about__content--text">
            <p className="title">Who We Are</p>
            <h2 className="title__sub">
              <span>True</span> furniture Masters
            </h2>
            <p className="paragraph">
              We are a collaboration of emerging and iconic designers and
              makers. Each object was designed to bring quality and style to
              your everyday rituals.
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
      {/* <CollectionPreview />  This is the homepage links for the store by category + everything */}
      <CollectionPreview />
    {/* {showModal && <ProductModal closeModal={closeModal} />} */}

      <section className="section__video">
        <img src={VideoIsh} alt="video" className="video__img" />

        <div className="blur">
          <img src={PlaySVG} alt="" className="play" />
        </div>
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
              <span>Effortlessly</span> Grande Homes
            </h2>
            <p className="paragraph">
              Making luxurious and truly grande furniture accessible for all
              people is our daily drive.
            </p>
          </div>
        </div>
      </section>
      <section className="section__newsletter">
        <p className="title">newsletter</p>
        <h2 className="title__sub">
          <span>Subscribe</span> to get the latest updates
        </h2>

        <form action="" className="newsletter__form">
          <FormInput placeholder="Email" type="email" />
          <button>Subscribe</button>
        </form>
      </section>
    </>
  );
};
// export default HomePage;

// const mapDispatchToProps = (dispatch) => ({
//   setModalHidden: (value) => dispatch(toggleModalHidden(value)),
// });
// export default connect(null, mapDispatchToProps)(HomePage);

// const mapDispatchToProps = (dispatch) => ({
// setModalHidden: () => dispatch(toggleModalHidden()),
// });

export default HomePage;