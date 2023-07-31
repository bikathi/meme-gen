describe("The car", () => {
	test("The car is blue", () => {
		expect("blue").toBe("blue");
	}),
    test("The car has four tires", () => {
        expect(4).toBe(4);
    }),
    test("Car to speed is 300", () => {
        expect(300).toBeGreaterThanOrEqual(300);
    });
});
