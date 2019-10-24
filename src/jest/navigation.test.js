import React from "react";
import Navigation from "../components/navigation";
import { mount } from "enzyme";

describe("Component render", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render guest header, if token is empty", () => {
    const wrapper = mount(<Navigation />);
    expect(wrapper.find("#logo")).toHaveLength(1);
    expect(wrapper.find("#signout")).toHaveLength(1);
  });
});