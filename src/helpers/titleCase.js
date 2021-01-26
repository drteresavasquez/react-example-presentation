const titleCase = (string) => {
  const newString = string
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (firstLetter) => {
      return firstLetter.toUpperCase();
    });

  return newString;
};

export default titleCase;
