/* Export your NodeJS module from this file */
exports.isPalindrome = (string) => {
  let reverseString = "";

  if (typeof string !== "string" || string == "") return false;

  let formatString = string.replace(/[^a-zA-Z0-9\.]+/g, "");
  formatString = formatString.toLowerCase();

  for (let i = formatString.length - 1; i >= 0; i--) {
    reverseString += formatString[i];
  }

  if (formatString === reverseString) return true;

  return false;
};

exports.randomAsyncStringIsPalindrome = async (obj) => {
  let string = await obj.get();
  let result = false;

  isPalindrome(string) ? (result = true) : (result = false);

  return result;
};
