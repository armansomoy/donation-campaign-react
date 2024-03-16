import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <section id="banner">
      <div className="container text-center py-20">
        <h2 className="text-6xl font-bold pb-6">
          I Grow By Helping People <br /> In Need
        </h2>
        <div className="flex">
          <label className="input input-bordered flex w-full items-center gap-2">
            <input type="text" className="grow" placeholder="Search by Category" />
          </label>
          <button className="btn btn-active btn-secondary">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
