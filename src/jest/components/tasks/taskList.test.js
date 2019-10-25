// import React from "react";
// import { shallow, mount } from "enzyme";
// import TaskList from "../../../components/tasks/taskList";
// import { Router } from "react-router-dom";

// const onDeleteTask = jest.fn();

// const tasks = [
//   { id: "234", title: "sdsdsds213d", priority: 1, completed: false },
//   { id: "237", title: "sdsd123sdsd", priority: 2, completed: false },
//   { id: "247", title: "sdsd123sdsd", priority: 3, completed: true }
// ];

// const wrapper = mount(
//   <Router history={nav}>
//     <Provider store={store}>
//       <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
//     </Provider>
//   </Router>
// );

// const component = wrapper.find("TasksList");

// it("should render form", () => {
//   expect(component.find("a")).toHaveLength(5);
//   expect(component.find("Link")).toHaveLength(3);
//   expect(component.find("#title")).toHaveLength(3);
//   expect(component.find("#priority")).toHaveLength(2);
//   expect(component.find("#delbtn")).toHaveLength(3);
// });

// it("should run handleDelete", () => {
//   const btn = component.find("#delbtn");
//   btn.at(1).simulate("click");
//   component.update();
//   expect(component.props().onDeleteTask).toHaveBeenCalled();
// });