import React from 'react';
import TaskForm from '../../../components/tasks/taskForm';
import { Router } from 'react-router-dom';
import history from '../../../utils/history';
import nock from 'nock';

describe('Test case for testing TaskForm', () => {
  const wrapper = mount(
  <Router history={history}>
    <TaskForm />
  </Router>);
  wrapper.find("TaskForm");

  it("should render form", () => {
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(5);
    expect(wrapper.find("input")).toHaveLength(4);
    expect(wrapper.find("select")).toHaveLength(1);
    expect(wrapper.find("option")).toHaveLength(3);
  });

  it('input check', () => {
    wrapper.find('input[id="title"]').simulate('change', {target: { value: 'task' }});
    expect(wrapper.find('input[id="title"]').instance().value).toEqual('task');
    wrapper.find('input[id="description"]').simulate('change', {target: { value: 'cooking' }});
    expect(wrapper.find('input[id="description"]').instance().value).toEqual('cooking');
    wrapper.find('select[id="priority"]').simulate('change', {target: { value: '1' }});
    expect(wrapper.find('select[id="priority"]').instance().value).toEqual('1');
    wrapper.find('input[id="due_date"]').simulate('change', { target: { value: '10/02/2019' }});

    expect(wrapper.find('input[id="due_date"]').instance().value = '10/02/2019');
    wrapper.find('input[id="check"]').simulate('change', {target: { value:"false" }});
    expect(wrapper.find('input[id="check"]').instance().value).toEqual("false");
  })
  
  it('TaskForm check with right data', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/api/tasks")
    .reply(200, { task: { title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );
    
    wrapper.find('button').simulate('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  }) 
})