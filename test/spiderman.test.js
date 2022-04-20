describe("Test Suite for Spiderman class", () => {
  test("1) Create an spiderman object", () => {
    const andrewGarfield = new Spiderman(
      "Spiderman Sony",
      31,
      "Andre Garfield",
      2,
      "Sony"
    );

    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });
});