export const normalizedCurrency = (value: number, type = 'euro'): string => {
  if (type === 'euro') {
    return `${value},00 €`;
  }
  return `${value},00 $`;
};

export const addCurrency = (value: number, type = 'euro'): string => {
  if (type === 'euro') {
    return `${value} €`;
  }
  return `${value} $`;
};

export const intoString = (value: string | number): string => `${value}`;

export const userNameValidator = (username: string): string => {
  if (username.trim().length === 0) {
    return '';
  }
  if (/\W+/g.test(username)) {
    return 'Has invalid characters';
  }
  if (username.length < 6) {
    return 'Length should be above 6';
  }
  if (username.length > 15) {
    return `Maximum only 15 character, now(${username.length})`;
  }
  return '';
};

export const passwordValidator = (password: string): string => {
  if (password.trim().length === 0) {
    return '';
  }
  if (password.length > 0 && password.length < 8) {
    return 'Need at least 8 characters';
  }
  if (!/(?=.*?[A-Z])/g.test(password)) {
    return 'Need at least one uppercase letter';
  }
  if (!/(?=.*?[a-z])/g.test(password)) {
    return 'Need at least one lowercase letter';
  }
  if (!/(?=.*?[0-9])/g.test(password)) {
    return 'Need at least one number';
  }
  if (!/(?=.*?[#?!@$%^&*-])/g.test(password)) {
    return 'Need at least one special character';
  }

  if (password.length > 15) {
    return `Maximum only 15 character, now(${password.length})`;
  }
  return '';
};

export const isEmpty = (val: string): boolean => val.trim().length === 0;

export const userNameValidatorBoolean = (userName: string): boolean => {
  if (userName.trim().length === 0) {
    return false;
  }
  if (/\W+/g.test(userName)) {
    return false;
  }
  if (userName.length < 6) {
    return false;
  }
  if (userName.length > 15) {
    return false;
  }
  return true;
};

export const fistCapitalLetter = (val: string): string => (val.length > 0 ? val.charAt(0).toUpperCase() : 'A');

export const accumulateByKey = (arr: any[], key: string) =>
  arr.map(
    (
      sum => value =>
        (sum += value[key])
    )(0)
  );

export const sortBy = (arr: any[], k: string): number[] =>
  arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
export const sumBy = (arr: any[], k: string): number => arr.reduce((a, b) => a + b[k], 0);

export const sentenceCase = ([first, ...rest]: string[], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
