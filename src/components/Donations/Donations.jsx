import React, { useEffect, useState } from "react";
import SingleDonation from "../SingleDonation/SingleDonation";

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <section id="donations" className="pt-8">
      <div className="container">
        <h2 className="text-6xl font-bold text-center py-8">Our Donations Medium</h2>
        <div className="grid lg:grid-cols-4 gap-4 py-20 md:grid-cols-2">
            {
                donations.map( donation => <SingleDonation key={donation.id} donation={donation}></SingleDonation>)
            }
        </div>
      </div>
    </section>
  );
};

export default Donations;
