import React from 'react';
import TaskList from '../../../components/tasks/taskList'
import { Router } from 'react-router-dom'

describe('Test case for testing list tasks',() =>{

  it('button new task', () =>{
    const wrapper = mount(
      <Router history={history}>
        <TaskList />
      </Router>);
    const component = wrapper.find('TaskList');
    const button = component.find('button').at(0);
    button.simulate('click');
    expect(window.location.pathname).toBe('/task');  
  });
  
  it('button sort by title task', ()=>{
    component = mount(
    <Router>
      <TaskList/>
    </Router>);
    component.find('button').at(1).simulate ('submit');
    expect(window.location.pathname).toBe('/task');  
  }) 
  
  it('button sort by priority task', ()=>{
    component = mount(
    <Router>
      <TaskList/>
    </Router>);
    component.find('button').at(1).simulate ('submit');
    expect(window.location.pathname).toBe('/task');  
  }) 
  
  it('button sort by due date task', ()=>{
    component = mount(
    <Router>
      <TaskList/>
    </Router>);
    component.find('button').at(1).simulate ('submit');
    expect(window.location.pathname).toBe('/task');  
  }) 
  it('button sort by reverse task', ()=>{
    component = mount(
    <Router>
      <TaskList/>
    </Router>);
    component.find('button').at(1).simulate ('submit');
    expect(window.location.pathname).toBe('/task');  
  }) 
  it('button delete checked', ()=>{
    component = mount(
    <BrowserRouter>
      <TaskList/>
    </BrowserRouter>);
    component.find('button').at(0).simulate ('submit');
    expect(window.location.pathname).toBe('/task');  
  }) 

  it('button check / uncheck all ', ()=>{
    component = mount(
    <BrowserRouter>
      <TaskList/>
    </BrowserRouter>);
    component.find('button').at(0).simulate ('submit');
    expect(window.location.pathname).toBe('/task');  
  }) 


})



