import React from "react";
import TaskEdit from "../../../components/tasks/taskEdit";
import { Router } from "react-router-dom"
import nock from 'nock';

  describe("Component render", () => {
    const component = mount(
      <TaskEdit match={{params: { taskId: '212'}}}/>)
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/api/tasks/212")
    .reply(200, { task: { id: '212', title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );

    component.find("TaskEdit");
 
    it("should render form", () => {
      expect(component.find("form")).toHaveLength(1);
      expect(component.find("label")).toHaveLength(5);
      expect(component.find("input")).toHaveLength(4);
      expect(component.find("select")).toHaveLength(1);
      expect(component.find("option")).toHaveLength(3);
    });

    // it('input check', () => {
    //   component.find('input[id="title"]').simulate('change', { target: { value: 'task1' }});
    //   expect(component.state('title')).toEqual('task1');
    //   component.find('input[id="description"]').simulate('change', { target: { value: 'play games' }});
    //   expect(component.state('description')).toEqual('play games');
    //   component.find('select[id="priority"]').simulate('change', { target: { value: '1' }});
    //   expect(component.state('priority')).toEqual('1');
    //   component.find('input[type="date"]').simulate('change', { target: { value: '10/02/2019' }});
    //   expect(component.state('due_date')).toEqual('10/02/2019');
    //   component.find('input[id="check"]').simulate('change', { target: { checked: false }});
    //   expect(component.state('completed')).toEqual(false);
    // })
    
    it('TaskEdit check with right data', async () => {
      const component = mount(
        <TaskEdit match={{params: {taskId: '212'}}}/>)
      const profileScope = nock('http://localhost:4000/')
      .persist()
      .put("/api/tasks/212")
      .reply(200, { newTask: { title: 'task1', description: 'play games', priority: '1', due_date: '10/02/2019', completed: false }} );
      
      component.find('button').simulate('submit');
      await waitFor(2000)
      expect(window.location.pathname).toBe('/tasks');  
      nock.cleanAll()
    }) 
})