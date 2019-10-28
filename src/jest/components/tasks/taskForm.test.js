import React from 'react';
import TaskForm from '../../../components/tasks/taskForm';
import nock from 'nock';

describe('Test case for testing TaskForm', () => {
  let component

  it('input check', () => {
    component = mount(<TaskForm/>);
    
    component.find('input[type="text"]').simulate('change', { target: { value: 'task' }});
    expect(component.state('title')).toEqual('task');
    component.find('input[type="text"]').simulate('change', { target: { value: 'cooking' }});
    expect(component.state('description')).toEqual('cooking');
    component.find('select[type="select"]').simulate('change', { target: { value: '1' }});
    expect(component.state('priority')).toEqual('1');
    component.find('input[type="date"]').simulate('change', { target: { value: '10/02/2019' }});
    expect(component.state('duedate')).toEqual('10/02/2019');
    component.find('input[type="checkbox"]').simulate('change', { target: { value: 'false' }});
    expect(component.state('completed')).toEqual('false');
   })
  
  it('TaskForm check with right data', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/api/tasks")
    .reply(200, { task: { title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: 'false' }} );
    
    component.find('button').simulate('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  }) 
})