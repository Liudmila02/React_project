
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


