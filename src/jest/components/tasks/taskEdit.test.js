import React from "react";
import TaskEdit from "../../../components/tasks/taskEdit";
import { Router } from "react-router-dom"
import history from '../../../utils/history'
import nock from 'nock';

describe("Component render", () => {
  const component = mount(
    <Router history={history}>
      <TaskEdit match={{params: { taskId: '212'}}}/>
    </Router>)
  const profileScope = nock('http://localhost:4000/')
  .persist()
  .get("/api/tasks/undefined")
  .reply(200, { task: { id: '212', title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );

  component.find("TaskEdit");
 
  // it("should error 401", async () => {
  //   const component = mount(
  //     <Router history={history}>
  //       <TaskEdit match={{params: { taskId: '212'}}}/>
  //     </Router>)
  //   const profileScope = nock('http://localhost:4000/')
  //   .persist()
  //   .log(console.log)
  //   .get("/api/tasks/undefined")
  //   .reply(401, {login: {email: '', password: ''}});
  //   await waitFor(2000)
  //   expect(window.location.pathname).toBe('/login');  
  //   nock.cleanAll()
  // })


  it("should render form", () => {
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("label")).toHaveLength(5);
    expect(component.find("input")).toHaveLength(4);
    expect(component.find("select")).toHaveLength(1);
    expect(component.find("option")).toHaveLength(3);
  });
    
  it('TaskEdit check with right data', async () => {
    const component = mount(
      <Router history={history}>
        <TaskEdit match={{params: {taskId: '212'}}}/>
      </Router>)
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .put("/api/tasks/undefined")
    .reply(200, { newTask: { title: 'task1', description: 'play games', priority: '1', due_date: '10/02/2019', completed: false }} );
    
    component.find('button').simulate('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  });
});
