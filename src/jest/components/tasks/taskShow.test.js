import React from 'react';
import TaskShow from '../../../components/tasks/taskShow';
import { Router} from 'react-router-dom';
import history from '../../../utils/history';
import nock from 'nock';

describe('Test case for testing TaskShow', () => {

  const props = { Item: {  title: 'task', description: 'cooking', priority: '1', due_date:'10/02/2019', completed: false}}
  const profileScope = nock('http://localhost:4000/')
  .persist()
  .get("/api/tasks/undefined")
  .reply(200, { task: { id: '212', title: 'task', description: 'cooking', priority: '1', due_date: '10/02/2019', completed: false }} );

  const wrapper = mount(
    <Router history={history} >
      <TaskShow match={{params: { taskId: '212'}}} />
    </Router>
  );
  
  it("should render task box", async () => {
    await waitFor(2000)
    wrapper.update()
    expect(wrapper.find("#title").text()).toBe(' Title: task');
    expect(wrapper.find("#description").text()).toBe(' Description: cooking');
    expect(wrapper.find("#priority").text()).toBe(' Priority: 1');
    expect(wrapper.find("#duedate").text()).toBe(' Due date: 10/02/2019');
    expect(wrapper.find("#completed").text()).toBe(' Completed: uncompleted');
    expect(wrapper.find("button")).toHaveLength(1);
  });

})
