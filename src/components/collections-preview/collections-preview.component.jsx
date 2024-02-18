import { useEffect } from "react";
import { InitPreviewAnimation } from "../../animations/animations";
import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";

import {
  // imgChair,
  // imgLight,
  // imgSofa,
  imgStool,
  imgOtto,
} from "../../assets/assets.js";

import imgChair1 from "../../assets/img/chair-1.webp";
import imgChair2 from "../../assets/img/chair-2.webp";
import imgChair3 from "../../assets/img/chair-3.webp";
import imgChair4 from "../../assets/img/chair-4.webp";
import imgLight1 from "../../assets/img/light-1.webp";
import imgLight2 from "../../assets/img/light-2.webp";
import imgLight3 from "../../assets/img/light-3.webp";
import imgLight4 from "../../assets/img/light-4.webp";
import imgDesk1 from "../../assets/img/desk-1.webp";
import imgDesk2 from "../../assets/img/desk-2.webp";
import imgDesk3 from "../../assets/img/desk-3.webp";
import imgTech1 from "../../assets/img/tech-1.webp";
import imgTech2 from "../../assets/img/tech-2.webp";
import imgTech3 from "../../assets/img/tech-3.webp";
import imgTech4 from "../../assets/img/tech-4.webp";
// import imgOther1 from "../../assets/img/other-1.webp";
// import imgOther2 from "../../assets/img/other-2.webp";
// import imgOther3 from "../../assets/img/other-3.webp";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

const CollectionPreview = ({ collections }) => {
  useEffect(() => {
    InitPreviewAnimation();
  }, []);

  if (!collections) return null;

  return (
    <section className="section__browse-collections">
      <p className="title">Browse Collections</p>
      <div className="preview">
        <div className="preview__left img">
          <img
            alt="Red gaming chair"
            src={imgChair1}
            className="img__small"
            style={{ left: "50%", top: "12%", opacity: "1" }}
            id="1"
          />
          <img
            alt="Blue green light and book"
            src={imgLight3}
            className="img__large"
            style={{
              top: "5%",
              right: "50%",
              transform: "translateX(50%)",
              opacity: "0",
            }}
            id="2"
          />
          <img
            alt="Metal light"
            src={imgLight4}
            className="img__large"
            style={{
              top: "65%",
              right: "35%",
              transform: "translateX(50%)",
              opacity: "0",
            }}
            id="2"
          />
          <img
            alt="White desk blue background"
            src={imgDesk1}
            className="img__large"
            style={{ left: "45%", bottom: "5%", opacity: "0" }}
            id="3"
          />
          <img
            alt="Fredde IKEA gaming desk"
            src={imgDesk2}
            className="img__large"
            style={{ right: "45%", top: "-10%", opacity: "0" }}
            id="3"
          />
          <img
            alt="Ergonomic chair"
            src={imgChair3}
            className="img__small"
            style={{ bottom: "20%", left: "20%", opacity: "1" }}
            id="1"
          />
          <img
            alt="Bluetooth speaker"
            src={imgTech3}
            className="img__large"
            style={{
              top: "5%",
              right: "50%",
              transform: "translateX(50%)",
              opacity: "0",
            }}
            id="4"
          />
            <img
            alt="Webcam"
            src={imgTech4}
            className="img__small"
            style={{
              top: "70%",
              right: "50%",
              transform: "translateX(50%)",
              opacity: "0",
            }}
            id="4"
          />
          <img
            alt=""
            src={imgOtto.third}
            className="img__small"
            style={{ bottom: "20%", left: "20%", opacity: "0" }}
            id="5"
          />
          <img
            alt=""
            src={imgOtto.second}
            className="img__small"
            style={{ left: "50%", top: "12%", opacity: "0" }}
            id="5"
          />
        </div>

        <div className="preview__text">
          {collections.map(({ id, urlTitle }) => (
            <Link
              to={`/category/${urlTitle}`}
              id={id}
              key={id}
              className="collection-title"
            >
              {urlTitle}
            </Link>
          ))}
          <Link to="/collections" className="btn btn__text">
            View everything
          </Link>
        </div>
        <div className="preview__right img">
          <img
            alt="Brown chair"
            src={imgChair2}
            className="img__large"
            style={{
              top: "5%",
              right: "50%",
              transform: "translateX(50%)",
              opacity: "1",
            }}
            id="1"
          />{" "}
          <img
            alt="Vintage chair"
            src={imgChair4}
            className="img__small"
            style={{
              top: "65%",
              right: "50%",
              transform: "translateX(50%)",
              opacity: "1",
            }}
            id="1"
          />{" "}
          <img
            alt="White lamp"
            src={imgLight1}
            className="img__small"
            style={{ bottom: "0%", right: "20%", opacity: "0" }}
            id="2"
          />{" "}
          <img
            alt=""
            src={imgLight2}
            className="img__small"
            style={{ right: "50%", top: "12%", opacity: "0" }}
            id="2"
          />{" "}
          <img
            alt="White desk and chair"
            src={imgDesk3}
            className="img__large"
            style={{ right: "35%", top: "10%", opacity: "0" }}
            id="3"
          />
          <img
            alt="Macbook"
            src={imgTech1}
            className="img__small"
            style={{ bottom: "00%", right: "50%", opacity: "0" }}
            id="4"
          />{" "}
          <img
            alt="Large Monitor"
            src={imgTech2}
            className="img__small"
            style={{ right: "20%", top: "12%", opacity: "0" }}
            id="4"
          />{" "}
          <img
            alt=""
            src={imgOtto.first}
            className="img__large"
            style={{
              top: "5%",
              right: "50%",
              transform: "translateX(50%)",
              opacity: "0",
            }}
            id="5"
          />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectDirectorySection,
});
export default connect(mapStateToProps)(CollectionPreview);
