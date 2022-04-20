const spiderman = require("./../app/spiderman");

test("2) Use the method getInfo()", () => {
  const TomHolland = new spiderman(
    "Spiderman Marvel",
    25,
    "Tom Holland",
    5,
    "Marvel"
  );
  expect(TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
});
