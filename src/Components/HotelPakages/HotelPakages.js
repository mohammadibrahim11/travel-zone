import React from "react";
import { Link } from "react-router-dom";

const HotelPakages = () => {
  return (
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/ZdStJWx/hotel-img-8.png" alt="hotel-img-8" border="0"></a>
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://i.ibb.co/ZdStJWx/hotel-img-8.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Hotel name</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="" class="btn btn-primary">
            view details
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotelPakages;
