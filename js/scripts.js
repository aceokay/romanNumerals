var singleDigit = function(number) {
  var roman = []

  for(var i = 1; i <= number; i++) {
    if (i === 9) {
      roman = [];
      roman.push("IX");
    } else if (i <= 8 && i >= 6) {
      roman.push("I");
    } else if (i === 5) {
      roman = [];
      roman.push("V");
    } else if (i === 4) {
      roman = [];
      roman.push("IV");
    } else if (i <=3) {
      roman.push("I");
    };
  };
  return roman.join("");
};

// var romanNumeral = function() {
//
// };

// 1 = I
// 2 = II
// 3 = III
// 4 = IV
// 5 = V
// 6 = VI
// 7 = VII
// 8 = VIII
// 9 = IX
