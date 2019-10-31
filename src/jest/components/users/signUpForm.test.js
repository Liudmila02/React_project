import React from 'react';
import SignUpForm from '../../../components/users/signUpForm';

import nock from 'nock';

describe('Test case for testing signUp',() => {
  let component
  component = mount(<SignUpForm/>);

  it('input check', () => {
    component = mount(<SignUpForm/>);
    component.find('input[id="username"]').simulate('change', {target: {name: 'username', value: 'username'}});
    expect(component.state('username')).toEqual('username');
    component.find('input[id="Fname"]').simulate('change', {target: {name: 'first_name', value: 'fname'}});
    expect(component.state('first_name')).toEqual('fname');
    component.find('input[id="Lname"]').simulate('change', {target: {name: 'last_name', value: 'lname'}});
    expect(component.state('last_name')).toEqual('lname');
    component.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'good@gmail.com'}});
    expect(component.state('email')).toEqual('good@gmail.com');
    component.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'password123'}});
    expect(component.state('password')).toEqual('password123');
  })
  
  it('signUp check with right data', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/signUp")
    .reply(200, { user: { username: 'username', first_name: 'fname', last_name: 'lname', email: 'good@gmail.com', password: 'password123' }} );
    
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/');  
    nock.cleanAll()
  }) 

})