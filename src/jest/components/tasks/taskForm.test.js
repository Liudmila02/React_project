// import React from "react";
// import { mount } from "enzyme";
// import TaskForm from "../../../components/tasks/taskForm";
// import { Router } from "react-router-dom";

// describe("Component", () => {
//   const onDeleteTask = jest.fn();
//   const onCompletedTask = jest.fn();
//   const wrapper = mount(
    
//         <TaskForm
//           task={{
//             title: "sdsd",
//             priority: "1",
//             description: "dffdfdf",
//             due_date: "12/12/12",
//             completed: "false"
//           }}
//           onDeleteTask={onDeleteTask}
//           onCompletedTask={onCompletedTask}
//         />
     
//   );

//   it("should render h2 h3 h4 ", () => {
//     expect(component.find("h2")).toHaveLength(1);
//     expect(component.find("h3")).toHaveLength(1);
//     expect(component.find("h4")).toHaveLength(1);
//   });

//   it("should render form", () => {
//     expect(wrapper.find("label")).toHaveLength(2);
//     expect(wrapper.find("span")).toHaveLength(6);
//   });

//   it("should run handleDone", () => {
//     const component = wrapper.find("TaskForm");
//     const btn = component.find("#btnshow");
//     btn.simulate("click");
//     expect(component.props().onShowTask).toHaveBeenCalled();
//   });

//   it("should run handleDone", () => {
//     const component = wrapper.find("TaskForm");
//     const btn = component.find("#btnedit");
//     btn.simulate("click");
//     expect(component.props().onEditTask).toHaveBeenCalled();
//   });

//   it("should run handleDone", () => {
//     const component = wrapper.find("TaskForm");
//     const btn = component.find("#btndone");
//     btn.simulate("click");
//     expect(component.props().onCompletedTask).toHaveBeenCalled();
//   });

//   it("should run handledelete", () => {
//     const component = wrapper.find("TaskForm");
//     const btn = component.find("#btndelete");
//     btn.simulate("click");
//     expect(component.props().onDeleteTask).toHaveBeenCalled();
//   });
// });