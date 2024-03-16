import React from "react";
import { Link } from "react-router-dom";

const AppliedDonation = ({ d }) => {
  const {
    id,
    text_color,
    card_bg,
    category_bg,
    category,
    title,
    picture,
    description,
  } = d;
  return (
    <div
      className="card card-side bg-base-100 shadow-xl"
      style={{ height: "300px" }}
    >
      <figure>
        <img className="h-full w-64" src={picture} alt="Movie" />
      </figure>
      <div
        className="card-body"
        style={{
          backgroundColor: card_bg,
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <div className="card-actions justify-start">
          <button
            className="btn"
            style={{ backgroundColor: category_bg, color: text_color }}
          >
            {category}
          </button>
        </div>
        <h2 className="card-title" style={{ color: text_color }}>
          {title}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <Link to={`/donation/${id}`}>
            {" "}
            <button
              className={`bg-[${category_bg}] btn`}
              style={{
                backgroundColor: category_bg,
                color: text_color,
                padding: "10px 24px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
            >
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedDonation;
