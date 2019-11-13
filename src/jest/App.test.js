import React from "react";
import { mount } from "enzyme";
import Router from '../App';
import { Route } from 'react-router-dom';

import MainPage from '../components/mainPage';
import LoginForm from '../components/users/LoginForm';
import SignUpForm from '../components/users/signUpForm';
import TaskForm from '../components/tasks/taskForm';
import TaskList from '../components/tasks/taskList';
import TaskEdit from '../components/tasks/taskEdit';
import TaskShow from '../components/tasks/taskShow';

describe('routes using array of routers', () => {
  let pathMap = {};
  beforeAll(() => {
    const component = mount(<Router/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
     
  })
  it('should component for / router ', () => {
    expect(pathMap['/']).toBe(MainPage);
    expect(pathMap['/login']).toBe(LoginForm);
    expect(pathMap['/signUp']).toBe(SignUpForm);
    expect(pathMap['/task']).toBe(TaskForm);
    expect(pathMap['/tasks']).toBe(TaskList);
    expect(pathMap['/tasks/:taskId/edit']).toBe(TaskEdit);
    expect(pathMap['/tasks/:taskId/show']).toBe(TaskShow);
  })
  
})
