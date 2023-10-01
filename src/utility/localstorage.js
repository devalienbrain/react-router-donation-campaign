const getStoredDonationData = () => {
  const storedDonationData = localStorage.getItem("donation-data");
  if (storedDonationData) {
    return JSON.parse(storedDonationData);
  }
  return [];
};

const saveDonationData = (id) => {
  const storedDonationDatas = getStoredDonationData();
  const isExists = storedDonationDatas.find((thisId) => thisId === id);
  if (!isExists) {
    storedDonationDatas.push(id);
    localStorage.setItem("donation-data", JSON.stringify(storedDonationDatas));
  }
  return isExists;
};
export { getStoredDonationData, saveDonationData };
