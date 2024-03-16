const getStoredDonations = () => {
  const storedDonations = localStorage.getItem("donations");
  if (storedDonations) {
    return JSON.parse(storedDonations);
  }
  return [];
};

const savedDonation = (id) => {
  const storedDonations = getStoredDonations();
  const exists = storedDonations.find((donationId) => donationId === id);
  if (!exists) {
    storedDonations.push(id);
    localStorage.setItem("donations", JSON.stringify(storedDonations));
  }
};

export { getStoredDonations, savedDonation };
