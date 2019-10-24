import React from "react";
import { shallow } from "enzyme";
import SignUpForm from "../../../components/users/signUpForm";
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() })
describe("Component", () => {
    let submit = jest.fn();
    let wrapper = shallow(<SignUpForm SignUpForm={submit}/>);
    const component = wrapper.find("signUpForm");

  it("should render h3 ", () => {
    expect(component.find("h3")).toHaveLength(1);
  });
  it("should render form", () => {
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("input")).toHaveLength(5);
  });

  it("should run handleChange", () => {
    const usernameInput = component.find("#username"); 
    const fnameInput = component.find("#firstname");
    const lnameInput = component.find("#lastname");
    const emailInput = component.find("#email");
    const passInput = component.find("#password");
    usernameInput.simulate("change", { target: { value: "masha123" } })
    fnameInput.simulate("change", { target: { value: "Masha" } });
    lnameInput.simulate("change", { target: { value: "Vovna" } });
    emailInput.simulate("change", { target: { value: "good@gmail.net" } });
    passInput.simulate("change", { target: { value: "password123" } });
    expect(component.state().user.username).toEqual("masha123");
    expect(component.state().user.firstname).toEqual("Masha");
    expect(component.state().user.lastname).toEqual("Vovna");
    expect(component.state().user.email).toEqual("good@gmail.net");
    expect(component.state().user.password).toEqual("password123");
  });

  it("should submit form", () => {
    const btn = component.find("#submit");
    btn.simulate("submit");
    expect(component.props().onSignUpForm).toHaveBeenCalled();
  });
});