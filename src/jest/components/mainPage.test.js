// import React from "react";
// import mainPage from "../../components/mainPage";
// import { mount } from "enzyme";

// describe("Component render", () => {
//   beforeEach(() => {
//     localStorage.clear();
//   });
//   it("should render h2", () => {
//     expect(wrapper.find("h2")).toHaveLength(0);
//   });

//   it("should render h3", () => {
//     expect(wrapper.find("h3")).toHaveLength(2);
//   });

//   it("should render guest header, if token is empty", () => {
//     const wrapper = mount(<mainPage />);
//     expect(wrapper.find("#signin")).toHaveLength(1);
//     expect(wrapper.find("#signup")).toHaveLength(1);
//   });
// });