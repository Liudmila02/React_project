import React from 'react';
import TaskShow from '../../../components/tasks/taskShow';
import { Router} from 'react-router-dom';
import nock from 'nock';

describe('Test case for testing TaskShow', () => {
  const wrapper = mount(
    <Router>
    <TaskShow match={{ params: { taskId: '212'}}}/>
    </Router>) 
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/api/tasks/212")
    .reply(200, { Item: { title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );


  // const profileScope = nock('http://localhost:4000/')
  // .persist()
  // .get("/api/tasks/212")
  // .reply(200, { task: {  title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );
 
  // component.find("TaskShow");

  it("should view task", () =>{
    
    expect(wrapper.find("#title")).toHaveLength(1);
    expect(wrapper.find("#description")).toHaveLength(1);
    expect(wrapper.find("#priority")).toHaveLength(1);
    expect(wrapper.find("#duedate")).toHaveLength(1);
    expect(wrapper.find("#completed")).toHaveLength(1);
   
  })
  
})