import React from "react";
import { Link } from "react-router-dom";

const HeroBannerHome = () => {
  return (
    <div className="hero-banner-twelve lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
            <h1 className="hero-heading font-gordita" data-aos="fade-up">
              a bit{" "}
              <span style={{ color: "#FF006B" }}>of a</span>,{" "}
              <span style={{ color: "#FEDC00" }}>revolution.</span>
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The BitWeb and Web4 have arrived. We're taking the web back and we're doing it together.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link to="/web4" className="theme-btn-five">
                What is Web4?{" "}
                <i className="fa fa-angle-right ml-1" aria-hidden="true"></i>
              </Link>
             <Link to="/join" className="get-start-btn">
                Join the DAO{" "}
                <i className="fa fa-angle-right ml-1" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="screen-holder" data-aos="fade-up">
          <img
            src="images/assets/screen_32.png"
            alt="screen"
            className="img-meta"
          />
          <img
            src="images/assets/screen_33.png"
            alt="screen"
            className="shapes screen-one"
          />
          <img
            src="images/assets/screen_34.png"
            alt="screen"
            className="shapes screen-two"
          />
          <img
            src="images/shape/230.svg"
            alt="screen"
            className="shapes shape-one"
          />
          <img
            src="images/shape/231.svg"
            alt="screen"
            className="shapes shape-two"
          />
          {/* </div> <!-- /.screen-holder --> */}
        </div>
        <img
          src="images/shape/232.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/233.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/234.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/235.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <img
          src="images/shape/236.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <img
          src="images/shape/232.svg"
          alt="shape"
          className="shapes shape-eight"
        />
      </div>
    </div>
    // /.hero-banner-twelve
  );
};

export default HeroBannerHome;
