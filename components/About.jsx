import React from "react";

const About = () => {
  return (
    <section id="about" className="about mt-5">
      <div className="container-fluid">
        <h2 className="h1-responsive font-weight-bold text-center my-2">
          About
        </h2>
        <p className="text-center w-responsive mx-auto mb-1">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row  pt-5 pb-5">
          <div
            className="col-lg-5 align-items-stretch video-box"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg)",
            }}
            // style='background-image: url("https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg");'
          >
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            ></a>
          </div>

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content">
              <h3>
                Eum ipsam laborum deleniti{" "}
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
