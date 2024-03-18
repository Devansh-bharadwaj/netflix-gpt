export const checkValidate = (email, password) => {
  const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);

  if (!isEmailValid) return "Invalid Email Address";
  if (!isPasswordValid) return "Incorrect Password";

  return null;
};
