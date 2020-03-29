import React from "react";
import { Link } from "react-router-dom";
import "./picture.css";
const Picture = () => (
  <div className="Picture">
    <div className="Offer">
      <h1 className="OfferText">
        Продаём скины дешевле, чем на
        <br />
        Торговой площадке
      </h1>
      <Link to="/signin" className="offer-btn">
        Купить
      </Link>
    </div>
  </div>
);

export default Picture;
