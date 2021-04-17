/* Export your NodeJS module from this file */
exports.isPalindrome = (string) => {
  if (typeof string !== "string")
    throw new Error("Element to validate must be string.");

  if (typeof string === "") return false;

  let reverseString = "";

  let formatString = string.replace(/[^a-zA-Z0-9\.]+/g, "");
  formatString = formatString.toLowerCase();

  for (let i = formatString.length - 1; i >= 0; i--) {
    reverseString += formatString[i];
  }

  if (formatString === reverseString) return true;

  return false;
};

exports.randomAsyncStringIsPalindrome = (obj, isPalindrome) => {
  return new Promise(async (resolve, reject) => {
    try {
      let string = await obj.get();
      isPalindrome(string) ? resolve(true) : resolve(false);
    } catch (err) {
      reject(err);
    }
  });
};
