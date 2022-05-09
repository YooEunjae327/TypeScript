export const validationNullORundefined = (data?: string | object): boolean => {
  if (data === undefined || data === null) {
    return true;
  }
  return false;
};
