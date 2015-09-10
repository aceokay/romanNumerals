describe("romanNumeral", function() {
  it("will return a basic roman numeral for the single digit of the input", function() {
    expect(singleDigit(7)).to.equal("VII");
  });

  it("will return a basic roman numeral for the double digit of the input", function() {
    expect(doubleDigit(2)).to.equal("XX");
  });

  it("will return a complete roman numeral for a double digit input", function() {
    expect(romanNumeral(26)).to.equal("XXVI");
  });

  it("will return a basic roman numeral for the triple digit of the input", function() {
    expect(romanNumeral(4)).to.equal("CD");
  });
});
