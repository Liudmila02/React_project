import React from 'react';
import TaskList from '../../../components/tasks/taskList'
import { BrowserRouter} from 'react-router-dom'
import nock from 'nock';

describe('Test case for testing list tasks',() =>{
  let component

  it('button new task', async ()=>{
    component = mount(
    <BrowserRouter>
      <TaskList/>
    </BrowserRouter>);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .post("/api/tasks")
    .reply(200, { task: { title: 'task', description: 'cooking', priority: '1', due_date: '10/10/2019', completed: 'false' }} );
    
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/task');  
    nock.cleanAll()
  }) 


})



// it("should run handleDone", () => {
//     const component = wrapper.find("TaskProfile");
//     const btn = component.find("#btndone");
//     btn.simulate("click");
//     expect(component.props().onDoneTask).toHaveBeenCalled();
//   });

//   it("should run handledelete", () => {
//     const component = wrapper.find("TaskProfile");
//     const btn = component.find("#btndelete");
//     btn.simulate("click");
//     expect(component.props().onDeleteTask).toHaveBeenCalled();
//   });