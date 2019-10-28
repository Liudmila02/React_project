import React from "react";
import MainPage from "../../components/mainPage";
import nock from 'nock';

describe("Component render", () => {
  let component

  it('sign up in account', async () =>{
    component = mount(<MainPage />);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/signUp")
    .reply(200, { user: { email: null, password: null} } );
    
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/signUp');  
    nock.cleanAll()
  });
  it('sign in account', async () =>{
    component = mount(<MainPage />);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/login")
    .reply(200, { user: { email: null, password: null} } );
    
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  });
})
