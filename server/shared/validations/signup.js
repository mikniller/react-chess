import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if(Validator.isEmpty(data.username)) {
    errors.username = 'username required';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email required';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }


  if(Validator.isEmpty(data.password)) {
    errors.password = 'Name required';
  }

  if(Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password required';
  }

  if(!Validator.equals(data.password,data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password are not equal';
  }


  if(Validator.isEmpty(data.timezone)) {
    errors.timezone = 'Timezone required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
