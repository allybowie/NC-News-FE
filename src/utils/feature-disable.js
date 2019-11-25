const isDisabled = user => {
  if (user !== "") return false;
  return true;
};

export default isDisabled;
