import { describe, expect, it } from "vitest";
import delimitedEmailsToArray from "../delimited-emails-to-array";

describe("delimitedEmailsToArray", () => {
  it("is a function", () => {
    expect(delimitedEmailsToArray).toBeTypeOf("function");
  });

  it("returns an array", () => {
    const result = delimitedEmailsToArray();
    expect(Array.isArray(result)).toStrictEqual(true);
  });

  it("returns an empty array on empty strings", () => {
    const result = delimitedEmailsToArray();
    expect(result.length).toStrictEqual(0);
  });

  it("returns an array of object with prop email of the delimited arrays", () => {
    const mock =
      " reinhart.logronio@gmail.com,www.reinhart@gmail.com , reinhart.test@mail.com";
    console.log(mock);
    const expectation = [
      {
        email: "reinhart.logronio@gmail.com",
      },
      {
        email: "www.reinhart@gmail.com",
      },
      {
        email: "reinhart.test@mail.com",
      },
    ];
    expect(delimitedEmailsToArray(mock)).toStrictEqual(expectation);
  });
});
