export default (length, numberWidth) => {
  if (++length * numberWidth < numberWidth * 2) {
    return numberWidth * 2;
  } else {
    return length * numberWidth;
  }
};
