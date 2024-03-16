import React from "react";
import { NavLink } from "react-router-dom";

const SingleDonation = ({ donation }) => {
  const { id, text_color, card_bg, category_bg, category, title, picture } =
    donation;
  return (
    <NavLink to={`/donation/${id}`}>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 w-full"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body" style={{backgroundColor: card_bg, borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
        <div className="card-actions justify-start">
          <button  className={`bg-[${category_bg}] btn`} style={{backgroundColor: category_bg, color: text_color}}>{category}</button>
        </div>
        <h2 className="card-title" style={{color: text_color}}>{title}</h2>
      </div>
    </div>
    </NavLink>
  );
};

export default SingleDonation;
