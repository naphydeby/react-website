function Validation(form) {
  const errors = {};

  if (!form.firstname) {
    errors.firstname = "firstname required";
  } else if (!/^[a-zA-Z]+$/.test(form.firstname)) {
    errors.firstname = "name must contain only alphabetic characters";
  }
  if (!form.lastname) {
    errors.lastname = "lastname required";
  } else if (!/^[a-zA-Z]+$/.test(form.lastname)) {
    errors.lastname = "name must contain only alphabetic characters";
  }

  if (!form.date) {
    errors.date = "date required";
  }
  else {
    const selectedDate = new Date(form.date);
    const today =new Date();
    if(selectedDate > today){
      errors.date ="Date can not be in future"
    }
  }
  if (!form.email) {
    errors.email = "email required";
  }
  else if(!/\S+@\S+\.\S+/.test(form.email)){
    errors.email= "Email not valid"
  }
  if (!form.phonenumber) {
    errors.phonenumber = "phonenumber required";
  }
 else if (form.phonenumber.length < 11 || form.phonenumber.length > 14) {
  errors.phonenumber = " phonenumber not correct";
}
  if (!form.password) {
    errors.password = "password required";
  }
  else if (
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(form.password) ||
    !/[A-Z]/.test(form.password) ||
    !/[a-z]/.test(form.password)
  ) {
    errors.password =
      " Password must contain atleast one uppercase, one lowercase and one special character";
  } else if (form.password.length < 8) {
    errors.password = " Password must be atleast 8 characters";
  }
  if (form.confirmPassword !== form.password) {
    errors.confirmPassword = "password not correct";
  }

  return errors;
}
export default Validation;
