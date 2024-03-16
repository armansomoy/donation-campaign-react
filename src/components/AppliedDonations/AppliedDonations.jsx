import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utlity/localStorage";
import AppliedDonation from "../AppliedDonation/AppliedDonation";

const AppliedDonations = () => {
  const donations = useLoaderData();
  const [appliedDonation, setAppliedDonations] = useState([]);

  console.log(donations);
  useEffect(() => {
    const storedDonationsId = getStoredDonations();
    console.log(storedDonationsId);
    if (donations.length > 0) {
      const donationApplied = [];
      for (const id of storedDonationsId) {
        const dontaion = donations.find((dontaion) => dontaion.id === id);
        if (dontaion) {
          donationApplied.push(dontaion);
        }
      }
      setAppliedDonations(donationApplied);
    }
  }, [donations]);
  console.log(appliedDonation)

  return (
    <div  className="py-44">
      <div className=" container grid grid-cols-2 gap-6">
      {
        appliedDonation.map(d => <AppliedDonation key={d.id} d={d}></AppliedDonation>)
      }
      </div>
    </div>
  );
};

export default AppliedDonations;
