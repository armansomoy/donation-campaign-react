import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  //   console.log(donations, id);

  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  console.log(donation);
  const {
    text_color,
    card_bg,
    category_bg,
    category,
    title,
    picture,
    price,
    description,
  } = donation;

  return (
    <div className="py-44  ">
      <div
        className="card card-compact bg-base-100 shadow-xl "
        style={{ width: "600px", margin: "0 auto" }}
      >
        <figure>
          <img className="h-64 w-full" src={picture} alt="Shoes" />
        </figure>
        <div
          className="card-body"
          style={{
            backgroundColor: card_bg,
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <h2 className="card-title" style={{ color: text_color }}>
            {title}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <button
              className={`bg-[${category_bg}] btn`}
              style={{
                backgroundColor: category_bg,
                color: text_color,
                padding: "10px 24px",
                borderRadius: "10px",
                fontSize: "22px",
              }}
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
