var singleDigit = function(number) {
  var singleRoman = []

  for(var i = 1; i <= number; i++) {
    if (i === 9) {
      singleRoman = [];
      singleRoman.push("IX");
    } else if (i <= 8 && i >= 6) {
      singleRoman.push("I");
    } else if (i === 5) {
      singleRoman = [];
      singleRoman.push("V");
    } else if (i === 4) {
      singleRoman = [];
      singleRoman.push("IV");
    } else if (i <=3) {
      singleRoman.push("I");
    };
  };
  return singleRoman.join("");
};

var doubleDigit = function(number) {
  var doubleRoman = [];

  for(var i = 1; i <= number; i++) {
    if (i === 9) {
      doubleRoman = [];
      doubleRoman.push("XC");
    } else if (i <= 8 && i >= 6) {
      doubleRoman.push("X");
    } else if (i === 5) {
      doubleRoman = [];
      doubleRoman.push("L");
    } else if (i === 4) {
      doubleRoman = [];
      doubleRoman.push("XL");
    } else if (i <=3) {
      doubleRoman.push("X");
    };
  };
  return doubleRoman.join("");
};

var tripleDigit = function(number) {
  var tripleRoman = [];

  for(var i = 1; i <= number; i++) {
    if (i === 9) {
      tripleRoman = [];
      tripleRoman.push("CM");
    } else if (i <= 8 && i >= 6) {
      tripleRoman.push("C");
    } else if (i === 5) {
      tripleRoman = [];
      tripleRoman.push("D");
    } else if (i === 4) {
      tripleRoman = [];
      tripleRoman.push("CD");
    } else if (i <=3) {
      tripleRoman.push("C");
    };
  };
  return tripleRoman.join("");
};

var romanNumeral = function(number) {
  var numberArray = number.toString().split("").reverse();
  var single = singleDigit(numberArray[0]);
  var double = doubleDigit(numberArray[1]);
  var triple = tripleDigit(numberArray[2]);

  return triple.concat(double).concat(single);
};
