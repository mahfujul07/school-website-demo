import React from "react";

const Gallery = () => {
  return (
    <div className="container">
      <section>
        <div className="container">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Gallery
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_960_720.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
