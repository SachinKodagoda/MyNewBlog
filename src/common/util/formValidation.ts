export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  return password.length >= 6;
};

export const isTruthy = (value: any): boolean => {
  return !!value;
};

export const isString = (value: any): boolean => {
  return value(typeof value === 'string' || value instanceof String);
};

export const isNotEmpty = (value: any): boolean => {
  return `${value}`.trim().length > 0;
};

export const isNumber = (value: any): boolean => {
  return typeof value === 'number';
};
