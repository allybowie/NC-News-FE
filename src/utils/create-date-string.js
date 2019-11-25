const createDate = date => {
  return new Date(date).toLocaleString().replace(",", " - ");
};

export default createDate;
