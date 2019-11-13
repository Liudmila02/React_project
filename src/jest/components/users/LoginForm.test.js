import React from 'react';
import LoginForm from '../../../components/users/LoginForm';
import { Router } from 'react-router-dom';

import history from '../../../utils/history';
import nock from 'nock';

describe('Test case for testing login',() =>{
  let component
  component = mount(
    <Router history={history}>
      <LoginForm/>
    </Router>);

  it('input check', () => {
    component.find('input[type="email"]').simulate('change', {target: { value: 'good@gmail.com' }});
    expect(component.find('input[type="email"]').instance().value).toEqual('good@gmail.com');
    component.find('input[type="password"]').simulate('change', {target: { value: 'password123' }});
    expect(component.find('input[type="password"]').instance().value).toEqual('password123');
  })

  it('login check with right data', async ()=>{
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/api/login")
    .reply(200, { user: { email: 'good@gmail.com', password: 'password123' }} );
    
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  }) 
})