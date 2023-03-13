import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import "./PackagesDetails.css";

const PackagesDetails = () => {
  return (
    <div>
      <section className="container">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex justify-content-start align-items-center gap-2">
                <h4 className="package-name">
                  CVK Park Bosphorus Hotel Istanbul
                </h4>
                <div>
                  <span className="text-warning">
                    <FaStar />
                  </span>
                  <span className="text-warning">
                    <FaStar />
                  </span>
                  <span className="text-warning">
                    <FaStar />
                  </span>
                  <span className="text-warning">
                    <FaStar />
                  </span>
                  <span className="text-warning">
                    <FaStar />
                  </span>

                  <span className="fs-6 mt-4 ms-2">5 start package</span>
                </div>
              </div>
              <div className="package-location">
                <p>Location</p>
              </div>
            </div>
            <div>
              <h4 className="package-price">Price</h4>
              <div className="">
                <button className="btn btn-light  ">
                  <FaHeart />
                </button>
                <button className="btn btn-info ms-2">Book Now</button>
              </div>
            </div>
          </div>
          {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/nw29CM1/biman-bangladesh-img.jpg" alt="biman-bangladesh-img" border="0"></a> */}

          <div>
            <img
              src="https://i.ibb.co/nw29CM1/biman-bangladesh-img.jpg"
              alt=""
            />
          </div>
          <div className="overview">

            <h6 className="mt-4">packages overview:</h6>
            <p>
              Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
              Bosphorus Hotel Istanbul has risen from the ashes of the historic
              Park Hotel, which also served as Foreign Affairs Palace 120 years
              ago and is hosting its guests by assuming this hospitality
              mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
              fitness area, 18 meeting rooms including 4 dividable ones and 3
              terraces with Bosphorus view, Istanbuls largest terrace with
              Bosphorus view (4500 m2) and latest technology infrastructure, CVK
              Park Bosphorus Hotel Istanbul is destined to be the popular
              attraction point of the city. Room and suite categories at various
              sizes with city and Bosphorus view, as well as 68 separate luxury
              suites, are offered to its special guests as a wide variety of
              selection.
            </p>
          </div>
          <div>
            <h6 className="mt-4">Itinerary</h6>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesDetails;
