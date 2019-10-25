import React from 'react';
import LoginForm from '../../../components/users/LoginForm';
import nock from 'nock';

describe('Test case for testing login',() =>{
  let component
  beforeEach(() => {
    component = mount(<LoginForm />)
  })
  it('input check',()=>{
    component = mount(<LoginForm/>);
    component.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'good@gmail.com'}});
    expect(component.state('email')).toEqual('good@gmail.com');
    component.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'password123'}});
    expect(component.state('password')).toEqual('password123');
    })

  it('login check with right data', async ()=>{
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/api/login")
    .reply(200, { user: {id: 1, email: 'good@gmail.com', password: 'password123' }} );
    
    component.find('button').simulate('click');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  })
 
})