import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

function waitFor(time) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve("result");
      }, time);
    });
   }
   global.waitFor = waitFor;
 
global.shallow = shallow
global.render = render
global.mount = mount
