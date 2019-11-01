import React from 'react'
import TaskListItem from '../../../components/tasks/taskListItem'
import { Router} from 'react-router-dom'
import nock from 'nock';

describe ('Task list item', () => {
  let component

  // it('button show', async () => {
  //   component = mount(
	// 		<Router>
	// 			<TaskListItem />
	// 		</Router>);
  //   const profileScope = nock('http://localhost:4000/')
  //   .persist()
  //   .get("/api/tasks/212")
  //   .reply(200, { Item: { title: 'task', description: 'cooking', priority: '1', due_date: '02/11/2019', completed: 'false'} } );
        
  //   component.find('button').simulate ('submit');
  //   await waitFor(2000)
  //   expect(window.location.pathname).toBe('/tasks/212/show');  
  //   nock.cleanAll()
  // });

  // it('button edit', () => {
  //   const wrapper = mount(
  //     <Router history={history}>
  //       <TaskListItem />
  //     </Router>);
  //   const component = wrapper.find('MainPage');
  //   const button = component.find('button').at(1);
  //   button.simulate('click');
  //   expect(window.location.pathname).toBe('/tasks/313/edit');  
  // });    

  it('button delete', async () => {   
    let component 
    component = mount(
    <Router>
      <TaskListItem match={{params: { taskId: '212'}}} />
    </Router>);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .delete("/api/tasks/122")
    .reply(200, { task: { title: '', description: '', priority: '', due_date: '', completed: ''} } );
        
    component.find('#btnDelete').simulate ('click');
    await waitFor(2000)
    expect(wrapper).toBe(0);  
    nock.cleanAll()
  });

  // it('button completed', async () => {
    
  //   const btn = component.find("#btncompleted");
  //   btn.simulate("click");
  //   expect(component.props().onCompletedTask).toHaveBeenCalled();
  // });
    
})