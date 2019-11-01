import React from 'react';
import TaskForm from '../../../components/tasks/taskForm';
import nock from 'nock';

describe('Test case for testing TaskForm', () => {
  const component = mount(<TaskForm/>);
  component.find("TaskForm");
  it("should render form", () => {
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("label")).toHaveLength(5);
    expect(component.find("input")).toHaveLength(4);
    expect(component.find("select")).toHaveLength(1);
    expect(component.find("option")).toHaveLength(3);
  });

  it('input check', () => {
    component.find('input[id="title"]').simulate('change', { target: { value: 'task' }});
    expect(component.state('title')).toEqual('task');
    component.find('input[id="description"]').simulate('change', { target: { value: 'cooking' }});
    expect(component.state('description')).toEqual('cooking');
    component.find('select[id="priority"]').simulate('change', { target: { value: '1' }});
    expect(component.state('priority')).toEqual('1');
    component.find('input[type="date"]').simulate('change', { target: { value: '10/02/2019' }});
    expect(component.state('due_date')).toEqual('10/02/2019');
    component.find('input[id="check"]').simulate('change', { target: { checked: false }});
    expect(component.state('completed')).toEqual(false);
  })
  
  it('TaskForm check with right data', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/api/tasks")
    .reply(200, { task: { title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );
    
    component.find('button').simulate('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  }) 
})