import React from "react";
import MainPage from "../../components/mainPage";
import { Router, Route } from 'react-router-dom'

import history from '../../utils/history'

describe("Component render", () => {
  
  it('signup account', () =>{
    const wrapper = mount(
      <Router history={history}>
        <MainPage />
      </Router>);
    const component = wrapper.find('MainPage');
    const link = component.find('button').at(0);
    link.simulate('click');
    expect(window.location.pathname).toBe('/signUp');  
  });

  it('login account', () =>{
      const wrapper = mount(
        <Router history={history}>
          <MainPage />
        </Router>);
      const component = wrapper.find('MainPage');
      const link = component.find('button').at(1);
      link.simulate('click');
      expect(window.location.pathname).toBe('/login');  
    });
})

// const wrapper = mount(
  //   <Router history={history}>
  //     <Route>
  //       <MainPage />
  //     </Route>
  //   </Router>);
//   it("should run button Sign Up", () => {
    
//     const onSignUp = jest.fn();
//     const component = wrapper.find("MainPage");
//     const link = component.find("#signUp");
//     link.simulate("click");
//     expect(component.props().onSignUp).toHaveBeenCalled();
//   });
  
//   it("should run button Login", () => {
   
//     const onLogin = jest.fn();
//     const component = wrapper.find("MainPage");
//     const link = component.find("#login");
//     link.simulate("click");
//     expect(component.props().onLogin).toHaveBeenCalled();
//   });
// })
// console.log(history)
// const component = wrapper.find('MainPage');
// const link = component.find('Link').at(0);

// link.simulate('click');
// wrapper.update()
// console.log(link.instance())
// wrapper.instance().props.history.push('/signUp')
// console.log(wrapper.instance().props)
// expect(onClick).toHaveBeenCalled()
// expect(window.location.pathname).toBe('/signUp'); 



// component.find('[id="signUp"]').at(0).simulate ('click');
// await waitFor(2000)
// expect(component(window.location.pathname)).toBe('/signUp'); 
// nock.cleanAll()
