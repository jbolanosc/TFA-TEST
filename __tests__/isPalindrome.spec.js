const checkPalindrome = require("../src/javascript-test/palindrome");

const palindrome = "racecar";
const notPalindrome = "afternoon";
var str =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

const objectPromise = {
  get: function () {
    return new Promise((resolve, reject) => {
      resolve(str);
    });
  },
};

describe("is palindrome function true examples", () => {
  test(`it should return true if ${palindrome} is palindrome`, () => {
    expect(checkPalindrome.isPalindrome("1221")).toEqual(true);
  });
});

describe("is palindrome function false examples", () => {
  test(`it should return false if ${notPalindrome} is not palindrome`, () => {
    expect(checkPalindrome.isPalindrome("nothing")).toEqual(false);
  });
});

describe("is palindrome async  function test", () => {
  it("It should return false as generated word will not be a palindrome", () => {
    expect.assertions(1);
    return checkPalindrome
      .randomAsyncStringIsPalindrome(
        objectPromise,
        checkPalindrome.isPalindrome
      )
      .then((data) => expect(data).toEqual(false));
  });
});
