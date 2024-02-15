export const makeFirstLetterCapital = (str) => {
  if (str?.includes(",")) {
    return str
      .split(", ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(", ");
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export const backgroundColor = (color) => {
  if (color?.includes(",")) {
    return color.split(", ")[1];
  } else {
    return color;
  }
};
