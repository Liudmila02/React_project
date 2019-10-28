import React from "react";
import Navigation from "../components/navigation";
import nock from 'nock';

describe("Component render", () => {
    let component

  it("should render navigation for site", () => {
    component = shallow(<Navigation />); 
  });

  it('sign out with account', async () =>{
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/signout")
    .reply(200, {} );
    
    component.find('button').simulate ('click');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/login');  
    nock.cleanAll()
  });
})
