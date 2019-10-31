import React from "react";
import TaskEdit from "../../../components/tasks/taskEdit";
import nock from 'nock';

  describe("Component render", () => {
    let component
    
    it('filled fields', () => {
        component = mount(<TaskEdit task={{ title: "sdsd", description: "dffdfdf", priority: "1", due_date: "02/11/2019", completed: "false" }}
        onEditTask={onEditTask}
        />);
    })

  it('input check', () => {
    component = mount(<TaskEdit/>);
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

   it('TaskEdit check with right data', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .put("/api/tasks/12/edit")
    .reply(200, { newTask: { id: 12, title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: 'false' }} );
    
    component.find('button').simulate('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  }) 
})