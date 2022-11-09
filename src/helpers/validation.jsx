const validateEmpty = (value) => !!value;

const validateEmail = (value) => {
  // eslint-disable-next-line prefer-regex-literals
  const regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return regExp.test(value);
};

const vaidatorsByField = {
  name: validateEmpty,
  email: validateEmail,
  address: validateEmpty,
  paymentType: validateEmpty,
};

export const validate = (validationData) => {
  const validationResult = Object.entries(validationData).map(([key, value]) => {
    const validator = vaidatorsByField[key];
    return { [key]: validator(value) };
  });
  console.log(validationResult);
  console.log(validationResult.every((field) => !!Object.values(field)));
// Runs JS
};
