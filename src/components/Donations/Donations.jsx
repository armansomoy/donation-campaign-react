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
    <section id="donations">
      <div className="container">
        <div className="grid grid-cols-4 gap-4 py-20 md:grid-cols-2">
            {
                donations.map( donation => <SingleDonation key={donation.id} donation={donation}></SingleDonation>)
            }
        </div>
      </div>
    </section>
  );
};

export default Donations;
