import React from "react";
import Navigation from "../components/navigation";
import { Router } from "react-router-dom";
import history from "../utils/history"
import nock from "nock";

describe("Component render", () => {
  let component

  it('should view list task', async () =>{
    component = mount(
    <Router history={history}>
      <Navigation />
    </Router>);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/api/tasks")
    .reply(200, { listItems: {title: 'task'} } );
    
    component.find('#taskList').simulate ('click');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  });

  it('sign out with account', async () =>{
    component = mount(
    <Router history={history}>
      <Navigation />
    </Router>);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/signOut")
    .reply(200, { user: { email: null, password: null} } );
    
    component.find('#signOut').simulate ('click');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/login');  
    nock.cleanAll()
  });
})
