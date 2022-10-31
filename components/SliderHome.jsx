import React from "react";

const SliderHome = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-3 w-100vh "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="img-fluid w-100 h-100 overflow-hidden d-block w-100"
            src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(17)(539).jpg"
            alt="..."
          />
          <div className="carousel-caption d-block">
            <h5>Shree Suryodaya Secondary School</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid w-100 h-100 overflow-hidden d-block w-100"
            src="https://www.wpri.com/wp-content/uploads/sites/23/2022/08/pell-school-improvements.jpg?strip=1"
            alt="..."
          />
          <div className="carousel-caption d-block">
            <h5>Shree Suryodaya Secondary School</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid w-100 h-100 overflow-hidden d-block w-100"
            src="https://www.wpri.com/wp-content/uploads/sites/23/2022/08/pell-school-improvements.jpg?strip=1"
            alt="..."
          />
          <div className="carousel-caption d-block">
            <h5>Shree Suryodaya Secondary School</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SliderHome;
