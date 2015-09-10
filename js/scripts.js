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

var quadDigit = function(number) {
  var quadRoman = [];

  for(var i = 1; i <= number; i++) {
    quadRoman.push("M");
  };
  return quadRoman.join("");
};

var romanNumeral = function(number) {
  if (number >= 4000) {
    return "No";
  }

  var numberArray = number.toString().replace(/,/g,"").split("").reverse();
  var single = singleDigit(numberArray[0]);
  var double = doubleDigit(numberArray[1]);
  var triple = tripleDigit(numberArray[2]);
  var quad = quadDigit(numberArray[3]);

  return quad.concat(triple).concat(double).concat(single);
};
