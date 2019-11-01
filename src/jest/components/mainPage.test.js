import React from "react";
import MainPage from "../../components/mainPage";
import { Router, Route } from 'react-router-dom'

import history from '../../utils/history'

describe("Component render", () => {
  
  it('signup account', () =>{
    const wrapper = mount(
      <Router history={history}>
        <MainPage />
      </Router>);
    const component = wrapper.find('MainPage');
    const button = component.find('button').at(0);
    button.simulate('click');
    expect(window.location.pathname).toBe('/signUp');  
  });

  it('login account', () =>{
      const wrapper = mount(
        <Router history={history}>
          <MainPage />
        </Router>);
      const component = wrapper.find('MainPage');
      const button = component.find('button').at(1);
      button.simulate('click');
      expect(window.location.pathname).toBe('/login');  
    });
})

