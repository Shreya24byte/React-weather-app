import { tempConversion} from "../utils/Conversion";

test("farenheit to degree conversion", () => {
    expect(tempConversion(150)).toBe("65.6");
})