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
    expect(tripleDigit(4)).to.equal("CD");
  });

  it("will return a complete roman numeral for a triple digit input", function() {
    expect(romanNumeral(226)).to.equal("CCXXVI");
  });

  it("will return a basic roman numeral for the quad digit of the input", function() {
    expect(quadDigit(3)).to.equal("MMM");
  });

  it("will return a complete roman numeral for a quad digit input", function() {
    expect(romanNumeral(3226)).to.equal("MMMCCXXVI");
  });
});
