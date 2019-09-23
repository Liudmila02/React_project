import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
// import Calendar from 'react-input-calendar'
//<Calendar format='DD/MM/YYYY' date='4-12-2014' />
class taskForm extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="Title"
        />
        <Field
          name="description"
          component="input"
          type="text"
          placeholder="description"
        />
        <Field
          name="priority"
          component="select"
          type="integer"
          placeholder="priority"
        />
        <Field
          name="due_date"
          component="input"
          type="date"
        />
        <Field
          name="completed"
          component="input"
          type="checkbox"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

taskForm = reduxForm ({
  form: 'task',
}) (taskForm);

export default taskForm;