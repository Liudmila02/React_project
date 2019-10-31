import React from 'react'
import TaskShow from '../../../components/tasks/taskShow'
import { BrowserRouter} from 'react-router-dom'

describe('Test case for testing TaskShow', () => {
  let component
  
  it('button back', async ()=>{
    component = mount(
    <BrowserRouter>
      <TaskShow/>
    </BrowserRouter>);
    component.find('button').simulate ('submit');
    await waitFor(2000)
    expect(window.location.pathname).toBe('/tasks');  
    nock.cleanAll()
  })

})