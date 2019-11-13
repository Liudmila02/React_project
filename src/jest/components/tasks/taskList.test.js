import React from 'react';
import TaskList from '../../../components/tasks/taskList'
import TaskListItem from '../../../components/tasks/taskListItem'
import { Router } from 'react-router-dom'
import history from '../../../utils/history'

import nock from 'nock'

describe('Test case for testing list tasks',() =>{
  let component
  it('button sort by title task', ()=>{
    component = mount(
    <Router history={history}>
      <TaskList/>
    </Router>);
    component.find("a").at(1).simulate ('click');
    expect(["ping wool", "diorite"].sort()).toEqual(["diorite", "ping wool"].sort());
  }) 

  it('button sort by priority task', ()=>{
    component = mount(
    <Router history={history}>
      <TaskList/>
    </Router>);
    component.find("a").at(2).simulate ('click');
    expect(["3", "1", "2"].sort()).toEqual(["1", "2", "3"].sort());
  }) 
  
  it('button sort by due date task', ()=>{
    component = mount(
    <Router history={history}>
      <TaskList/>
    </Router>);
    component.find("a").at(3).simulate ('click');
    expect(["10/19/2019", "10/04/2019", "11/08/2019"].sort()).toEqual(["10/04/2019", "10/19/2019", "11/08/2019"].sort());
  }) 

  it("should render ", () => {
    expect(component.find("button")).toHaveLength(3);
    expect(component.find("span")).toHaveLength(1);
    expect(component.find("a")).toHaveLength(5);
    expect(component.find("label")).toHaveLength(1);
  });

  it('Task list check with right data', () => {
    const component = mount(
      <Router history={history}>
        <TaskList />
      </Router>)
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/api/tasks")
    .reply(200, { listItems: { title: 'task1' }} );
  }) 

  it('Task list check with bad data', () => {
    const component = mount(
      <Router history={history}>
        <TaskList />
      </Router>)
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/api/tasks")
    .reply(401, { login: { email: null, password: null }} ); 
  }) 

  // it('should delete task ', async () => {
  //   const component = mount(
  //     <Router history={history}>
  //       <TaskListItem match={{params: {deleteId: '212'}}}/>
  //     </Router>)
  //   const profileScope = nock('http://localhost:4000/')
  //   .persist()
  //   .log(console.log)
  //   .delete("/api/tasks/undefined")
  //   .reply(200, {task: { title: '', description: '', priority: '', due_date: '' } } );
    
  //   component.find("#btnDelete").simulate('click');
  //   await waitFor(2000)
  //   expect(component.tasks).toBe();  
  //   nock.cleanAll()
  // })
})


