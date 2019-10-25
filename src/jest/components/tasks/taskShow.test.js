// import React from "react";
// import { mount } from "enzyme";
// import TaskShow from "../../../components/tasks/taskShow";

// import { Router } from "react-router-dom";

// describe("Component", () => {
//   const wrapper = mount(
//     <Router history={hist}>
//       <Provider store={store}>
//         <TaskShow
//           task={{
//             title: "sdsd",
//             description: "dffdfdf",
//             priority: "1",
//             due_date: "12/12/12",
//             completed: "false"
//           }}
//         />
//       </Provider>
//     </Router>
//   );

// //   it("should render h2 h3 h4 ", () => {
// //     expect(wrapper.find("h2")).toHaveLength(1);
// //     expect(wrapper.find("h3")).toHaveLength(1);
// //     expect(wrapper.find("h4")).toHaveLength(1);
// //   });
//   it("should render form", () => {
//     expect(wrapper.find("label")).toHaveLength(2);
//     expect(wrapper.find("div")).toHaveLength(6);
//   });
// });