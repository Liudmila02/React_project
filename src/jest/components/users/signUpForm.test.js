import React from 'react';
import SignUpForm from '../../../components/users/signUpForm';
import { Router } from 'react-router-dom';

import history from '../../../utils/history';
import nock from 'nock';

describe('Test case for testing signUp',() => {
  let wrapper
  
  wrapper = mount(
  <Router history={history}>
    <SignUpForm />
  </Router>);

  it("should render form", () => {
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(5);
  });

  it('input check', () => {
    wrapper.find('input[id="username"]').simulate('change', {target: { value: 'user' }});
    expect(wrapper.find('input[id="username"]').instance().value).toEqual('user');
    wrapper.find('input[id="Fname"]').simulate('change', {target: { value: 'fname' }});
    expect(wrapper.find('input[id="Fname"]').instance().value).toEqual('fname');
    wrapper.find('input[id="Lname"]').simulate('change', {target: { value: 'lname' }});
    expect(wrapper.find('input[id="Lname"]').instance().value).toEqual('lname');
    wrapper.find('input[type="email"]').simulate('change', {target: { value: 'good@gmail.com' }});
    expect(wrapper.find('input[type="email"]').instance().value).toEqual('good@gmail.com');
    wrapper.find('input[type="password"]').simulate('change', {target: { value: 'password123' }});
    expect(wrapper.find('input[type="password"]').instance().value).toEqual('password123');
  })
  
  it('signUp check with right data', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/signUp")
    .reply(200, { user: { username: 'user', first_name: 'fname', last_name: 'lname', email: 'good@gmail.com', password: 'password123' }} );
    
    wrapper.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/');  
    nock.cleanAll()
  }) 

})