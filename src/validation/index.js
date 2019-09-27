export const validate = inputs => {
    const errors = {};
    if (!inputs.email) {
      errors.email = 'Enter your email';
    } else if (inputs.email !== 'Email') {
      errors.email = 'Address email not correct';
    }
    if (!inputs.password) {
      errors.password = 'Enter your password';
    }
    return errors;
  };

  export const validateTask = inputs => {
    const errors = {};
    if (inputs.title = null) {
      errors.title = "this field cann't be blank";}
    if (inputs.description = null) {
      errors.description = "this field cann't be blank";}
    if (inputs.due_date = null) {
        errors.due_date = "choose a due date";}
    return errors;
  };


