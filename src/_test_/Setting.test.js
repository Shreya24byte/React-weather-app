import React from "react";
import Setting from "../components/Setting";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Changing value of input works correctly", () => {
    const { getByTestId } = render(<Setting/>)
    const inputEl = getByTestId("inputLocation");
    expect(inputEl.value).toBe("Bangalore")
    fireEvent.change(inputEl, {
        target:{
            value:"Pune"
        }
    });
    expect(inputEl.value).toBe("Pune");
})