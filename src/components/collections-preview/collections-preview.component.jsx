import {useEffect} from "react";
import { InitPreviewAnimation } from "../../animations/animations";

import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
import {
  imgChair,
  imgLight,
  imgSofa,
  imgStool,
  imgOtto,
} from "../../assets/assets";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";
 
const CollectionPreview = () => {
  useEffect(() => {
    InitPreviewAnimation();
  }, []);

     return (
      <section className="section__browse-collections">
        <p className="title">Browse Collections</p>
        <div className="preview">
          <div className="preview__left img">
            <img
              alt=""
              src={imgChair.second}
              className="img__small"
              style={{ left: "50%", top: "12%", opacity: "1" }}
              id="1"
            />

            <img
              alt=""
              src={imgLight.third}
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
              alt=""
              src={imgSofa.first}
              className="img__large"
              style={{ left: "45%", bottom: "10%", opacity: "0" }}
              id="3"
            />
            <img
              alt=""
              src={imgSofa.second}
              className="img__large"
              style={{ right: "45%", top: "-10%", opacity: "0" }}
              id="3"
            />
            <img
              alt=""
              src={imgChair.third}
              className="img__small"
              style={{ bottom: "20%", left: "20%", opacity: "1" }}
              id="1"
            />
            <img
              alt=""
              src={imgStool.third}
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
          </div>
      </section>
    );
  }
 

export default CollectionPreview;

// export default CollectionPreview
