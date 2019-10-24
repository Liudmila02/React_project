import React from "react";
import { shallow, mount } from "enzyme";
import Routes from '../App';

import { Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-15';


let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = mount(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Home component for / router (getting array of routes)', () => {
    expect(pathMap['/']).toBe(MainPage);
  })
  it('should show News Feed component for /login router', () => {
    expect(pathMap['/login']).toBe(LoginForm);
  })
  it('should show News Feed component for /signup router', () => {
    expect(pathMap['/signup']).toBe(SignUpForm);
  })
  it('should show News Feed component for /task router', () => {
    expect(pathMap['/task']).toBe(TaskForm);
  })
  it('should show News Feed component for /tasks router', () => {
    expect(pathMap['/tasks']).toBe(TaskList);
  })
  it('should show News Feed component techdomain for /tasks/:taskId/edit router', () => {
    expect(pathMap['/tasks/:taskId/edit']).toBe(TaskEdit);
  })
  it('should show News Feed component techdomain for /tasks/:taskId/show router', () => {
    expect(pathMap['/tasks/:taskId/show']).toBe(TaskShow);
  })
})
