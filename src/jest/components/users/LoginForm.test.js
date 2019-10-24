import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../../components/users/LoginForm';
import Adapter from 'enzyme-adapter-react-15';

describe('Test case for testing login',() =>{
  let wrapper;
  test('email check',()=>
    {
    wrapper = shallow(<LoginForm/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'good@gmail.com'}});
    expect(wrapper.state('email')).toEqual('good@gmail.com');
    })

  it('password check',()=>{
    wrapper = shallow(<LoginForm/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'password123'}});
    expect(wrapper.state('password')).toEqual('password123');
  })

  it('login check with right data',()=>{
    wrapper = shallow(<LoginForm/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'good@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'password123'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(true);
  })

  it('login check with wrong data',()=>{
    wrapper = shallow(<LoginForm/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'bademail'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'badpassword'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(false);
  })
})