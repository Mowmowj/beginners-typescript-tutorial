import { expect, it } from "vitest";
type amountType = number | { amount: number };
const coerceAmount = (amount: amountType) => {
	if (typeof amount === "number") {
		return amount;
	}
	return amount.amount;
};

it("Should return the amount when passed an object", () => {
	expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
	expect(coerceAmount(20)).toEqual(20);
});
