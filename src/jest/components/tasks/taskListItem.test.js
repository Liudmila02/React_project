import React from 'react'
import TaskListItem from '../../../components/tasks/taskShow'
import { BrowserRouter} from 'react-router-dom'
import nock from 'nock';

describe ('Task list item', () => {
  let component
  const onDeleteTask = jest.fn();
  const onCompletedTask = jest.fn();

  it('button show', async () => {
    component = mount(
			<BrowserRouter>
				<TaskListItem />
			</BrowserRouter>);
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .get("/api/tasks/122/show")
    .reply(200, { Item: { title: 'task', description: 'cooking', priority: '1', due_date: '02/11/2019', completed: 'false'} } );
        
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  });

  it('button edit', async () => {
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .put("/api/tasks/122/edit")
    .reply(200, { newTask: { title: 'task', description: 'cooking', priority: '1', due_date: '02/11/2019', completed: 'false'} } );
        
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  });

  it('button delete', async () => {    
    const profileScope = nock('http://localhost:4000/')
    .persist()
    .delete("/api/tasks/122")
    .reply(200, { Item: { title: null, description: null, priority: null, due_date: null, completed: null} } );
        
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  });

  it('button completed', async () => {
    
    const btn = component.find("#btncompleted");
    btn.simulate("click");
    expect(component.props().onCompletedTask).toHaveBeenCalled();
  });
    
})